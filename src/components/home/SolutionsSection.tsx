"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Home, Building2, Factory, ShieldCheck } from "lucide-react";
import { gsap, refreshScrollTrigger } from "@/lib/gsapClient";
import { useLanguage } from "@/context/LanguageContext";
import { useIntro } from "@/context/IntroContext";
import { translations } from "@/data/translations";


export default function SolutionsSection() {
  const { language, isArabic } = useLanguage();
  const { introComplete } = useIntro();
  const t = translations[language].solutions;
  const sectionRef = useRef<HTMLElement>(null);

  const icons = [Home, Building2, Factory, ShieldCheck];

  // Refresh ScrollTrigger when language changes
  useEffect(() => {
    if (!introComplete) return;
    refreshScrollTrigger();
  }, [isArabic, introComplete]);

  // GSAP Reveal Animation
  useEffect(() => {
    if (!sectionRef.current || !introComplete) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ==========================
      // DESKTOP ANIMATION (fine pointer desktop)
      // ==========================
      mm.add("(min-width: 900px) and (hover: hover) and (pointer: fine)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        });

        // 1. Heading Elements Reveal
        const eyebrow = sectionRef.current?.querySelector(".solution-eyebrow");
        const heading = sectionRef.current?.querySelector(".solution-heading");
        const btn = sectionRef.current?.querySelector(".solution-btn");

        if (eyebrow) {
          tl.fromTo(
            eyebrow,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
            0
          );
        }

        if (heading) {
          tl.fromTo(
            heading,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
            0.1
          );
        }

        if (btn) {
          tl.fromTo(
            btn,
            { opacity: 0, x: isArabic ? -20 : 20 },
            { opacity: 1, x: 0, duration: 0.75, ease: "power3.out" },
            0.15
          );
        }

        // 2. 4 Solution Cards Sequential Reveal (01 -> 02 -> 03 -> 04)
        const cards = sectionRef.current?.querySelectorAll(".solution-card-item");
        if (cards && cards.length > 0) {
          tl.fromTo(
            cards,
            { opacity: 0, y: 50, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
            },
            0.25
          );

          // 3. Internal Card Elements Reveal
          cards.forEach((card) => {
            const internalItems = card.querySelectorAll(".card-internal-item");
            if (internalItems.length > 0) {
              gsap.fromTo(
                internalItems,
                { opacity: 0, y: 12 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  stagger: 0.04,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    once: true,
                  },
                }
              );
            }
          });
        }
      });


      return () => mm.revert();
    }, sectionRef);

    refreshScrollTrigger();

    return () => ctx.revert();
  }, [isArabic, introComplete]);

  return (
    <section
      ref={sectionRef}
      data-section="solutions"
      className="relative w-full bg-[#07111F] py-10 sm:py-16 lg:py-24 text-white"
    >
      {/* Background Decorative Ambient Blur */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#8A63E8]/5 blur-[160px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        {/* Section Header */}
        <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:mb-12 md:flex-row md:items-end">
          <div>
            <p className="solution-eyebrow mb-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-3 sm:text-[12px] sm:tracking-[0.24em]">
              {t.eyebrow}
            </p>
            <h2 className="solution-heading text-[28px] sm:text-[42px] lg:text-[52px] font-extrabold text-white leading-[1.08] tracking-tight">
              {t.headline}
            </h2>
          </div>
        </div>

        {/* 4 Solution Cards Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {t.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Link
                key={item.id}
                href="/products"
                className="solution-card-item group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#101A2B] p-3.5 sm:p-7 transition-all duration-300 hover:border-[#8A63E8]/50 hover:bg-[#142033] hover:-translate-y-1 sm:rounded-2xl sm:shadow-xl sm:shadow-black/30"
              >
                <div>
                  {/* Top Header Row: Number + Icon */}
                  <div className="mb-3 flex items-center justify-between gap-3 sm:mb-6 sm:gap-4">
                    <span className="card-internal-item text-[17px] sm:text-3xl font-extrabold bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
                      {item.id}
                    </span>
                    <div className="card-internal-item flex h-8 w-8 items-center justify-center rounded-lg sm:h-12 sm:w-12 sm:rounded-xl border border-white/10 bg-white/5 text-[#6EA8FF] transition-all duration-300 group-hover:border-[#8A63E8]/40 group-hover:bg-[#8A63E8]/15 group-hover:text-white group-hover:scale-105">
                      <Icon className="h-4 w-4 stroke-[1.8] sm:h-6 sm:w-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="card-internal-item mb-1.5 text-[14px] font-bold leading-snug text-white sm:mb-3 sm:text-2xl group-hover:text-[#6EA8FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="card-internal-item line-clamp-3 text-[10px] leading-relaxed text-[#AAB4C3] sm:line-clamp-none sm:text-sm">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Arrow Link */}
                <div className="card-internal-item mt-3 flex items-center gap-1.5 text-[8px] sm:mt-8 sm:gap-2 sm:text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors">
                  <span>{t.exploreCategory}</span>
                  {isArabic ? (
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
