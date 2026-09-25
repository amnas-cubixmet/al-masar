"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactHero() {
  const { isArabic } = useLanguage();

  return (
    <div className="relative min-h-0 overflow-hidden bg-gradient-to-b from-[#0B1526] to-[#07111F] pb-8 pt-[92px] sm:pb-12 sm:pt-[108px] md:pb-14 md:pt-[116px] lg:pb-16 lg:pt-[124px]">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#8A63E8]/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#6EA8FF]/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="max-w-[760px] min-w-0">
          {/* Small Pill Label */}
          <div className="contact-hero-pill">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:gap-2 sm:px-3.5 sm:text-[11px] sm:tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6EA8FF] animate-pulse" />
              {isArabic ? "تواصل مع المسار" : "CONTACT AL MASAR"}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="contact-hero-heading mt-3 break-words text-[32px] font-black leading-[1.02] tracking-[-0.03em] text-white sm:mt-4 sm:text-[46px] sm:leading-[0.98] md:text-[58px] lg:text-[68px]">
            {isArabic ? (
              <>
                لنقم بتزويد <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
                  مشروعك القادم بالطاقة
                </span>
              </>
            ) : (
              <>
                Let’s Power Your <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
                  Next Project
                </span>
              </>
            )}
          </h1>

          {/* Supporting Copy */}
          <p className="contact-hero-desc mt-3 max-w-2xl break-words text-[13px] leading-[1.6] text-[#AAB4C3] sm:mt-5 sm:text-base sm:leading-relaxed">
            {isArabic
              ? "تواصل مع فريقنا للاستفسار عن المنتجات، وعروض الأسعار، ومتطلبات المشاريع، ودعم التوريد الكهربائي."
              : "Contact our team for product enquiries, quotations, project requirements and electrical supply support."}
          </p>
        </div>
      </div>
    </div>
  );
}

