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
      {/* Reference-style background */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute right-[-8%] top-[9%] h-[245px] w-[245px] rounded-full bg-[#151C3D]/58 sm:right-[-2%] sm:top-[8%] sm:h-[330px] sm:w-[330px] lg:right-[-1%] lg:top-[10%] lg:h-[455px] lg:w-[455px]" />

        <div className="absolute right-[8%] top-[30%] h-[205px] w-[205px] rounded-full bg-[#202D66]/72 sm:right-[12%] sm:top-[27%] sm:h-[275px] sm:w-[275px] lg:right-[10%] lg:top-[27%] lg:h-[360px] lg:w-[360px]" />

        <div className="absolute bottom-[2%] right-[35%] h-[150px] w-[150px] rounded-full bg-[#182859]/72 sm:bottom-[1%] sm:right-[38%] sm:h-[210px] sm:w-[210px] lg:bottom-[1%] lg:right-[31%] lg:h-[275px] lg:w-[275px]" />

        <div className="absolute bottom-[14%] right-[11%] h-[10px] w-[38%] rounded-full bg-[#1B234C]/82 sm:bottom-[13%] sm:right-[10%] sm:h-[13px] sm:w-[40%] lg:bottom-[15%] lg:right-[9%] lg:h-[15px] lg:w-[34%]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(89,103,255,0.025),transparent_36%)]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[88svh] w-full max-w-[1680px] grid-cols-1 items-center px-5 pb-10 pt-[104px] sm:min-h-[94svh] sm:px-10 sm:pb-12 sm:pt-[112px] lg:min-h-[100svh] lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] lg:gap-8 lg:px-[6vw] lg:pb-10 lg:pt-[110px] xl:gap-12 xl:px-[7vw]">
        <div className="hero-content-wrapper relative z-20 flex w-full max-w-[760px] flex-col justify-center lg:pr-8">
          <div className="mb-3 overflow-hidden sm:mb-5">
            <p className="hero-eyebrow text-[9px] font-bold uppercase tracking-[0.16em] text-[#9B82FF] sm:text-[11px] sm:tracking-[0.18em]">
              {t.eyebrow}
            </p>
          </div>

          <h1 className="hero-heading mb-5 text-[42px] font-extrabold leading-[0.98] tracking-[-0.035em] sm:mb-7 sm:text-[66px] lg:text-[68px] xl:text-[78px] 2xl:text-[88px]">
            <span className="block overflow-hidden">
              <span className="hero-title-line-1 block text-white">
                {t.headlineWhite}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-title-line-2 block bg-gradient-to-r from-[#8EA0FF] via-[#8D7CFF] to-[#7C6CF2] bg-clip-text text-transparent">
                {t.headlineGradient}
              </span>
            </span>
          </h1>

          <p className="hero-desc mb-6 max-w-[560px] text-[13px] font-normal leading-[1.58] text-[#A8B0C0] sm:mb-9 sm:text-[17px] lg:max-w-[590px] lg:text-[17px] xl:text-[18px]">
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
              className="inline-flex h-11 min-w-[116px] items-center justify-center rounded-lg border border-white/[0.06] bg-[#20283A] px-5 text-[11px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#273147] active:translate-y-0 sm:h-12 sm:min-w-[132px] sm:px-6 sm:text-[12px]"
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
