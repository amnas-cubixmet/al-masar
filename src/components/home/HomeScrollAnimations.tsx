"use client";

import { useEffect, useRef } from "react";
import { gsap, refreshScrollTrigger } from "@/lib/gsapClient";
import { useLanguage } from "@/context/LanguageContext";
import { useIntro } from "@/context/IntroContext";


export default function HomeScrollAnimations({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isArabic } = useLanguage();
  const { introComplete } = useIntro();

  // Refresh ScrollTrigger when language changes
  useEffect(() => {
    if (!introComplete) return;
    refreshScrollTrigger();
  }, [isArabic, introComplete]);

  useEffect(() => {
    if (!containerRef.current || !introComplete) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP ANIMATION SYSTEM (fine pointer desktop)
      // ==========================================
      mm.add("(min-width: 900px) and (hover: hover) and (pointer: fine)", () => {
        // 1. HERO INITIAL SEQUENCE
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTl
          .from(".hero-eyebrow", {
            opacity: 0,
            y: 30,
            duration: 0.7,
          })
          .from(
            ".hero-title-line-1",
            {
              yPercent: 100,
              opacity: 0,
              duration: 0.8,
            },
            "-=0.5"
          )
          .from(
            ".hero-title-line-2",
            {
              yPercent: 100,
              opacity: 0,
              duration: 0.8,
            },
            "-=0.65"
          )
          .from(
            ".hero-desc",
            {
              opacity: 0,
              y: 30,
              duration: 0.7,
            },
            "-=0.5"
          )
          .from(
            ".hero-ctas",
            {
              opacity: 0,
              y: 25,
              duration: 0.7,
            },
            "-=0.5"
          )
          .from(
            ".hero-stats",
            {
              opacity: 0,
              y: 25,
              duration: 0.7,
            },
            "-=0.5"
          );

        // 2. HERO SUBTLE SCROLL EXIT
        const heroSection = document.querySelector("[data-section='hero']");
        if (heroSection) {
          gsap.to(".hero-content-wrapper", {
            y: -40,
            opacity: 0.75,
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        }

        // 3. CATEGORIES SECTION REVEAL
        const catSection = document.querySelector("#categories");
        if (catSection) {
          gsap.fromTo(
            catSection.querySelectorAll("h2, p, a, button"),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: catSection,
                start: "top 85%",
                once: true,
              },
            }
          );

          const categoryCards = catSection.querySelectorAll(
            ".snap-start > a, .snap-start"
          );
          if (categoryCards.length > 0) {
            gsap.fromTo(
              categoryCards,
              { opacity: 0, y: 50, scale: 0.97 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: catSection,
                  start: "top 75%",
                  once: true,
                },
              }
            );
          }
        }

        // 5. WHY AL MASAR & ABOUT PREVIEW SECTIONS
        const genericSections = document.querySelectorAll(
          "[data-section='why-us'], [data-section='about-preview']"
        );
        genericSections.forEach((sec) => {
          gsap.fromTo(
            sec.querySelectorAll("h2, p, span"),
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.07,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 85%",
                once: true,
              },
            }
          );

          const cards = sec.querySelectorAll(".feature-card-item, .solution-card-item, .company-stat-card");
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: sec,
                  start: "top 78%",
                  once: true,
                },
              }
            );
          }
        });

        // 8. CTA SECTION
        const ctaSection = document.querySelector("[data-section='contact-cta']");
        if (ctaSection) {
          gsap.fromTo(
            ctaSection.querySelector(".cta-container"),
            { opacity: 0, scale: 0.98, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ctaSection,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });

      // ==========================================
      // MOBILE / TOUCH ANIMATION SYSTEM
      // ==========================================
      mm.add("(max-width: 899px), (hover: none) and (pointer: coarse)", () => {
        const hero = containerRef.current?.querySelector(".hero-content-wrapper");
        if (hero) {
          gsap.fromTo(
            hero,
            { autoAlpha: 0, y: 16 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              force3D: true,
              clearProps: "opacity,visibility,transform",
            }
          );
        }

        // Keep all non-hero sections in normal document flow on touch devices.
        // Avoid section-level opacity/transform states that can interfere
        // with Safari viewport changes and vertical scrolling.
      });

      return () => mm.revert();
    }, containerRef);

    refreshScrollTrigger();

    return () => ctx.revert();
  }, [introComplete, isArabic]);

  return <div ref={containerRef}>{children}</div>;
}
