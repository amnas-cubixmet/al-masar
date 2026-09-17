"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ProductCategory } from "@/types/product";

interface CategoryCardProps {
  category: ProductCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group min-w-[calc(50%-4px)] w-[calc(50%-4px)] snap-start shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#151E2D] transition-all duration-300 hover:-translate-y-1 hover:border-[#6993CF]/40 hover:bg-[#182235] sm:min-w-[calc(33.333%-11px)] sm:w-[calc(33.333%-11px)] lg:min-w-[calc(25%-12px)] lg:w-[calc(25%-12px)] xl:min-w-[calc(20%-13px)] xl:w-[calc(20%-13px)]"
    >
      {/* Clean Image Area - Text Free */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0F1724]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {/* Card Content Below Image */}
      <div className="flex items-end justify-between gap-3 p-3 sm:p-4">
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-xs font-semibold leading-4 text-white sm:text-sm lg:text-base">
            {category.name}
          </h3>
          <p className="mt-1 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.08em] text-[#6993CF] sm:text-xs">
            {category.productCount} Products
          </p>
        </div>

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition group-hover:border-[#6993CF]/40 group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
