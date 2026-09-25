"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { products } from "@/data/products";
import { searchProducts } from "@/lib/searchProducts";
import { useLanguage } from "@/context/LanguageContext";
import SearchResults from "./SearchResults";

export default function HeaderSearch() {
  const router = useRouter();
  const { isArabic } = useLanguage();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Debounce query
  useEffect(() => {
    if (!query.trim()) {
      setDebouncedQuery("");
      setLoading(false);
      setIsOpen(false);
      return;
    }
    setLoading(true);
    setIsOpen(true);
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  const allMatches = debouncedQuery ? searchProducts(products, debouncedQuery) : [];

  const handleSelectResult = useCallback(
    (slug: string) => {
      setIsOpen(false);
      setQuery("");
      router.push(`/products/${slug}`);
    },
    [router]
  );

  const handleViewAll = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      return;
    }

    const displayResults = allMatches.slice(0, 6);

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!displayResults.length) return;
      setSelectedIndex((prev) => (prev < displayResults.length - 1 ? prev + 1 : 0));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!displayResults.length) return;
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : displayResults.length - 1));
      return;
    }

    if (event.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < displayResults.length) {
        event.preventDefault();
        handleSelectResult(displayResults[selectedIndex].slug);
      } else if (query.trim()) {
        event.preventDefault();
        setIsOpen(false);
        router.push(`/products?search=${encodeURIComponent(query.trim())}`);
      }
    }
  };

  const getPlaceholder = () => {
    if (isArabic) return "ابحث في المنتجات...";
    return "Search products...";
  };

  return (
    <div ref={containerRef} className="relative hidden lg:block">
      <div className="flex h-10 w-[220px] xl:w-[280px] items-center gap-2 rounded-xl border border-white/10 bg-[#131B2B] px-3 text-sm text-white transition focus-within:border-[#6993CF]/60">
        <Search size={16} className="shrink-0 text-[#6993CF]" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (query.trim()) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={getPlaceholder()}
          aria-label={isArabic ? "البحث في المنتجات" : "Search products"}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500 border-none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
      </div>

      {/* DROPDOWN RESULTS */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-[420px] max-w-[calc(100vw-32px)] max-h-[420px] overflow-y-auto rounded-xl border border-white/10 bg-[#0F1724] p-2 shadow-2xl">
          <SearchResults
            query={query}
            results={allMatches}
            totalMatches={allMatches.length}
            loading={loading}
            selectedIndex={selectedIndex}
            onSelectResult={handleSelectResult}
            onViewAll={handleViewAll}
          />
        </div>
      )}
    </div>
  );
}
