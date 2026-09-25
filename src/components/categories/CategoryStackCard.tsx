"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/data/categories";

interface CategoryStackCardProps {
  category: Category;
  isActive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function CategoryStackCard({
  category,
  isActive = false,
  className = "",
  style,
}: CategoryStackCardProps) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      style={style}
      className={`group flex h-full w-full select-none flex-col overflow-hidden rounded-[32px] border bg-[#0C1728] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isActive
          ? "border-[#53A6DC] shadow-[0_0_40px_rgba(83,166,220,0.22)] ring-1 ring-[#53A6DC]/30"
          : "border-[#4D8EF7]/40 shadow-[0_0_30px_rgba(53,126,255,0.12)] hover:border-[#6AA8FF]"
      } ${className}`}
    >
      {/* Category Image Area (72% height) */}
      <div className="relative h-[72%] w-full overflow-hidden bg-[#07111F] pointer-events-none select-none">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none [-webkit-user-drag:none]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1728] via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* Category Info Bottom Area */}
      <div className="flex h-[28%] w-full items-center justify-between px-6 py-4">
        <div className="min-w-0 flex-1 pr-3">
          <h3 className="truncate text-lg font-bold text-white transition-colors group-hover:text-[#6AA8FF] sm:text-xl">
            {category.name}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#69A7FF]">
            {category.productCount} PRODUCTS
          </p>
        </div>

        {/* Circular Link Button */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 group-hover:border-[#6AA8FF] group-hover:bg-[#6AA8FF] group-hover:text-black">
          <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
