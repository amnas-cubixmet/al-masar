"use client";

import { ArrowUpDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProductSortProps {
  value: string;
  onChange: (sort: string) => void;
}

export default function ProductSort({ value, onChange }: ProductSortProps) {
  const { isArabic } = useLanguage();

  return (
    <div className="product-sort-dropdown relative inline-flex w-full items-center sm:w-auto">
      <div
        className={`pointer-events-none absolute top-3 flex items-center sm:top-3.5 text-[#6EA8FF] ${
          isArabic ? "right-3" : "left-3"
        }`}
      >
        <ArrowUpDown className="h-4 w-4" />
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`h-11 w-full appearance-none rounded-lg border border-white/10 bg-[#0D1727] text-[11px] font-bold text-[#AAB4C3] outline-none transition hover:text-white focus:border-[#8A63E8]/60 sm:h-12 sm:w-auto sm:rounded-xl sm:text-xs ${
          isArabic ? "pr-9 pl-8" : "pl-9 pr-8"
        }`}
      >
        <option value="default" className="bg-[#0D1727] text-white">
          {isArabic ? "الترتيب: الافتراضي" : "Sort: Default"}
        </option>
        <option value="name-asc" className="bg-[#0D1727] text-white">
          {isArabic ? "الترتيب: الأبجدي (أ–ي)" : "Sort: A–Z"}
        </option>
        <option value="name-desc" className="bg-[#0D1727] text-white">
          {isArabic ? "الترتيب: الأبجدي (ي–أ)" : "Sort: Z–A"}
        </option>
        <option value="most-variants" className="bg-[#0D1727] text-white">
          {isArabic ? "الترتيب: الأكثر خيارات" : "Sort: Most Variants"}
        </option>
      </select>
    </div>
  );
}

