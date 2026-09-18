"use client";

import { useState, useEffect, useCallback } from "react";
import { categories } from "@/data/categories";
import { useLanguage } from "@/context/LanguageContext";
import CategoryControls from "./CategoryControls";
import CategoryTrustPoints from "./CategoryTrustPoints";
import CategoryStack from "./CategoryStack";

export default function CategoryShowcase() {
  const { isArabic } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalCount = categories.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalCount) % totalCount);
  }, [totalCount]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalCount);
  }, [totalCount]);

  // Keyboard navigation support (ArrowLeft = prev, ArrowRight = next)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Autoplay (every 5s), pauses on hover or hidden tab
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (document.hidden) return;
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section className="relative w-full overflow-hidden bg-[#07111F] py-16 lg:py-24 text-white">
      {/* Background Decorative Glow Effects */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#69A7FF]/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#8A5CC7]/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] xl:gap-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Side Copy & Slider Controls */}
          <div className="relative z-20 flex flex-col justify-center min-w-0 max-w-[540px]">
            {/* Eyebrow */}
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#69A7FF]">
              {isArabic ? "مجموعة المنتجات" : "PRODUCT RANGE"}
            </p>

            {/* Editorial Heading */}
            <h2 className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-serif leading-[0.92] tracking-[-0.04em] text-white">
              {isArabic ? (
                <>
                  استكشف حسب <br />
                  <span className="bg-gradient-to-r from-[#6AA8FF] via-[#8A5CC7] to-[#C45BCF] bg-clip-text text-transparent">
                    الفئة
                  </span>
                </>
              ) : (
                <>
                  Explore by <br />
                  <span className="bg-gradient-to-r from-[#6AA8FF] via-[#8A5CC7] to-[#C45BCF] bg-clip-text text-transparent">
                    Category
                  </span>
                </>
              )}
            </h2>

            {/* Supporting Paragraph */}
            <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base sm:leading-7">
              {isArabic
                ? "تصفح المواد والمنتجات الكهربائية حسب الفئة واعثر بسرعة على المنتجات المناسبة لمشروعك."
                : "Browse our electrical materials by category and quickly find the right products for your project."}
            </p>

            {/* Slider Counter & Navigation Controls */}
            <CategoryControls
              currentIndex={activeIndex}
              totalCount={totalCount}
              onPrev={handlePrev}
              onNext={handleNext}
            />

            {/* 3 Compact Trust Points */}
            <CategoryTrustPoints />
          </div>

          {/* Right Side Stacked Category Cards Deck */}
          <div className="w-full min-w-0">
            <CategoryStack
              categories={categories}
              activeIndex={activeIndex}
              onSelectCategory={(idx) => {
                setActiveIndex(idx);
                setIsPaused(true);
              }}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
