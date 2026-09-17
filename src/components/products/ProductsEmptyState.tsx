"use client";

import { PackageSearch } from "lucide-react";

interface ProductsEmptyStateProps {
  onClearFilters: () => void;
}

export default function ProductsEmptyState({ onClearFilters }: ProductsEmptyStateProps) {
  return (
    <div className="my-12 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#151E2D] p-8 text-center sm:p-12">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6993CF]/10 text-[#6993CF]">
        <PackageSearch className="h-7 w-7" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">
        No products found
      </h3>
      <p className="mt-1.5 max-w-sm text-sm text-slate-400">
        Try another product name, code or category.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={onClearFilters}
          className="h-10 rounded-xl bg-[#6993CF] px-5 text-xs font-semibold text-white transition hover:bg-[#5880bc]"
        >
          Clear Filters
        </button>
        <button
          onClick={onClearFilters}
          className="h-10 rounded-xl border border-white/10 bg-white/5 px-5 text-xs font-semibold text-white transition hover:bg-white/10"
        >
          Browse All Products
        </button>
      </div>
    </div>
  );
}
