"use client";

import { GlobalModalProvider } from "@/contexts/global-modal-context";
import { CartProvider } from "@/contexts/cart-context";
import { ReservationProvider } from "@/contexts/reservation-context";
import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <GlobalModalProvider>
        <ReservationProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            {children}
          </ThemeProvider>
        </ReservationProvider>
      </GlobalModalProvider>
    </CartProvider>
  );
}
