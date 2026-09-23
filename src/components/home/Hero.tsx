"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Hero() {
  const { language, isArabic } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      data-section="hero"
      className="relative isolate flex min-h-[88svh] w-full flex-col justify-center overflow-hidden bg-[#07111F] pb-8 pt-[92px] text-white sm:min-h-[94svh] sm:pb-10 sm:pt-[100px] lg:min-h-[100svh] lg:pb-12 lg:pt-[110px]"
    >
      {/* Hero Background Video */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        src="/video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Readability overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,20,0.94)_0%,rgba(3,8,20,0.82)_42%,rgba(3,8,20,0.56)_70%,rgba(3,8,20,0.48)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-black/15"
        aria-hidden="true"
      />

      {/* Background Subtle Ambient Glow Elements */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#6EA8FF]/10 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#8A63E8]/10 blur-[150px]"
        aria-hidden="true"
      />

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1680px] flex-1 flex-col justify-center px-5 sm:px-10 lg:px-[7vw]">
        <div className="hero-content-wrapper w-full max-w-[760px] flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="mb-2.5 overflow-hidden sm:mb-5">
            <p className="hero-eyebrow text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[13px] sm:tracking-[0.24em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
              {t.eyebrow}
            </p>
          </div>

          {/* Headline - Powering Every Connection */}
          <h1 className="hero-heading mb-4 text-[38px] font-extrabold leading-[0.94] tracking-[-0.035em] sm:mb-7 sm:text-[68px] lg:text-[84px] xl:text-[96px]">
            <div className="overflow-hidden">
              <span className="hero-title-line-1 block text-white">
                {t.headlineWhite}
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-title-line-2 block bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
                {t.headlineGradient}
              </span>
            </div>
          </h1>

          {/* Description */}
          <p className="hero-desc mb-5 max-w-[540px] text-[13px] font-normal leading-[1.55] text-[#AAB4C3] sm:mb-10 sm:text-[19px] lg:text-[21px]">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="hero-ctas mb-6 grid grid-cols-2 gap-2.5 sm:mb-12 sm:flex sm:flex-row sm:items-center sm:gap-[20px]">
            {/* Primary CTA */}
            <Link
              href="#categories"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg sm:h-[60px] sm:gap-2 sm:rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] hover:brightness-110 px-3 text-[12px] sm:px-9 sm:text-[16px] font-bold text-white shadow-lg shadow-[#8A63E8]/25 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.viewProducts}</span>
              <span className="text-lg font-bold">{isArabic ? "←" : "→"}</span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/15 sm:h-[60px] sm:rounded-xl bg-white/5 hover:bg-white/10 px-3 text-[12px] sm:px-8 sm:text-[16px] font-semibold text-white backdrop-blur-md transition-transform hover:border-white/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t.contactUs}
            </Link>
          </div>

          {/* Small Statistics Row */}
          <div className="hero-stats grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 sm:flex sm:gap-10">
            <div>
              <div className="text-[21px] font-extrabold sm:text-[34px] text-white leading-none tracking-tight">1000+</div>
              <div className="mt-1 text-[8px] font-semibold tracking-[0.08em] sm:text-[12px] sm:tracking-wider text-[#AAB4C3] uppercase">
                {t.statProducts}
              </div>
            </div>
            <div className="h-7 w-px bg-white/10 sm:h-8" />
            <div>
              <div className="text-[21px] font-extrabold sm:text-[34px] text-white leading-none tracking-tight">25+</div>
              <div className="mt-1 text-[8px] font-semibold tracking-[0.08em] sm:text-[12px] sm:tracking-wider text-[#AAB4C3] uppercase">
                {t.statBrands}
              </div>
            </div>
            <div className="h-7 w-px bg-white/10 sm:h-8" />
            <div>
              <div className="text-[21px] font-extrabold sm:text-[34px] text-white leading-none tracking-tight">10+</div>
              <div className="mt-1 text-[8px] font-semibold tracking-[0.08em] sm:text-[12px] sm:tracking-wider text-[#AAB4C3] uppercase">
                {t.statTrust}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


