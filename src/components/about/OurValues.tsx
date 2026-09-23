"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function OurValues() {
  const { isArabic } = useLanguage();

  const values = [
    {
      num: "01",
      titleEn: "Quality",
      titleAr: "الجودة",
      descEn: "Reliable products and trusted manufacturers.",
      descAr: "منتجات موثوقة ومواد معتمدة من كبرى المصانع العالمية.",
    },
    {
      num: "02",
      titleEn: "Reliability",
      titleAr: "الموثوقية",
      descEn: "Consistent supply and dependable service.",
      descAr: "التزام تام بالمواعيد وتجهيز دقيق لطلبات التوريد.",
    },
    {
      num: "03",
      titleEn: "Partnership",
      titleAr: "الشراكة",
      descEn: "Long-term relationships with customers and contractors.",
      descAr: "بناء علاقات طويلة الأمد قائمة على الثقة والشفافية مع كافة العملاء والمقاولين.",
    },
    {
      num: "04",
      titleEn: "Progress",
      titleAr: "التقدم",
      descEn: "Smarter products, stronger operations and continuous improvement.",
      descAr: "تقديم أحدث المنتجات والتطوير المستمر للخدمات والعمليات.",
    },
  ];

  return (
    <section data-section="our-values" className="relative w-full bg-[#07111F] py-10 text-white sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        
        {/* Header */}
        <div className="values-header mb-6 sm:mb-12">
          <p className="values-eyebrow mb-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-3 sm:text-[12px] sm:tracking-[0.24em]">
            {isArabic ? "قيمنا الجوهرية" : "OUR CORE VALUES"}
          </p>
          <h2 className="values-heading text-[28px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[44px]">
            {isArabic ? "ما نؤمن به" : "What We Stand For"}
          </h2>
        </div>

        {/* 4 Values Editorial Blocks */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map((item) => (
            <div
              key={item.num}
              className="value-item flex flex-col border-t border-white/10 pt-4 transition-colors hover:border-[#8A63E8] sm:pt-6"
            >
              <span className="mb-2 text-[17px] font-extrabold bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-3 sm:text-xl">
                {item.num}
              </span>
              <h3 className="mb-1.5 text-[16px] font-bold text-white sm:mb-2 sm:text-2xl">
                {isArabic ? item.titleAr : item.titleEn}
              </h3>
              <p className="text-[12px] leading-relaxed text-[#AAB4C3] sm:text-sm">
                {isArabic ? item.descAr : item.descEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
