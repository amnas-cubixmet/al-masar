"use client";

export default function AboutHero() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#0D1320]">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6993CF]">
          COMPANY PROFILE
        </span>
        <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
          AL MASAR YELLOW Company
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
          A product-led electrical materials company built around catalogue discovery and branch access.
        </p>
      </div>
    </section>
  );
}
