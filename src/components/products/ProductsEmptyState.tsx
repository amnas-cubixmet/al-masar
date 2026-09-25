"use client";

import { PackageSearch } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProductsEmptyStateProps {
  onClearFilters: () => void;
}

export default function ProductsEmptyState({ onClearFilters }: ProductsEmptyStateProps) {
  const { isArabic } = useLanguage();

  return (
    <div className="products-empty-state my-8 flex flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-[#0D1727] p-6 text-center sm:my-12 sm:rounded-2xl sm:p-12 sm:shadow-xl">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl border border-white/10 bg-[#8A63E8]/10 text-[#6EA8FF]">
        <PackageSearch className="h-5 w-5 sm:h-7 sm:w-7" />
      </div>
      <h3 className="mt-3 text-[16px] font-bold text-white sm:mt-4 sm:text-xl">
        {isArabic ? "لم يتم العثور على منتجات" : "No products found"}
      </h3>
      <p className="mt-1.5 max-w-sm text-[12px] text-[#AAB4C3] sm:text-sm">
        {isArabic
          ? "جرّب تغيير البحث أو فلتر الفئة."
          : "Try changing your search or category filter."}
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3">
        <button
          onClick={onClearFilters}
          className="h-9 rounded-lg sm:h-10 sm:rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-4 text-[10px] sm:px-5 sm:text-xs font-bold text-white shadow-lg transition hover:brightness-110"
        >
          {isArabic ? "مسح الفلاتر" : "Clear Filters"}
        </button>
        <button
          onClick={onClearFilters}
          className="h-9 rounded-lg sm:h-10 sm:rounded-xl border border-white/10 bg-white/5 px-4 text-[10px] sm:px-5 sm:text-xs font-semibold text-white transition hover:bg-white/10"
        >
          {isArabic ? "عرض جميع المنتجات" : "Browse All Products"}
        </button>
      </div>
    </div>
  );
}

