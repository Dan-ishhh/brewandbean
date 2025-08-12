"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { useLanguage } from "./language-context";
import { langEn } from "@/lib/lang-en";
import { langHi } from "@/lib/lang-hi";

export type TranslationType = typeof langEn;

const TranslationContext = createContext<TranslationType>(langEn);

export function useTranslation() {
  return useContext(TranslationContext);
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const translations = language === "hi" ? langHi : langEn;
  return (
    <TranslationContext.Provider value={translations}>
      {children}
    </TranslationContext.Provider>
  );
}
