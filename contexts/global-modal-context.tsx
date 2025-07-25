import React, { createContext, useContext, useState, ReactNode } from "react";
import { AddToCartModal } from "@/components/cart/add-to-cart-modal";

interface ModalState {
  item: any | null;
  isOpen: boolean;
}

interface GlobalModalContextType {
  openModal: (item: any) => void;
  closeModal: () => void;
}

const GlobalModalContext = createContext<GlobalModalContextType | undefined>(undefined);

export function useGlobalModal() {
  const ctx = useContext(GlobalModalContext);
  if (!ctx) throw new Error("useGlobalModal must be used within GlobalModalProvider");
  return ctx;
}

export function GlobalModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<ModalState>({ item: null, isOpen: false });

  const openModal = (item: any) => setModalState({ item, isOpen: true });
  const closeModal = () => setModalState({ item: null, isOpen: false });

  return (
    <GlobalModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {/* Render modal globally using portal */}
      {modalState.isOpen && (
        <AddToCartModal item={modalState.item} isOpen={modalState.isOpen} onClose={closeModal} />
      )}
    </GlobalModalContext.Provider>
  );
}
