"use client";

import { BranchProvider } from "@/context/BranchContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <BranchProvider>{children}</BranchProvider>
    </LanguageProvider>
  );
}
