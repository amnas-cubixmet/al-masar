"use client";

import { categories } from "@/data/categories";

interface CategoryFiltersProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

export default function CategoryFilters({
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  const allCategories = [
    { slug: "all", name: "All" },
    ...categories.map((c) => ({ slug: c.slug, name: c.name })),
  ];

  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap sm:overflow-visible"
      aria-label="Product categories filter"
    >
      {allCategories.map((cat) => {
        const isActive = selectedCategory === cat.slug;
        return (
          <button
            key={cat.slug}
            onClick={() => onSelectCategory(cat.slug)}
            className={
              isActive
                ? "flex h-9 shrink-0 items-center justify-center rounded-full bg-[#6993CF] px-4 text-xs font-semibold text-white transition shadow-sm"
                : "flex h-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#151E2D] px-4 text-xs font-semibold text-slate-300 transition hover:border-white/20 hover:text-white"
            }
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
