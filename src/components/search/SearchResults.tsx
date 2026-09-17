"use client";

import Link from "next/link";
import type { Product } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext";
import SearchResultItem from "./SearchResultItem";

interface SearchResultsProps {
  query: string;
  results: Product[];
  totalMatches: number;
  loading: boolean;
  selectedIndex: number;
  onSelectResult: (slug: string) => void;
  onViewAll: () => void;
  className?: string;
}

export default function SearchResults({
  query,
  results,
  totalMatches,
  loading,
  selectedIndex,
  onSelectResult,
  onViewAll,
  className,
}: SearchResultsProps) {
  const { isArabic } = useLanguage();

  if (loading) {
    return (
      <div className="p-2">
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#151E2D] p-2 animate-pulse">
              <div className="h-11 w-11 shrink-0 rounded-lg bg-white/5" />
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="h-3.5 w-2/3 rounded bg-white/10" />
                <div className="h-3 w-1/3 rounded bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!query.trim()) {
    return (
      <div className="p-4 text-center text-xs text-slate-400">
        {isArabic
          ? "ابحث عن المنتجات بالاسم، الفئة، أو كود المنتج"
          : "Search products by name, category or code"}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-xs text-slate-400">
          {isArabic ? (
            <>
              لا توجد منتجات تطابق &quot;<strong className="text-white">{query}</strong>&quot;
            </>
          ) : (
            <>
              No products found for &quot;<strong className="text-white">{query}</strong>&quot;
            </>
          )}
        </p>
        <Link
          href="/products"
          className="mt-3 inline-flex h-8 items-center justify-center rounded-lg border border-white/10 bg-[#151E2D] px-3 text-xs font-semibold text-white transition hover:bg-[#192437]"
          onClick={onViewAll}
        >
          {isArabic ? "تصفح جميع المنتجات" : "Browse All Products"}
        </Link>
      </div>
    );
  }

  // Show maximum 6 instant results for dropdown
  const displayResults = results.slice(0, 6);

  return (
    <div className={className}>
      <div className="flex flex-col gap-1.5" role="listbox">
        {displayResults.map((product, index) => (
          <SearchResultItem
            key={product.id}
            product={product}
            query={query}
            isSelected={index === selectedIndex}
            onSelectResult={onSelectResult}
          />
        ))}
      </div>

      <div className="mt-2 border-t border-white/10 pt-2 text-center">
        <Link
          href={`/products?search=${encodeURIComponent(query)}`}
          className="inline-flex h-9 w-full items-center justify-center rounded-lg border border-[#8A5CC7]/30 bg-[#8A5CC7]/10 text-xs font-semibold text-white transition hover:border-[#8A5CC7] hover:bg-[#8A5CC7]/20"
          onClick={onViewAll}
        >
          {isArabic ? `عرض جميع النتائج (${totalMatches})` : `View all results (${totalMatches})`}
        </Link>
      </div>
    </div>
  );
}
