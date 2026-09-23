"use client";

import { useLanguage } from "@/context/LanguageContext";

interface LoadMoreProductsProps {
  visibleCount: number;
  totalCount: number;
  onLoadMore: () => void;
}

export default function LoadMoreProducts({
  visibleCount,
  totalCount,
  onLoadMore,
}: LoadMoreProductsProps) {
  const { isArabic } = useLanguage();

  if (visibleCount >= totalCount) return null;

  return (
    <div className="mt-7 flex flex-col items-center gap-2 sm:mt-12 sm:gap-3">
      <button
        onClick={onLoadMore}
        className="h-10 rounded-lg border border-white/10 bg-[#0D1727] px-6 text-[12px] font-bold text-white transition-all duration-300 hover:border-[#8A63E8]/50 hover:bg-[#142033] sm:h-12 sm:rounded-xl sm:px-8 sm:text-sm sm:shadow-lg"
      >
        {isArabic ? "عرض المزيد" : "Load More"}
      </button>
      <span className="text-[10px] font-medium text-[#AAB4C3] sm:text-xs">
        {isArabic
          ? `عرض ${visibleCount} من أصل ${totalCount} منتج`
          : `Showing ${visibleCount} of ${totalCount} products`}
      </span>
    </div>
  );
}

