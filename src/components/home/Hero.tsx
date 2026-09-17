"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import HeroBranchSelector from "@/components/branches/HeroBranchSelector";

export default function Hero() {
  const { isArabic } = useLanguage();

  return (
    <section className="hero-viewport relative overflow-hidden bg-[#0D1320]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-[68%_center]"
      >
        <source src="/video/hero.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1320]/95 via-[#0D1320]/72 to-[#0D1320]/25" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0D1320] to-transparent" />

      <div className="hero-viewport-inner relative z-10 mx-auto flex w-full max-w-[1440px] min-w-0 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-0">
        <div className="min-w-0 max-w-[650px] pt-8 sm:pt-12 lg:pt-0">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7BA9E6] sm:text-xs">
            {isArabic ? "مورد مواد كهربائية" : "Electrical Materials Supplier"}
          </p>

          <h1 className="max-w-3xl break-words text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {isArabic ? (
              <>مواد كهربائية موثوقة <br />لكل مشروع</>
            ) : (
              <>Reliable Electrical Materials for Every Project</>
            )}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            {isArabic
              ? "توريد منتجات كهربائية عالية الجودة في جميع أنحاء المملكة العربية السعودية مع خدمة موثوقة ودعم الفروع."
              : "Supplying quality electrical products across Saudi Arabia with dependable service and branch support."}
          </p>

          <div className="mt-7 flex min-w-0 flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#53A6DC] px-5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6993CF]/60 sm:w-auto"
            >
              {isArabic ? "عرض المنتجات" : "View Products"}
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>
        </div>

        <HeroBranchSelector />
      </div>
    </section>
  );
}
