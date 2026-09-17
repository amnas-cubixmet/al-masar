"use client";

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
  if (visibleCount >= totalCount) return null;

  return (
    <div className="mt-10 flex flex-col items-center gap-3">
      <button
        onClick={onLoadMore}
        className="h-11 rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-[#6993CF]/40 hover:bg-white/10"
      >
        Load More Products
      </button>
      <span className="text-xs text-slate-400">
        Showing {visibleCount} of {totalCount} products
      </span>
    </div>
  );
}
