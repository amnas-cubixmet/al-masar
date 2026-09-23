"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandLogoCard from "@/components/brands/BrandLogoCard";
import { brands as defaultBrands } from "@/data/brands";
import type { Brand } from "@/data/brands";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface BrandsMarqueeProps {
  brands?: Brand[];
}

export default function BrandsMarquee({ brands = defaultBrands }: BrandsMarqueeProps) {
  const { language, isArabic } = useLanguage();
  const t = translations[language].brands;

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Refresh ScrollTrigger on language change
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(timer);
  }, [isArabic]);

  // Section Entry Reveal + Infinite Marquee Tween
  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      // 1. SECTION HEADING REVEAL (ScrollTrigger)
      const label = sectionRef.current?.querySelector(".brand-label");
      const heading = sectionRef.current?.querySelector(".brand-heading");

      const useScrollReveal = window.matchMedia(
        "(min-width: 900px) and (hover: hover) and (pointer: fine)"
      ).matches;

      if (label && heading && useScrollReveal) {
        gsap.fromTo(
          label,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          heading,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 2. INFINITE CONTINUOUS MARQUEE TWEEN (Independent of ScrollTrigger)
      const isMobile = window.innerWidth < 768;
      const duration = isMobile ? 30 : 42; // Premium slow continuous speed (25-40s mobile, 35-50s desktop)

      // Reset track position before starting new tween
      gsap.set(trackRef.current, { xPercent: 0 });

      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: isArabic ? 50 : -50,
        duration: duration,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isArabic]);

  // Pause on hover
  const handleMouseEnter = () => {
    if (tweenRef.current) {
      tweenRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      tweenRef.current.resume();
    }
  };

  return (
    <section
      ref={sectionRef}
      data-section="brands"
      className="w-full bg-[#07111F] py-10 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10">
          <p className="brand-label mb-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-3 sm:text-[12px] sm:tracking-[0.24em]">
            {t.subheading}
          </p>
          <h2 className="brand-heading text-[28px] sm:text-[42px] lg:text-[50px] font-extrabold leading-[1.08] tracking-tight text-white">
            {t.headline}
          </h2>
        </div>

        {/* Full-Bleed Continuous Auto-Scrolling Marquee Track */}
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 sm:before:w-28 before:bg-gradient-to-r before:from-[#07111F] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 sm:after:w-28 after:bg-gradient-to-l after:from-[#07111F] after:to-transparent">
          <div
            ref={trackRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex w-max items-center gap-3 px-1 py-1 sm:gap-5 sm:py-2"
          >
            {/* Set 1 */}
            {brands.map((brand) => (
              <BrandLogoCard key={`${brand.id}-1`} brand={brand} />
            ))}
            {/* Set 2 (Duplicated for seamless infinite loop) */}
            {brands.map((brand) => (
              <BrandLogoCard key={`${brand.id}-2`} brand={brand} isDuplicate />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
