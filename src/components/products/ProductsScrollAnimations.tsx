"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap, refreshScrollTrigger } from "@/lib/gsapClient";
import { useLanguage } from "@/context/LanguageContext";
import { useIntro } from "@/context/IntroContext";

interface ProductsScrollAnimationsProps {
  children: React.ReactNode;
  category: string;
  query: string;
  sort: string;
  visibleCount: number;
}

export default function ProductsScrollAnimations({
  children,
  category,
  query,
  sort,
  visibleCount,
}: ProductsScrollAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isArabic } = useLanguage();
  const { introComplete } = useIntro();
  const isInitialMount = useRef(true);
  const prevCountRef = useRef(visibleCount);

  // 1. Initial Page Load & Entrance Animations
  useLayoutEffect(() => {
    if (!containerRef.current || !introComplete) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP ANIMATIONS (fine pointer desktop)
      mm.add("(min-width: 900px) and (hover: hover) and (pointer: fine)", () => {
        // Hero Elements Reveal
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        const pill = containerRef.current?.querySelector(".products-pill");
        const heading = containerRef.current?.querySelector(".products-heading");
        const desc = containerRef.current?.querySelector(".products-desc");
        const controls = containerRef.current?.querySelectorAll(
          ".product-search-bar, .product-sort-dropdown"
        );

        if (pill) {
          heroTl.fromTo(pill, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.8 });
        }
        if (heading) {
          heroTl.fromTo(heading, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.85 }, "-=0.6");
        }
        if (desc) {
          heroTl.fromTo(desc, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
        }
        if (controls && controls.length > 0) {
          heroTl.fromTo(controls, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, "-=0.5");
        }

        // Category Filter Bar & Chips
        const filterBar = containerRef.current?.querySelector(".category-filter-bar");
        const chips = containerRef.current?.querySelectorAll(".category-chip-item");

        if (filterBar) {
          gsap.fromTo(
            filterBar,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: filterBar,
                start: "top 88%",
                once: true,
              },
            }
          );
        }

        if (chips && chips.length > 0) {
          gsap.fromTo(
            chips,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power3.out",
              scrollTrigger: {
                trigger: filterBar || chips[0],
                start: "top 88%",
                once: true,
              },
            }
          );
        }

        // Product Cards Entrance
        const cards = containerRef.current?.querySelectorAll(".catalogue-card-wrapper");
        if (cards && cards.length > 0) {
          cards.forEach((card) => {
            const internalItems = card.querySelectorAll(".card-internal-item");
            const img = card.querySelector("img");

            const cardTl = gsap.timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            });

            cardTl.fromTo(
              card,
              { opacity: 0, y: 45, scale: 0.98 },
              { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: "power3.out" }
            );

            if (internalItems && internalItems.length > 0) {
              cardTl.fromTo(
                internalItems,
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power3.out" },
                "-=0.5"
              );
            }

            if (img) {
              cardTl.fromTo(
                img,
                { scale: 1.04 },
                { scale: 1, duration: 0.9, ease: "power3.out" },
                "-=0.6"
              );
            }
          });
        }
      });

      // MOBILE / TOUCH: keep catalogue controls and cards in normal flow.
      mm.add("(max-width: 899px), (hover: none) and (pointer: coarse)", () => {
        const header = containerRef.current?.querySelector(
          ".products-pill, .products-heading, .products-desc"
        );

        if (header) {
          gsap.fromTo(
            header,
            { autoAlpha: 0, y: 12 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
            }
          );
        }
      });
    }, containerRef);

    refreshScrollTrigger();

    return () => ctx.revert();
  }, [introComplete]);

  // 2. Filter / Search Change Fast Transition (No duplicate ScrollTriggers)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const grid = containerRef.current?.querySelector(".product-grid-container");
    const empty = containerRef.current?.querySelector(".products-empty-state");

    const target = grid || empty;
    if (target) {
      gsap.fromTo(
        target,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [category, query, sort]);

  // 3. Load More Newly Loaded Cards Animation
  useEffect(() => {
    if (visibleCount > prevCountRef.current) {
      const cards = containerRef.current?.querySelectorAll(".catalogue-card-wrapper");
      if (cards && cards.length > prevCountRef.current) {
        const newCards = Array.from(cards).slice(prevCountRef.current);
        gsap.fromTo(
          newCards,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power3.out" }
        );
      }
    }
    prevCountRef.current = visibleCount;
  }, [visibleCount]);

  // 4. RTL / Language Switch Refresh
  useEffect(() => {
    if (!introComplete) return;
    refreshScrollTrigger();
  }, [isArabic, introComplete]);

  return <div ref={containerRef}>{children}</div>;
}
