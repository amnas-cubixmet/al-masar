import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  const featured = (
    products.filter((product) => product.featured).length >= 10
      ? products.filter((product) => product.featured)
      : products
  ).slice(0, 10);

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B26BFF]">
              FEATURED PRODUCTS
            </span>
            <h2 className="mt-2 max-w-2xl text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl">
              Project-ready electrical materials
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              A starter selection from the wider AL MASAR catalogue.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:border-[#6993CF]/40 hover:bg-white/10 self-start sm:self-auto shrink-0"
          >
            <span>Browse catalogue</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Product Grid (10 items max, 2 rows of 5 on XL desktop) */}
        <ProductGrid items={featured} />
      </div>
    </section>
  );
}
