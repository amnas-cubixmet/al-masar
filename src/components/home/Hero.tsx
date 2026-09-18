"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import HeroBranchSelector from "@/components/branches/HeroBranchSelector";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Hero() {
  const { isArabic } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Single animation trigger on initial load
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] min-h-[88svh] w-full overflow-hidden bg-[#060B16] text-white">
      {/* Full Hero Cover Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-[65%_center] lg:object-center"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay Layer for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060B16]/95 via-[#060B16]/75 to-[#060B16]/40" />

      {/* Background Subtle Gradient Spheres */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-[#8A5CC7]/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/4 h-[600px] w-[600px] rounded-full bg-[#53A6DC]/10 blur-[140px]"
        aria-hidden="true"
      />

      {/* Main Grid Container */}
      <div className="relative z-10 mx-auto flex min-h-[88vh] min-h-[88svh] w-full max-w-[1440px] min-w-0 flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        
        {/* Marketing Content */}
        <div className="flex min-w-0 max-w-[760px] flex-col justify-center">
          
          {/* STEP 1: Eyebrow Fade + Upward Motion */}
          <p
            className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6993CF] sm:text-xs transition-all duration-400 ease-out will-change-[transform,opacity] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            {isArabic ? "المواد الكهربائية" : "ELECTRICAL MATERIALS"}
          </p>

          {/* STEPS 2, 3, 4: Main Heading Lines (All 3 Lines Render Explicitly in DOM) */}
          <h1 className="max-w-3xl min-w-0 break-words text-[clamp(2.4rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
            {isArabic ? (
              <>
                <span className="block text-white">
                  <AnimatedText text="تجهيز ومواد كهربائية" initialDelay={0.25} stagger={0.03} />
                </span>
                <span className="block bg-gradient-to-r from-[#C45BCF] via-[#8A5CC7] to-[#6AA8FF] bg-clip-text text-transparent">
                  <AnimatedText text="لكل مشروع." isGradient initialDelay={0.75} stagger={0.03} />
                </span>
              </>
            ) : (
              <>
                {/* Line 1: Electrical supply */}
                <span className="block text-white">
                  <AnimatedText text="Electrical supply" initialDelay={0.25} stagger={0.03} />
                </span>
                {/* Line 2: built for every */}
                <span className="block bg-gradient-to-r from-[#C45BCF] via-[#8A5CC7] to-[#6AA8FF] bg-clip-text text-transparent">
                  <AnimatedText text="built for every" isGradient initialDelay={0.65} stagger={0.03} />
                </span>
                {/* Line 3: project. */}
                <span className="block bg-gradient-to-r from-[#C45BCF] via-[#8A5CC7] to-[#6AA8FF] bg-clip-text text-transparent">
                  <AnimatedText text="project." isGradient initialDelay={1.05} stagger={0.03} />
                </span>
              </>
            )}
          </h1>

          {/* STEP 5: Description Paragraph (Block Fade + Slide) */}
          <p
            className={`mt-5 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 transition-all duration-500 ease-out will-change-[transform,opacity,filter] ${
              mounted ? "opacity-100 translate-y-0 filter-none" : "opacity-0 translate-y-2.5 blur-[4px]"
            }`}
            style={{ transitionDelay: "1450ms" }}
          >
            {isArabic
              ? "استكشف المنتجات والخيارات والفروع التابعة لشركة المسار الأصفر وحصل على المواد الكهربائية بسهولة في جميع أنحاء المملكة."
              : "Explore electrical materials, branch contacts and fast enquiry options from AL MASAR YELLOW Company."}
          </p>

          {/* STEPS 6 & 7: Staggered CTA Buttons */}
          <div className="mt-7 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
            {/* STEP 6: View Products Button */}
            <Link
              href="/products"
              className={`inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#53A6DC] px-6 text-sm font-semibold text-white transition-all duration-400 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6993CF] sm:w-auto will-change-[transform,opacity] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: "1750ms" }}
            >
              {isArabic ? "عرض المنتجات" : "View Products"}
            </Link>

            {/* STEP 7: Contact Us Button */}
            <Link
              href="/contact"
              className={`inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-400 ease-out hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:w-auto will-change-[transform,opacity] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: "1900ms" }}
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>

          {/* STEPS 8, 9, 10, 11: Branch Selector Internal Text Sequence */}
          <div className="mt-6 w-full max-w-md">
            <HeroBranchSelector mounted={mounted} />
          </div>
        </div>
      </div>

      {/* Smooth Bottom Gradient Fade to Next Section (#0D1320) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D1320] to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
