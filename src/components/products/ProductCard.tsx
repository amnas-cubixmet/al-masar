"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Package } from "lucide-react";
import type { Product } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/cn";

export default function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { isArabic } = useLanguage();
  const isDefaultImage = !product.image || product.image.includes("default-product");

  const displayTitle = isArabic && product.titleAr ? product.titleAr : product.title;
  const displayCategory =
    isArabic && product.categoryAr
      ? product.categoryAr
      : product.category || product.mainCategory;
  const displayDesc =
    isArabic && product.descriptionAr ? product.descriptionAr : product.description;

  const variantLabel = isArabic
    ? `${product.variantCount} مقاسات / خيارات`
    : product.variantCount === 1
    ? "1 Variant"
    : `${product.variantCount} Sizes / Variants`;

  const imageSrc =
    product.image &&
    !product.image.startsWith("/") &&
    !product.image.startsWith("http://") &&
    !product.image.startsWith("https://")
      ? `/${product.image}`
      : product.image;

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0D1727] transition-all duration-300 hover:-translate-y-1 hover:border-[#8A63E8]/50 hover:bg-[#142033]",
        className
      )}
    >
      {/* Product Image Area - Compact 4:3 container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#07111F]">
        {!isDefaultImage ? (
          <Image
            src={imageSrc}
            alt={displayTitle}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center scale-[1.07] transition-transform duration-500 group-hover:scale-[1.10]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Package className="h-5 w-5 sm:h-6 sm:w-6 text-[#6EA8FF]" />
            </div>
          </div>
        )}
      </div>

      {/* Card Body - Equal distribution with flex-1 and justify-between */}
      <div className="flex flex-1 flex-col justify-between p-3 sm:p-4 lg:p-5">
        <div className="flex flex-col">
          {/* Small Uppercase Category Label */}
          <span className="card-internal-item block truncate text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB]">
            {displayCategory}
          </span>

          {/* Compact Product Title */}
          <h3 className="card-internal-item mt-1 text-sm sm:text-base font-bold text-white line-clamp-1 sm:line-clamp-2 leading-snug transition-colors group-hover:text-[#6EA8FF]">
            {displayTitle}
          </h3>

          {/* Description - Max 2 lines */}
          <p className="card-internal-item mt-1.5 text-xs sm:text-sm leading-relaxed text-[#AAB4C3] line-clamp-2">
            {displayDesc}
          </p>

          {/* Compact Variant Badge */}
          <div className="card-internal-item mt-2.5 sm:mt-3 inline-flex w-fit items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-[#AAB4C3]">
            {variantLabel}
          </div>
        </div>

        {/* Card Footer - Always anchored at the bottom, never clipped */}
        <div className="card-internal-item mt-3 sm:mt-4 flex items-center justify-between border-t border-white/5 pt-2 sm:pt-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6EA8FF] transition-colors group-hover:text-white">
          <span>{isArabic ? "عرض المنتج" : "View Product"}</span>
          {isArabic ? (
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          ) : (
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </div>
      </div>
    </Link>
  );
}
