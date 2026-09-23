"use client";

import { useState } from "react";
import Image from "next/image";
import type { Brand } from "@/data/brands";

interface BrandLogoCardProps {
  brand: Brand;
  isDuplicate?: boolean;
}

export default function BrandLogoCard({ brand, isDuplicate = false }: BrandLogoCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      aria-hidden={isDuplicate ? "true" : undefined}
      className="group flex h-20 w-32 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#101A2B] px-3 py-2 transition-all duration-300 hover:border-[#8A63E8]/40 hover:bg-[#142033] sm:h-28 sm:w-64 sm:justify-start sm:gap-5 sm:rounded-2xl sm:px-5 sm:py-3"
    >
      {brand.logo && !imageError ? (
        /* eslint-disable-next-html-element-suppression */
        <img
          src={brand.logo}
          alt={brand.name}
          width={160}
          height={56}
          style={{ width: "auto", height: "auto" }}
          className="h-auto w-auto max-h-10 max-w-[92px] shrink-0 object-contain grayscale brightness-200 opacity-75 transition-all duration-300 group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 sm:max-h-14 sm:max-w-[120px]"
          onError={() => setImageError(true)}
        />
      ) : null}

      <span className="hidden min-w-0 flex-1 text-left text-[12px] font-semibold uppercase leading-snug tracking-[0.1em] text-[#AAB4C3] transition-colors duration-300 group-hover:text-white sm:block">
        {brand.name}
      </span>
    </div>
  );
}
