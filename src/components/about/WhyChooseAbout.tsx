"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseAbout() {
  const { isArabic } = useLanguage();

  const reasons = [
    { titleEn: "Wide Product Range", titleAr: "تنوع كبـير في المنتجات" },
    { titleEn: "Trusted Global Brands", titleAr: "علامات تجارية عالمية موثوقة" },
    { titleEn: "Project Support", titleAr: "دعم مخصص للمشاريع" },
    { titleEn: "Reliable Supply", titleAr: "تجهيز وسلسلة توريد مضمونة" },
    { titleEn: "Competitive Solutions", titleAr: "حلول وأسعار منافسة" },
    { titleEn: "Responsive Service", titleAr: "استجابة وسرعة في الخدمة" },
  ];

  return (
    <section data-section="why-choose-about" className="relative w-full bg-[#07111F] py-10 text-white sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        
        {/* Header */}
        <div className="why-header mb-6 sm:mb-12">
          <p className="why-eyebrow mb-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-3 sm:text-[12px] sm:tracking-[0.24em]">
            {isArabic ? "مزايا التعامل معنا" : "THE AL MASAR ADVANTAGE"}
          </p>
          <h2 className="why-heading text-[28px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[44px]">
            {isArabic ? "لماذا تختار الشركات شركة المسار؟" : "Why Businesses Choose AL MASAR"}
          </h2>
        </div>

        {/* Modern Grid with Thin Dividers */}
        <div className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="why-item border-b border-r border-white/10 p-4 transition-colors hover:bg-white/[0.02] sm:p-8 lg:p-10"
            >
              <div className="mb-3 h-1 w-7 rounded-full bg-gradient-to-r from-[#6EA8FF] to-[#8A63E8] sm:mb-5 sm:w-8" />
              <h3 className="text-[15px] font-bold leading-snug text-white sm:text-2xl">
                {isArabic ? item.titleAr : item.titleEn}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
