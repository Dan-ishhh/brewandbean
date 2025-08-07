import type React from "react";
import { TopbarMenu } from "@/components/ui/topbar-menu";
import { Footer } from "@/components/ui/footer";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/coffee-cup.png" />
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
            <main className="flex-1">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
