 "use client"
import { GlobalModalProvider } from "@/contexts/global-modal-context";
import { CartProvider } from "@/contexts/cart-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <GlobalModalProvider>{children}</GlobalModalProvider>
    </CartProvider>
  )
}
