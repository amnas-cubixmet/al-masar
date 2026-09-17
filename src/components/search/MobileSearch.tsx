"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { products } from "@/data/products";
import { searchProducts } from "@/lib/searchProducts";
import { useLanguage } from "@/context/LanguageContext";
import SearchResults from "./SearchResults";

export default function MobileSearch({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const { isArabic } = useLanguage();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setDebouncedQuery("");
      setLoading(false);
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  const allMatches = debouncedQuery ? searchProducts(products, debouncedQuery) : [];

  const handleSelectResult = useCallback(
    (slug: string) => {
      onClose();
      router.push(`/products/${slug}`);
    },
    [onClose, router]
  );

  const handleViewAll = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="border-t border-white/10 bg-[#0B111C] px-3 py-3 lg:hidden">
      <div className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-[#151E2D] px-3">
        <Search size={18} className="shrink-0 text-[#6993CF]" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isArabic ? "ابحث في المنتجات..." : "Search products..."}
          className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 outline-none border-none"
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
      </div>

      {query.trim() && (
        <div className="mt-2 max-h-[55vh] overflow-y-auto rounded-xl border border-white/10 bg-[#0F1724] p-2">
          <SearchResults
            query={query}
            results={allMatches}
            totalMatches={allMatches.length}
            loading={loading}
            selectedIndex={-1}
            onSelectResult={handleSelectResult}
            onViewAll={handleViewAll}
          />
        </div>
      )}
    </div>
  );
}
