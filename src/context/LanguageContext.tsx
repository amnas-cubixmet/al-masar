"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "ar";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  isArabic: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("al-masar-language") as Language | null;
    if (saved === "en" || saved === "ar") setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("al-masar-language", nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isArabic: language === "ar",
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
