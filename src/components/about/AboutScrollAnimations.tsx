"use client";

import { useEffect, useRef } from "react";
import { gsap, refreshScrollTrigger } from "@/lib/gsapClient";
import { useLanguage } from "@/context/LanguageContext";
import { useIntro } from "@/context/IntroContext";

export default function AboutScrollAnimations({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageRef = useRef<HTMLDivElement>(null);
  const { isArabic } = useLanguage();
  const { introComplete } = useIntro();

  // Refresh ScrollTrigger when language changes
  useEffect(() => {
    if (!introComplete) return;
    refreshScrollTrigger();
  }, [isArabic, introComplete]);

  useEffect(() => {
    if (!pageRef.current || !introComplete) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP ANIMATION SYSTEM (fine pointer desktop)
      // ==========================================
      mm.add("(min-width: 900px) and (hover: hover) and (pointer: fine)", () => {
        // 1. ABOUT HERO INTRO SEQUENCE
        const heroSection = pageRef.current?.querySelector("[data-section='about-hero']");
        if (heroSection) {
          const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

          const eyebrow = heroSection.querySelector(".about-hero-eyebrow");
          const line1 = heroSection.querySelector(".about-hero-line-1");
          const line2 = heroSection.querySelector(".about-hero-line-2");
          const desc = heroSection.querySelector(".about-hero-desc");
          const img = heroSection.querySelector(".about-hero-image");

          if (eyebrow) heroTl.fromTo(eyebrow, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7 });
          if (line1) heroTl.fromTo(line1, { opacity: 0, y: 45 }, { opacity: 1, y: 0, duration: 0.85 }, "-=0.5");
          if (line2) heroTl.fromTo(line2, { opacity: 0, y: 45 }, { opacity: 1, y: 0, duration: 0.85 }, "-=0.7");
          if (desc) heroTl.fromTo(desc, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");
          if (img) heroTl.fromTo(img, { opacity: 0, scale: 1.04, y: 24 }, { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.7");

          // Hero Subtle Exit on Scroll
          gsap.to(heroSection.querySelector(".about-hero-content"), {
            y: -30,
            opacity: 0.8,
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        }

        // 2. COMPANY OVERVIEW SECTION
        const overviewSection = pageRef.current?.querySelector("[data-section='company-overview']");
        if (overviewSection) {
          const headingBlock = overviewSection.querySelector(".overview-heading-block");
          const paragraphs = overviewSection.querySelectorAll(".overview-p");

          if (headingBlock) {
            gsap.fromTo(
              headingBlock,
              { opacity: 0, y: 35 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: overviewSection,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          }

          if (paragraphs.length > 0) {
            gsap.fromTo(
              paragraphs,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: overviewSection,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          }
        }

        // 3. ABOUT STATS SECTION
        const statsSection = pageRef.current?.querySelector("[data-section='about-stats']");
        if (statsSection) {
          const statItems = statsSection.querySelectorAll(".stat-item");
          if (statItems.length > 0) {
            gsap.fromTo(
              statItems,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: statsSection,
                  start: "top 85%",
                  once: true,
                },
              }
            );

            statItems.forEach((item) => {
              const num = item.querySelector(".stat-number");
              if (num) {
                gsap.fromTo(
                  num,
                  { scale: 0.95 },
                  {
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: item,
                      start: "top 90%",
                      once: true,
                    },
                  }
                );
              }
            });
          }
        }

        // 4. OUR STORY SECTION (Split Reveal)
        const storySection = pageRef.current?.querySelector("[data-section='our-story']");
        if (storySection) {
          const imgWrap = storySection.querySelector(".story-image-wrap");
          const contentWrap = storySection.querySelector(".story-content-wrap");

          const storyTl = gsap.timeline({
            scrollTrigger: {
              trigger: storySection,
              start: "top 85%",
              once: true,
            },
          });

          if (imgWrap) {
            storyTl.fromTo(
              imgWrap,
              { opacity: 0, scale: 1.04, y: 24 },
              { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" },
              0
            );
          }

          if (contentWrap) {
            storyTl.fromTo(
              contentWrap.querySelectorAll(".story-eyebrow, .story-heading, p"),
              { opacity: 0, y: 35 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" },
              0.2
            );
          }
        }

        // 5. MISSION / VISION CARDS
        const mvSection = pageRef.current?.querySelector("[data-section='mission-vision']");
        if (mvSection) {
          const cards = mvSection.querySelectorAll(".mission-card, .vision-card");
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 45, scale: 0.98 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: mvSection,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          }
        }

        // 6. OUR VALUES SECTION
        const valuesSection = pageRef.current?.querySelector("[data-section='our-values']");
        if (valuesSection) {
          const header = valuesSection.querySelector(".values-header");
          const valueItems = valuesSection.querySelectorAll(".value-item");

          if (header) {
            gsap.fromTo(
              header.querySelectorAll(".values-eyebrow, .values-heading"),
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: valuesSection,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          }

          if (valueItems.length > 0) {
            gsap.fromTo(
              valueItems,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: valuesSection,
                  start: "top 80%",
                  once: true,
                },
              }
            );
          }
        }

        // 7. WHY CHOOSE AL MASAR SECTION
        const whySection = pageRef.current?.querySelector("[data-section='why-choose-about']");
        if (whySection) {
          const header = whySection.querySelector(".why-header");
          const whyItems = whySection.querySelectorAll(".why-item");

          if (header) {
            gsap.fromTo(
              header.querySelectorAll(".why-eyebrow, .why-heading"),
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: whySection,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          }

          if (whyItems.length > 0) {
            gsap.fromTo(
              whyItems,
              { opacity: 0, y: 35 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.07,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: whySection,
                  start: "top 80%",
                  once: true,
                },
              }
            );
          }
        }

        // 8. ABOUT CTA SECTION
        const ctaSection = pageRef.current?.querySelector("[data-section='about-cta']");
        if (ctaSection) {
          const card = ctaSection.querySelector(".about-cta-card");
          const content = ctaSection.querySelector(".about-cta-content");
          const btns = ctaSection.querySelector(".about-cta-btns");

          if (card) {
            gsap.fromTo(
              card,
              { opacity: 0, scale: 0.98 },
              {
                opacity: 1,
                scale: 1,
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

          if (content) {
            gsap.fromTo(
              content.querySelectorAll(".about-cta-eyebrow, .about-cta-heading, .about-cta-desc"),
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ctaSection,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          }

          if (btns) {
            gsap.fromTo(
              btns,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ctaSection,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          }
        }
      });

      // ==========================================
      // MOBILE / TOUCH ANIMATION SYSTEM
      // ==========================================
      mm.add("(max-width: 899px), (hover: none) and (pointer: coarse)", () => {
        const hero = pageRef.current?.querySelector(".about-hero-content");
        if (hero) {
          gsap.fromTo(
            hero,
            { autoAlpha: 0, y: 14 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
            }
          );
        }

        // Keep every content section in normal document flow on touch devices.
        // Avoid section-level opacity/transforms that can interfere with Safari scrolling.
      });

      return () => mm.revert();
    }, pageRef);

    refreshScrollTrigger();

    return () => ctx.revert();
  }, [isArabic, introComplete]);

  return <div ref={pageRef}>{children}</div>;
}
