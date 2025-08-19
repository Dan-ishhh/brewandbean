import type { AppProps } from "next/app";
import { LanguageProvider } from "@/contexts/language-context";
import { TranslationProvider } from "@/contexts/translation-context";
import dynamic from "next/dynamic";
const TopbarMenu = dynamic(
  () => import("@/components/ui/topbar-menu").then((m) => m.TopbarMenu),
  { ssr: false }
);
import { Footer } from "@/components/ui/footer";
import { Providers } from "@/providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <LanguageProvider>
        <TranslationProvider>
          <div
            className="min-h-screen flex flex-col"
            style={{
              backgroundColor: "#FFF8F0",
              fontFamily: '"Mozilla Headline", sans-serif;',
            }}
          >
            <TopbarMenu />
            <main className="flex-1">
              <Component {...pageProps} />
              <Analytics />
              <SpeedInsights />
            </main>
            <Footer />
          </div>
        </TranslationProvider>
      </LanguageProvider>
    </Providers>
  );
}
