"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Package } from "lucide-react";
import type { Product } from "@/types/product";
import { cn } from "@/lib/cn";

export default function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const isDefaultImage = !product.image || product.image.includes("default-product");
  const variantLabel =
    product.variantCount === 1 ? "1 Variant" : `${product.variantCount} Sizes / Variants`;

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#151E2D] transition duration-300 hover:-translate-y-1 hover:border-[#6993CF]/40 hover:bg-[#182235]",
        className
      )}
    >
      {/* Product Image Area: relative aspect-square overflow-hidden rounded-xl bg-[#1B2638] */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#1B2638]">
        {!isDefaultImage ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1C2738] to-[#131B2B]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-inner ring-1 ring-white/5 transition-transform duration-300 group-hover:scale-105">
              <Package className="h-6 w-6 text-[#7BA9E6]" />
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col justify-between p-3 sm:p-3.5">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7BA9E6]">
            {product.mainCategory || product.category}
          </span>
          <h3 className="mt-1 line-clamp-2 text-xs font-semibold leading-4 text-white transition-colors group-hover:text-[#6993CF] sm:text-sm sm:leading-5">
            {product.title}
          </h3>
          <p className="mt-1 text-[11px] font-medium text-slate-400 sm:text-xs">
            {variantLabel}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-auto border-t border-white/5 px-3 py-2.5 sm:py-3">
        <div className="flex items-center justify-between text-xs font-semibold text-white transition group-hover:text-[#8BB8EF]">
          <span>View Details</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
