"use client";

import { Search, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({ value, onChange }: ProductSearchProps) {
  const { isArabic } = useLanguage();

  return (
    <div className="product-search-bar relative w-full min-w-0 max-w-xl">
      <Search
        className={`absolute top-3 h-4.5 w-4.5 sm:top-3.5 sm:h-5 sm:w-5 text-[#6EA8FF] ${
          isArabic ? "right-3.5" : "left-3.5"
        }`}
      />
      <input
        type="search"
        inputMode="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={
          isArabic
            ? "ابحث عن المنتجات أو الفئات أو أكواد المنتجات..."
            : "Search products, categories or product codes..."
        }
        className={`h-11 w-full min-w-0 rounded-lg border border-white/10 bg-[#0D1727] text-[13px] text-white outline-none transition placeholder:text-[#AAB4C3]/60 focus:border-[#8A63E8]/60 focus:bg-[#142033] sm:h-12 sm:rounded-xl sm:text-sm ${
          isArabic ? "pr-10 pl-9 sm:pr-11 sm:pl-10" : "pl-10 pr-9 sm:pl-11 sm:pr-10"
        }`}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck="false"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className={`absolute top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-[#AAB4C3] transition hover:bg-white/10 hover:text-white ${
            isArabic ? "left-2.5" : "right-2.5"
          }`}
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

