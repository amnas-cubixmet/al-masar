"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, Package, CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import Container from "@/components/ui/Container";
import ProductGrid from "@/components/products/ProductGrid";
import type { Product, ProductVariant } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { isArabic } = useLanguage();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || { id: 1, code: product.id, title: product.title }
  );

  const displayTitle = isArabic && product.titleAr ? product.titleAr : product.title;
  const displayCategory =
    isArabic && product.categoryAr
      ? product.categoryAr
      : product.category || product.mainCategory;
  const displayDesc =
    isArabic && product.descriptionAr ? product.descriptionAr : product.description;

  const enquiryParams = new URLSearchParams({
    product: product.slug,
    variant: selectedVariant.code,
  }).toString();

  const enquiryUrl = `/contact?${enquiryParams}`;

  return (
    <div className="min-h-screen bg-[#07111F] py-5 text-white sm:py-10 lg:py-12">
      <Container>
        {/* Back Link */}
        <Link
          href="/products"
          className="mb-4 inline-flex items-center gap-1.5 text-[10px] font-bold text-[#AAB4C3] transition hover:text-[#6EA8FF] sm:mb-6 sm:gap-2 sm:text-xs"
        >
          {isArabic ? <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
          <span>{isArabic ? "العودة إلى الكتالوج" : "Back to Products"}</span>
        </Link>

        {/* Top Product Hero Card */}
        <div className="grid grid-cols-1 gap-5 rounded-xl border border-white/[0.08] bg-[#0D1727] p-3 sm:gap-7 sm:rounded-2xl sm:p-5 sm:shadow-xl lg:grid-cols-12 lg:gap-8 lg:rounded-3xl lg:p-8">
          {/* Left Column: Single Product Image */}
          <div className="lg:col-span-5">
            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg bg-[#07111F] sm:aspect-square sm:rounded-2xl">
              {product.image && !product.image.includes("default-product") ? (
                <Image
                  src={
                    product.image.startsWith("/") ||
                    product.image.startsWith("http://") ||
                    product.image.startsWith("https://")
                      ? product.image
                      : `/${product.image}`
                  }
                  alt={displayTitle}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-contain object-center p-1.5 sm:p-4"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Package className="h-16 w-16 text-[#6EA8FF]/60" />
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Title, Categories, Description, Key Badges */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-[#6EA8FF]/20 bg-gradient-to-r from-[#6EA8FF]/15 via-[#8A63E8]/15 to-[#C45BCB]/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#6EA8FF] sm:rounded-lg sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-wider">
                  {displayCategory}
                </span>
                {product.mainCategory && (
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-medium text-[#AAB4C3] sm:rounded-lg sm:px-3 sm:py-1 sm:text-[11px]">
                    {product.mainCategory}
                  </span>
                )}
              </div>

              <h1 className="mt-2.5 text-[24px] font-black leading-[1.08] text-white sm:mt-3 sm:text-3xl lg:text-4xl">
                {displayTitle}
              </h1>

              <p className="mt-2.5 text-[13px] leading-[1.6] text-[#AAB4C3] sm:mt-4 sm:text-base sm:leading-relaxed">
                {displayDesc}
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3 sm:border-t sm:border-white/5 sm:pt-6">
                <div className="flex flex-col items-start gap-1 text-[9px] font-semibold leading-tight text-white sm:flex-row sm:items-center sm:gap-2 sm:text-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400 shrink-0" />
                  <span>{isArabic ? "معتمد من SASO" : "SASO Certified"}</span>
                </div>
                <div className="flex flex-col items-start gap-1 text-[9px] font-semibold leading-tight text-white sm:flex-row sm:items-center sm:gap-2 sm:text-xs">
                  <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#6EA8FF] shrink-0" />
                  <span>{isArabic ? "أصلي 100%" : "100% Genuine"}</span>
                </div>
                <div className="flex flex-col items-start gap-1 text-[9px] font-semibold leading-tight text-white sm:flex-row sm:items-center sm:gap-2 sm:text-xs">
                  <Truck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#C45BCB] shrink-0" />
                  <span>{isArabic ? "مخزون الجملة" : "Wholesale Stock"}</span>
                </div>
              </div>
            </div>

            {/* Selected Variant Summary & Direct Primary Enquiry Button */}
            <div className="mt-5 rounded-xl border border-white/10 bg-[#07111F] p-3 sm:mt-8 sm:rounded-2xl sm:p-5">
              <div className="flex flex-col gap-1 text-[10px] text-[#AAB4C3] sm:text-xs">
                <span className="font-bold uppercase tracking-wider text-[#6EA8FF]">
                  {isArabic ? "الرمز المستهدف / الخيار المحدد" : "Selected SKU / Variant"}
                </span>
                <span className="break-words text-[12px] font-bold text-white dir-ltr sm:text-sm">
                  {selectedVariant.code} — {selectedVariant.title}
                </span>
              </div>

              <div className="mt-3 sm:mt-4">
                <Link
                  href={enquiryUrl}
                  className="inline-flex h-10 w-full min-h-[40px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-4 text-[12px] font-bold text-white transition hover:brightness-110 sm:h-12 sm:min-h-[44px] sm:rounded-xl sm:px-6 sm:text-sm sm:shadow-lg sm:shadow-[#8A63E8]/20"
                >
                  <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>{isArabic ? "طلب تسعيرة لهذا المنتج" : "Request a Quote →"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Variants Section */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#0D1727] p-4 sm:mt-12 sm:rounded-3xl sm:p-8 sm:shadow-xl">
          <div className="flex flex-col gap-1 pb-3 sm:flex-row sm:items-center sm:justify-between sm:border-b sm:border-white/10 sm:pb-4">
            <div>
              <h2 className="text-[18px] font-bold leading-snug text-white sm:text-2xl">
                {isArabic ? "الخيارات والمواصفات المتاحة" : "Available Variants & Specifications"}
              </h2>
              <p className="mt-1 text-[11px] leading-relaxed text-[#AAB4C3] sm:text-xs">
                {isArabic
                  ? "حدد الخيار المطلوب لتجهيز طلب تسعيرة دقيق للمشروع."
                  : "Select a variant below to prefill your product enquiry."}
              </p>
            </div>
            <span className="mt-2 w-fit rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-white sm:mt-0 sm:px-3 sm:py-1 sm:text-xs">
              {product.variants.length} {isArabic ? "خيارات / مقاسات" : "Options / Sizes"}
            </span>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="hidden sm:block mt-6 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#07111F] text-xs uppercase text-[#AAB4C3] font-bold border-b border-white/10">
                <tr>
                  <th className="py-3.5 px-4 w-12 text-center">{isArabic ? "تحديد" : "Select"}</th>
                  <th className="py-3.5 px-4 w-44">{isArabic ? "كود المنتج" : "Code / SKU"}</th>
                  <th className="py-3.5 px-4">{isArabic ? "الوصف والقياس" : "Variant / Size Description"}</th>
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
                          ? "bg-[#8A63E8]/15 font-semibold text-white"
                          : "hover:bg-white/5 text-[#AAB4C3]"
                      }`}
                    >
                      <td className="py-3.5 px-4 text-center">
                        <input
                          type="radio"
                          name="product-variant-desktop"
                          checked={isSelected}
                          onChange={() => setSelectedVariant(variant)}
                          className="h-3.5 w-3.5 sm:h-4 sm:w-4 accent-[#6EA8FF] cursor-pointer"
                        />
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs font-bold text-[#6EA8FF] dir-ltr break-words">
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

          {/* Mobile Stacked Cards */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:hidden">
            {product.variants.map((variant) => {
              const isSelected = selectedVariant.id === variant.id;
              return (
                <div
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`flex min-w-0 cursor-pointer items-start gap-2 rounded-lg border p-2.5 transition ${
                    isSelected
                      ? "border-[#6EA8FF] bg-[#6EA8FF]/10 text-white"
                      : "border-white/10 bg-[#07111F] text-[#AAB4C3]"
                  }`}
                >
                  <input
                    type="radio"
                    name="product-variant-mobile"
                    checked={isSelected}
                    onChange={() => setSelectedVariant(variant)}
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 cursor-pointer accent-[#6EA8FF]"
                  />
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="truncate font-mono text-[9px] font-bold text-[#6EA8FF] dir-ltr">
                      {variant.code}
                    </span>
                    <span className="line-clamp-2 text-[10px] font-medium leading-snug text-slate-200 dir-ltr">
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
          <div className="mt-10 pt-2 sm:mt-16 sm:border-t sm:border-white/10 sm:pt-12">
            <div className="mb-5 flex flex-col gap-1 sm:mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#6EA8FF] sm:text-xs sm:tracking-wider">
                {isArabic ? "منتجات ذات صلة" : "RELATED PRODUCTS"}
              </span>
              <h2 className="text-[22px] font-bold leading-[1.1] text-white sm:text-3xl">
                {isArabic ? `المزيد في ${product.mainCategory}` : `More in ${product.mainCategory}`}
              </h2>
            </div>
            <ProductGrid items={relatedProducts} />
          </div>
        )}
      </Container>
    </div>
  );
}

