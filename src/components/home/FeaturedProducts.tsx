"use client";

import { useEffect, useRef } from "react";
import { gsap, refreshScrollTrigger } from "@/lib/gsapClient";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { useIntro } from "@/context/IntroContext";
import { translations } from "@/data/translations";


export default function FeaturedProducts() {
  const { language, isArabic } = useLanguage();
  const { introComplete } = useIntro();
  const t = translations[language].featured;
  const sectionRef = useRef<HTMLElement>(null);

  // Exactly 6 featured products on the homepage.
  const featured = products.filter((product) => product.featured === true);
  const fallbackProducts = products.filter((product) => product.featured !== true);
  const displayProducts = [
    ...featured.slice(0, 6),
    ...fallbackProducts.slice(0, Math.max(0, 6 - featured.length)),
  ].slice(0, 6);

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
        const label = sectionRef.current?.querySelector(".featured-label");
        const heading = sectionRef.current?.querySelector(".featured-heading");
        const desc = sectionRef.current?.querySelector(".featured-desc");
        const btn = sectionRef.current?.querySelector(".featured-btn");

        if (label) {
          tl.fromTo(
            label,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            0
          );
        }

        if (heading) {
          tl.fromTo(
            heading,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            0.1
          );
        }

        if (desc) {
          tl.fromTo(
            desc,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            0.2
          );
        }

        if (btn) {
          tl.fromTo(
            btn,
            { opacity: 0, x: isArabic ? -20 : 20 },
            { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
            0.2
          );
        }

        // 2. Product Cards Reveal Staggered
        const cards = sectionRef.current?.querySelectorAll(".desktop-product-card");
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
            0.3
          );

          // 3. Subtle image scale settling & internal content reveal
          cards.forEach((card) => {
            const img = card.querySelector("img");
            if (img) {
              gsap.fromTo(
                img,
                { scale: 1.05 },
                {
                  scale: 1,
                  duration: 1.0,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    once: true,
                  },
                }
              );
            }

            const internalItems = card.querySelectorAll("span, h3, p, div");
            if (internalItems.length > 0) {
              gsap.fromTo(
                internalItems,
                { opacity: 0, y: 16 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  stagger: 0.05,
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
      data-section="featured-products"
      className="w-full bg-[#07111F] py-10 sm:py-16 lg:py-24 text-white"
    >
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        {/* Section Header */}
        <div className="featured-header mb-6 sm:mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="featured-label mb-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-3 sm:text-[12px] sm:tracking-[0.24em]">
              {t.eyebrow}
            </p>
            <h2 className="featured-heading text-[28px] sm:text-[42px] lg:text-[52px] font-extrabold text-white leading-[1.08] tracking-tight">
              {t.headline}
            </h2>
            <p className="featured-desc mt-2 max-w-xl text-[13px] leading-relaxed text-[#AAB4C3] sm:mt-3 sm:text-base">
              {t.description}
            </p>
          </div>
        </div>

        {/* Featured Products Grid: 2 columns mobile/tablet, 3 desktop */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {displayProducts.map((product) => (
            <div key={product.id} className="desktop-product-card h-full min-w-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
