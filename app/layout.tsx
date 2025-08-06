import type React from "react";
import type { Metadata } from "next";
import { TopbarMenu } from "@/components/ui/topbar-menu";
import { Footer } from "@/components/ui/footer";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";
import { Providers } from "./providers";

// export const metadata: Metadata = {
//   title: "v0 App",
//   description: "Created with v0",
//   generator: "v0.dev",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chewy&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html {
            font-family: 'Chewy', sans-serif;
            font-weight: 400;
            font-style: normal;
          }
        `}</style>
      </head>
      <body>
        <Providers>
          <div
            className="min-h-screen flex flex-col"
            style={{
              backgroundColor: "#FFF8F0",
              fontFamily: "Chewy, sans-serif",
            }}
          >
            <TopbarMenu />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
