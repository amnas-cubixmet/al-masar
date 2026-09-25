"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutHero() {
  const { isArabic } = useLanguage();

  return (
    <section
      data-section="about-hero"
      className="relative flex w-full flex-col justify-center overflow-hidden bg-[#07111F] pb-10 pt-[96px] text-white sm:min-h-[70svh] sm:pb-14 sm:pt-[110px] lg:min-h-[75svh] lg:pb-16 lg:pt-[130px]"
    >
      {/* Background Ambient Blur */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#6EA8FF]/10 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#8A63E8]/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        <div className="grid grid-cols-1 items-center gap-7 sm:gap-10 lg:grid-cols-[45%_55%] lg:gap-14">
          
          {/* Left Content Column */}
          <div className="about-hero-content flex flex-col justify-center min-w-0">
            {/* Small Eyebrow Label */}
            <p className="about-hero-eyebrow mb-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-4 sm:text-[12px] sm:tracking-[0.24em]">
              {isArabic ? "عن شركة المسار" : "ABOUT AL MASAR"}
            </p>

            {/* Main Heading */}
            <h1 className="about-hero-heading mb-4 text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] sm:mb-6 sm:text-[54px] sm:leading-[0.98] lg:text-[68px] xl:text-[78px]">
              <span className="about-hero-line-1 block text-white">
                {isArabic ? "مبنية على الموثوقية." : "Built on Reliability."}
              </span>
              <span className="about-hero-line-2 block bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
                {isArabic ? "مدفوعة بالتقدم." : "Driven by Progress."}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="about-hero-desc max-w-[520px] text-[14px] font-normal leading-[1.6] text-[#AAB4C3] sm:text-[18px]">
              {isArabic
                ? "تقدم شركة المسار أجود المواد والحلول الكهربائية للمقاولين والشركات والمشاريع في جميع أنحاء المملكة العربية السعودية."
                : "AL MASAR supplies dependable electrical materials and solutions for contractors, businesses and projects across Saudi Arabia."}
            </p>
          </div>

          {/* Right Visual Panel */}
          <div className="about-hero-image relative aspect-[16/10] w-full overflow-hidden rounded-[14px] border border-white/10 bg-[#0B1424] sm:rounded-[22px] sm:shadow-2xl">
            <Image
              src="/images/about/about-hero.png"
              alt="AL MASAR electrical supply operations"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
