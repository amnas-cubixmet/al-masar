"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ProductsHeader() {
  const { isArabic } = useLanguage();

  return (
    <div className="relative min-h-0 overflow-hidden bg-gradient-to-b from-[#0B1526] to-[#07111F] pb-8 pt-7 sm:pb-14 sm:pt-10 lg:pb-[56px] lg:pt-[44px]">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#8A63E8]/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#6EA8FF]/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="max-w-[900px]">
          {/* Small Pill Label */}
          <div className="products-pill">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:gap-2 sm:px-3 sm:text-[11px] sm:tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6EA8FF] animate-pulse" />
              {isArabic ? "كتالوج المنتجات" : "PRODUCT CATALOGUE"}
            </span>
          </div>

          {/* Headline */}
          <h1 className="products-heading mt-3 max-w-[900px] text-[32px] font-black leading-[1.02] tracking-[-0.035em] text-white sm:mt-4 sm:text-[clamp(48px,5vw,72px)] sm:leading-[0.98]">
            {isArabic ? (
              <>
                <span className="block">منتجات كهربائية</span>
                <span className="block bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
                  لكل مشروع
                </span>
              </>
            ) : (
              <>
                <span className="block">Electrical Products for</span>
                <span className="block bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
                  Every Project
                </span>
              </>
            )}
          </h1>

          {/* Supporting Copy */}
          <p className="products-desc mt-3 max-w-[620px] text-[13px] leading-[1.6] text-[#AAB4C3] sm:mt-5 sm:text-base sm:leading-[1.7]">
            {isArabic
              ? "استكشف مجموعة المسار من المواد الكهربائية والملحقات وحلول توريد المشاريع."
              : "Explore AL MASAR's range of electrical materials, accessories and project-supply solutions."}
          </p>
        </div>
      </div>
    </div>
  );
}




