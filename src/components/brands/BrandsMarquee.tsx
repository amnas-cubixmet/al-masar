"use client";

import BrandLogoCard from "@/components/brands/BrandLogoCard";
import { brands as defaultBrands } from "@/data/brands";
import type { Brand } from "@/data/brands";

interface BrandsMarqueeProps {
  brands?: Brand[];
}

export default function BrandsMarquee({ brands = defaultBrands }: BrandsMarqueeProps) {
  return (
    <section className="w-full bg-[#0D1320] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6993CF]">
            BRANDS
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Trusted Brands
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
            Quality electrical products from established industry brands.
          </p>
        </div>

        {/* Full-Bleed Auto-Scrolling Marquee Track */}
        <div className="relative mt-7 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 sm:before:w-20 before:bg-gradient-to-r before:from-[#0D1320] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 sm:after:w-20 after:bg-gradient-to-l after:from-[#0D1320] after:to-transparent">
          <div className="flex w-max items-center gap-3 sm:gap-4 animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {brands.map((brand) => (
              <BrandLogoCard key={`${brand.id}-1`} brand={brand} />
            ))}
            {brands.map((brand) => (
              <BrandLogoCard key={`${brand.id}-2`} brand={brand} isDuplicate />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
