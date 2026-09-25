"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AboutStats() {
  const { isArabic } = useLanguage();

  const stats = [
    { number: "1000+", labelEn: "Products Available", labelAr: "منتج متوفر" },
    { number: "25+", labelEn: "Global Brands", labelAr: "علامة تجارية عالمية" },
    { number: "10+", labelEn: "Years of Trust", labelAr: "سنوات من الثقة" },
    { number: "24/7", labelEn: "Project Support", labelAr: "دعم مخصص للمشاريع" },
  ];

  return (
    <section data-section="about-stats" className="w-full bg-[#0B1424] py-8 sm:py-14">
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        <div className="grid grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-4 lg:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item flex flex-col">
              <span className="stat-number text-[30px] font-extrabold leading-none tracking-tight text-white sm:text-[44px] lg:text-[54px]">
                {stat.number}
              </span>
              <span className="stat-label mt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#AAB4C3] sm:mt-2.5 sm:text-[12px] sm:tracking-wider">
                {isArabic ? stat.labelAr : stat.labelEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
