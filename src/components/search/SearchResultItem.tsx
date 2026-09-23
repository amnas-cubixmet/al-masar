"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/cn";

interface SearchResultItemProps {
  product: Product;
  query: string;
  isSelected?: boolean;
  onSelectResult: (slug: string) => void;
}

export default function SearchResultItem({
  product,
  isSelected = false,
  onSelectResult,
}: SearchResultItemProps) {
  const { isArabic } = useLanguage();

  const title = isArabic && product.titleAr ? product.titleAr : product.title;
  const category =
    isArabic && product.categoryAr
      ? product.categoryAr
      : product.category || product.mainCategory;

  const variantsLabel =
    product.variantCount === 1
      ? isArabic
        ? "خيار واحد"
        : "1 Variant"
      : isArabic
        ? `${product.variantCount} خيارات`
        : `${product.variantCount} Variants`;

  return (
    <Link
      href={`/products/${product.slug}`}
      dir={isArabic ? "rtl" : "ltr"}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl border border-white/10 bg-[#151E2D] p-2 transition hover:border-[#6993CF]/40 hover:bg-[#192437] sm:p-2.5",
        isArabic ? "text-right" : "text-left",
        isSelected && "border-[#8A5CC7] bg-[#192437] ring-1 ring-[#8A5CC7]"
      )}
      onClick={() => onSelectResult(product.slug)}
      role="option"
      aria-selected={isSelected}
    >
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-white/5 p-1 sm:h-12 sm:w-12">
        <Image
          src={product.image || "/images/products/default-product.svg"}
          alt={title}
          width={48}
          height={48}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <div className="flex items-center justify-between gap-2">
          <h4 className="line-clamp-2 text-xs font-semibold leading-tight text-white sm:text-sm">
            {title}
          </h4>
          <span className="shrink-0 rounded border border-[#6993CF]/20 bg-[#6993CF]/10 px-1.5 py-0.5 text-[10px] font-bold text-[#6993CF]">
            {variantsLabel}
          </span>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="truncate font-medium text-[#6993CF]">{category}</span>
        </div>
      </div>
    </Link>
  );
}
