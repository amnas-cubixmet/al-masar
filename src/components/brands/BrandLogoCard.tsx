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
      className="group flex h-16 w-36 shrink-0 items-center justify-center rounded-xl bg-[#111A29] px-4 transition duration-300 sm:h-20 sm:w-44"
    >
      {brand.logo && !imageError ? (
        <Image
          src={brand.logo}
          alt={brand.name}
          width={110}
          height={36}
          className="max-h-9 max-w-[110px] object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          {brand.name}
        </span>
      )}
    </div>
  );
}
