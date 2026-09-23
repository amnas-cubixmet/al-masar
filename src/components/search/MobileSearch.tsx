"use client";

import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setDebouncedQuery("");
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = window.setTimeout(() => {
      setDebouncedQuery(query);
      setLoading(false);
    }, 120);

    return () => window.clearTimeout(timer);
  }, [query]);

  const allMatches = debouncedQuery ? searchProducts(products, debouncedQuery) : [];

  const handleSelectResult = useCallback(
    (slug: string) => {
      setQuery("");
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
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="absolute inset-x-0 top-full z-[60] border-t border-white/10 bg-[#0B111C]/98 shadow-2xl backdrop-blur-xl"
    >
      <div className="mx-auto w-full max-w-[1280px] px-3 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-xl border border-white/10 bg-[#151E2D] px-3 transition focus-within:border-[#6993CF]/60">
            <Search size={18} className="shrink-0 text-[#6993CF]" />
            <input
              ref={inputRef}
              type="search"
              inputMode="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && query.trim()) {
                  event.preventDefault();
                  onClose();
                  router.push(`/products?search=${encodeURIComponent(query.trim())}`);
                }
              }}
              placeholder={isArabic ? "ابحث في المنتجات..." : "Search products..."}
              aria-label={isArabic ? "البحث في المنتجات" : "Search products"}
              className="min-w-0 flex-1 border-none bg-transparent text-base text-white outline-none placeholder:text-slate-500"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={isArabic ? "إغلاق البحث" : "Close search"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#151E2D] text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {query.trim() && (
          <div className="mt-2 max-h-[55vh] max-h-[55dvh] min-w-0 overflow-x-hidden overflow-y-auto overscroll-contain rounded-xl border border-white/10 bg-[#0F1724] p-2">
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
    </div>
  );
}
