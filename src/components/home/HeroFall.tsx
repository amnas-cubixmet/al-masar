"use client";

import Link from "next/link";
import HeroProductLoop from "@/components/home/HeroProductLoop";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function HeroFall() {
  const { language, isArabic } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      data-section="hero"
      className="relative isolate min-h-[88svh] w-full overflow-hidden bg-[#070D1A] text-white sm:min-h-[94svh] lg:min-h-[100svh]"
    >
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(7,13,26,0.96)_0%,rgba(7,13,26,0.88)_38%,rgba(7,13,26,0.58)_68%,rgba(7,13,26,0.34)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(7,13,26,0.24)_0%,rgba(7,13,26,0.08)_45%,rgba(7,13,26,0.52)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[88svh] w-full max-w-[1680px] grid-cols-1 items-center px-5 pb-10 pt-[104px] sm:min-h-[94svh] sm:px-10 sm:pb-12 sm:pt-[112px] lg:min-h-[100svh] lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] lg:gap-8 lg:px-[6vw] lg:pb-10 lg:pt-[110px] xl:gap-12 xl:px-[7vw]">
        <div className="hero-content-wrapper relative z-20 flex w-full max-w-[760px] flex-col justify-center lg:pr-8">
          <div className="mb-3 overflow-hidden sm:mb-5">
            <p className="hero-eyebrow text-[9px] font-bold uppercase tracking-[0.16em] text-[#9B82FF] sm:text-[11px] sm:tracking-[0.18em]">
              {t.eyebrow}
            </p>
          </div>

          <h1 className="hero-heading mb-5 text-[42px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:mb-7 sm:text-[66px] lg:text-[68px] xl:text-[78px] 2xl:text-[88px]">
            <span className="block overflow-visible pb-[0.08em]">
              <span className="hero-title-line-1 block text-white">
                {t.headlineWhite}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-title-line-2 block bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
                {t.headlineGradient}
              </span>
            </span>
          </h1>

          <p className="hero-desc mb-6 max-w-[560px] text-[13px] font-normal leading-[1.58] text-[#C1C8D5] sm:mb-9 sm:text-[17px] lg:max-w-[590px] lg:text-[17px] xl:text-[18px]">
            {t.description}
          </p>

          <div className="hero-ctas flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Link
              href="#categories"
              className="inline-flex h-11 min-w-[132px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#6F86FF] to-[#8993FF] px-5 text-[11px] font-bold text-white shadow-[0_10px_30px_rgba(111,134,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 sm:h-12 sm:min-w-[150px] sm:px-6 sm:text-[12px]"
            >
              <span>{t.viewProducts}</span>
              <span aria-hidden="true">{isArabic ? "←" : "→"}</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-11 min-w-[116px] items-center justify-center rounded-lg border border-white/[0.12] bg-[#20283A]/85 px-5 text-[11px] font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#273147]/90 active:translate-y-0 sm:h-12 sm:min-w-[132px] sm:px-6 sm:text-[12px]"
            >
              {t.contactUs}
            </Link>
          </div>

          <div className="hero-stats hidden" aria-hidden="true" />
        </div>

        <div className="relative z-20 mt-7 h-[285px] w-full sm:mt-9 sm:h-[365px] lg:mt-0 lg:h-[560px]">
          <HeroProductLoop />
        </div>
      </div>
    </section>
  );
}
