"use client";

import { BranchProvider } from "@/context/BranchContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { IntroProvider } from "@/context/IntroContext";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <BranchProvider>
        <IntroProvider>
          {children}
        </IntroProvider>
      </BranchProvider>
    </LanguageProvider>
  );
}

