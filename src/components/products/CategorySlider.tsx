"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoryCard from "@/components/products/CategoryCard";
import { categories as defaultCategories } from "@/data/categories";
import type { ProductCategory } from "@/types/product";

interface CategorySliderProps {
  categories?: ProductCategory[];
}

export default function CategorySlider({ categories = defaultCategories }: CategorySliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const { clientWidth } = sliderRef.current;
    const scrollAmount = clientWidth * 0.75;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6993CF]">
              Product Range
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Explore by Category
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Browse our electrical materials by category and quickly find the right products for your project.
            </p>
          </div>

          {/* Desktop Arrow Navigation */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous categories"
              className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#151E2D] text-slate-300 transition hover:border-[#6993CF]/40 hover:text-white sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Next categories"
              className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#151E2D] text-slate-300 transition hover:border-[#6993CF]/40 hover:text-white sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Category Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 sm:gap-4 scrollbar-none"
        >
          {categories.map((category) => (
            <CategoryCard key={category.id || category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
