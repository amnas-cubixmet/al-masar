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
        "group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#0D1727] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8A63E8]/50 hover:bg-[#142033] sm:rounded-2xl sm:hover:-translate-y-1",
        className
      )}
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#07111F] flex items-center justify-center">
        {!isDefaultImage ? (
          <Image
            src={imageSrc}
            alt={displayTitle}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.025]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#07111F]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Package className="h-6 w-6 text-[#6EA8FF]" />
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-5">
        <div>
          <span className="card-internal-item block truncate text-[9px] font-bold uppercase tracking-[0.1em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:text-[11px] sm:tracking-[0.14em]">
            {displayCategory}
          </span>
          <h3 className="card-internal-item mt-1 line-clamp-2 text-[12px] font-bold leading-snug text-white transition-colors group-hover:text-[#6EA8FF] sm:mt-1.5 sm:text-lg">
            {displayTitle}
          </h3>
          <p className="card-internal-item mt-1.5 hidden text-xs leading-relaxed text-[#AAB4C3] line-clamp-2 sm:block">
            {displayDesc}
          </p>
          <div className="card-internal-item mt-2 inline-flex w-fit items-center rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[8px] font-semibold text-[#AAB4C3] sm:mt-3 sm:px-2.5 sm:py-1 sm:text-[11px]">
            {variantLabel}
          </div>
        </div>

        {/* Card Footer */}
        <div className="card-internal-item mt-2.5 flex items-center justify-between pt-1.5 text-[8px] font-bold uppercase tracking-[0.06em] text-[#6EA8FF] transition-colors group-hover:text-white sm:mt-5 sm:pt-3.5 sm:text-xs sm:tracking-wider">
          <span>{isArabic ? "عرض المنتج" : "View Product"}</span>
          {isArabic ? (
            <ArrowLeft className="h-3.5 w-3.5 transition-transform sm:h-4 sm:w-4 duration-200 group-hover:-translate-x-1" />
          ) : (
            <ArrowRight className="h-3.5 w-3.5 transition-transform sm:h-4 sm:w-4 duration-200 group-hover:translate-x-1" />
          )}
        </div>
      </div>
    </Link>
  );
}

