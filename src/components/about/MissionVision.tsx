"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function MissionVision() {
  const { isArabic } = useLanguage();

  return (
    <section data-section="mission-vision" className="relative w-full bg-[#07111F] py-10 text-white sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        <div className="grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-2">
          
          {/* Mission Card */}
          <div className="mission-card group relative rounded-xl border border-white/10 bg-[#101A2B] p-5 transition-all duration-300 hover:border-[#8A63E8]/40 hover:bg-[#142033] sm:rounded-2xl sm:p-10 sm:shadow-xl sm:shadow-black/30">
            <div className="h-1 w-10 bg-gradient-to-r from-[#6EA8FF] to-[#8A63E8] rounded-full mb-4 sm:mb-8" />
            <h3 className="mb-2 text-xl font-extrabold text-white sm:mb-4 sm:text-3xl">
              {isArabic ? "مهمتنا" : "Our Mission"}
            </h3>
            <p className="text-[13px] leading-[1.65] text-[#AAB4C3] sm:text-[17px]">
              {isArabic
                ? "توفير منتجات كهربائية موثوقة، وتقديم خدمة استثنائية وسريعة، ودعم عملائنا بحلول عملية تضمن نجاح مشاريعهم."
                : "Supply dependable electrical products, responsive service and practical project support."}
            </p>
          </div>

          {/* Vision Card */}
          <div className="vision-card group relative rounded-xl border border-white/10 bg-[#101A2B] p-5 transition-all duration-300 hover:border-[#8A63E8]/40 hover:bg-[#142033] sm:rounded-2xl sm:p-10 sm:shadow-xl sm:shadow-black/30">
            <div className="h-1 w-10 bg-gradient-to-r from-[#8A63E8] to-[#C45BCB] rounded-full mb-4 sm:mb-8" />
            <h3 className="mb-2 text-xl font-extrabold text-white sm:mb-4 sm:text-3xl">
              {isArabic ? "رؤيتنا" : "Our Vision"}
            </h3>
            <p className="text-[13px] leading-[1.65] text-[#AAB4C3] sm:text-[17px]">
              {isArabic
                ? "أن نكون الشريك المفضل والأكثر ثقة للتوريدات الكهربائية في جميع المشاريع الكبرى في المملكة والمنطقة."
                : "Become a trusted electrical-supply partner for projects across Saudi Arabia and the wider region."}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
