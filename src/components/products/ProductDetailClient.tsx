"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Package, CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import Container from "@/components/ui/Container";
import ProductGrid from "@/components/products/ProductGrid";
import type { Product, ProductVariant } from "@/types/product";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || { id: 1, code: product.id, title: product.title }
  );

  const enquiryParams = new URLSearchParams({
    product: product.slug,
    variant: selectedVariant.code,
  }).toString();

  const enquiryUrl = `/contact?${enquiryParams}`;

  return (
    <div className="bg-[#0D1320] min-h-screen py-8 sm:py-12">
      <Container>
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-[#7BA9E6] mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Products</span>
        </Link>

        {/* Top Product Hero Card */}
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-[#151E2D] p-6 lg:grid-cols-12 lg:p-8">
          {/* Left Column: Single Product Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#1B2638] border border-white/5">
              {product.image && !product.image.includes("default-product") ? (
                <Image
                  src={
                    product.image.startsWith("/") ||
                    product.image.startsWith("http://") ||
                    product.image.startsWith("https://")
                      ? product.image
                      : `/${product.image}`
                  }
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-4"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Package className="h-16 w-16 text-[#7BA9E6]/60" />
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Title, Categories, Description, Key Badges */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-[#7BA9E6]/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#7BA9E6] border border-[#7BA9E6]/20">
                  Main Category: {product.mainCategory}
                </span>
                {product.category && product.category !== product.mainCategory && (
                  <span className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-400 border border-white/10">
                    Product Type: {product.category}
                  </span>
                )}
              </div>

              <h1 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                {product.title}
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {product.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 border-t border-white/5 pt-6">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>SASO Certified</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-[#7BA9E6] shrink-0" />
                  <span>100% Genuine</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <Truck className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>Wholesale Stock</span>
                </div>
              </div>
            </div>

            {/* Selected Variant Summary & Direct Primary Enquiry Button */}
            <div className="mt-8 rounded-2xl border border-[#7BA9E6]/20 bg-[#1B2638]/70 p-4 sm:p-5">
              <div className="flex flex-col gap-1 text-xs text-slate-400">
                <span className="font-semibold uppercase tracking-wider text-[#7BA9E6]">
                  Selected SKU / Variant
                </span>
                <span className="text-sm font-bold text-white dir-ltr break-words">
                  {selectedVariant.code} — {selectedVariant.title}
                </span>
              </div>

              <div className="mt-4">
                <Link
                  href={enquiryUrl}
                  className="inline-flex h-12 w-full min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6993CF] to-[#8A5CC7] px-6 text-sm font-bold text-white transition hover:brightness-110 shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enquire About This Product</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Variants Section */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-[#151E2D] p-6 sm:p-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Available Variants & Specifications
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Select a variant below to prefill your product enquiry.
              </p>
            </div>
            <span className="mt-2 sm:mt-0 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300 border border-white/10 w-fit">
              {product.variants.length} {product.variants.length === 1 ? "Option" : "Options / Sizes"}
            </span>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="hidden sm:block mt-6 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1B2638] text-xs uppercase text-slate-400 font-semibold border-b border-white/10">
                <tr>
                  <th className="py-3.5 px-4 w-12 text-center">Select</th>
                  <th className="py-3.5 px-4 w-36">Code / SKU</th>
                  <th className="py-3.5 px-4">Variant / Size Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {product.variants.map((variant) => {
                  const isSelected = selectedVariant.id === variant.id;
                  return (
                    <tr
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`cursor-pointer transition ${
                        isSelected
                          ? "bg-[#6993CF]/15 font-semibold text-white"
                          : "hover:bg-white/5 text-slate-300"
                      }`}
                    >
                      <td className="py-3.5 px-4 text-center">
                        <input
                          type="radio"
                          name="product-variant-desktop"
                          checked={isSelected}
                          onChange={() => setSelectedVariant(variant)}
                          className="h-4 w-4 accent-[#6993CF] cursor-pointer min-h-[20px] min-w-[20px]"
                        />
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs font-bold text-[#7BA9E6] dir-ltr break-words">
                        {variant.code}
                      </td>
                      <td className="py-3.5 px-4 dir-ltr break-words">
                        {variant.title}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards (at 320px & small screens) */}
          <div className="sm:hidden mt-6 flex flex-col gap-3">
            {product.variants.map((variant) => {
              const isSelected = selectedVariant.id === variant.id;
              return (
                <div
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`flex items-start gap-3 rounded-xl border p-3.5 transition cursor-pointer ${
                    isSelected
                      ? "border-[#6993CF] bg-[#6993CF]/10 text-white"
                      : "border-white/10 bg-[#1B2638] text-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="product-variant-mobile"
                    checked={isSelected}
                    onChange={() => setSelectedVariant(variant)}
                    className="mt-1 h-4 w-4 shrink-0 accent-[#6993CF] cursor-pointer min-h-[20px] min-w-[20px]"
                  />
                  <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <span className="font-mono text-xs font-bold text-[#7BA9E6] dir-ltr break-words">
                      {variant.code}
                    </span>
                    <span className="text-xs font-medium text-slate-200 dir-ltr break-words">
                      {variant.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-white/10 pt-12">
            <div className="flex flex-col gap-1 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7BA9E6]">
                RELATED PRODUCTS
              </span>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                More in {product.mainCategory}
              </h2>
            </div>
            <ProductGrid items={relatedProducts} />
          </div>
        )}
      </Container>
    </div>
  );
}
