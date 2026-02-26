"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import hi from "../locales/hi.json";
import en from "../locales/en.json";
// Force HMR reload

type Language = "hi" | "en";
type Translations = Record<string, any>;

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, returnObjects?: boolean) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations: Record<Language, Translations> = {
  hi,
  en,
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("hi");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage for saved language preference on mount
    const savedLang = localStorage.getItem("preferredLanguage") as Language;
    if (savedLang && (savedLang === "hi" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferredLanguage", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string, returnObjects = false): any => {
    // If not mounted yet to avoid hydration mismatch, optionally return Hindi (default)
    // or just proceed. Since layout is mostly server-rendered, hydration mismatches
    // can happen if we render En on server but Hi on client. 
    // Best practice for NextJS is to just use the current state.
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Fallback to key if not found
      }
    }

    if (returnObjects) {
       return value;
    }

    return typeof value === "string" ? value : value !== undefined ? value : key;
  };

  // Avoid hydration mismatch by not rendering until mounted if relying heavily on localstorage
  // But to prevent blank screen, we render with default 'hi' and let it correct itself.
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
