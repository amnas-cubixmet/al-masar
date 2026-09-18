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

function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim() || !text) return <>{text}</>;

  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return <>{text}</>;

  const pattern = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        pattern.test(part) ? (
          <mark key={i} className="rounded bg-[#8A5CC7]/40 px-0.5 font-bold text-white">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default function SearchResultItem({
  product,
  query,
  isSelected = false,
  onSelectResult,
}: SearchResultItemProps) {
  const { isArabic } = useLanguage();

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl border border-white/10 bg-[#151E2D] p-2 sm:p-2.5 text-left transition hover:border-[#6993CF]/40 hover:bg-[#192437]",
        isSelected && "border-[#8A5CC7] bg-[#192437] ring-1 ring-[#8A5CC7]"
      )}
      onClick={() => onSelectResult(product.slug)}
      role="option"
      aria-selected={isSelected}
    >
      <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-lg bg-white/5 p-1">
        <Image
          src={product.image || "/images/products/default-product.svg"}
          alt={product.title}
          width={48}
          height={48}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h4 className="line-clamp-2 text-xs sm:text-sm font-semibold leading-tight text-white">
            <HighlightText text={product.title} query={query} />
          </h4>
          <span className="shrink-0 rounded bg-[#6993CF]/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#6993CF] border border-[#6993CF]/20">
            {product.variantCount} {product.variantCount === 1 ? "Variant" : "Variants"}
          </span>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="font-medium text-[#6993CF]">
            <HighlightText text={product.category} query={query} />
          </span>

          {typeof product.price === "number" && product.price > 0 && (
            <span className="font-bold text-emerald-400">
              {isArabic ? `${product.price.toFixed(2)} ر.س` : `SAR ${product.price.toFixed(2)}`}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
