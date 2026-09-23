"use client";

import { useEffect, useRef } from "react";
import { gsap, refreshScrollTrigger } from "@/lib/gsapClient";
import { useLanguage } from "@/context/LanguageContext";
import { useIntro } from "@/context/IntroContext";

interface ContactScrollAnimationsProps {
  children: React.ReactNode;
}

export default function ContactScrollAnimations({ children }: ContactScrollAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isArabic } = useLanguage();
  const { introComplete } = useIntro();

  useEffect(() => {
    if (!containerRef.current || !introComplete) return;

    let cleanupAnimations: (() => void) | undefined;
    let secondFrame = 0;

    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {

        // Start GSAP only after hydration has fully committed.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }

        const mm = gsap.matchMedia();

        const ctx = gsap.context(() => {
      // DESKTOP ANIMATIONS (fine pointer desktop)
      mm.add("(min-width: 900px) and (hover: hover) and (pointer: fine)", () => {
        // 1. Hero Reveal (pill, heading, desc)
        const heroPill = containerRef.current?.querySelector(".contact-hero-pill");
        const heroHeading = containerRef.current?.querySelector(".contact-hero-heading");
        const heroDesc = containerRef.current?.querySelector(".contact-hero-desc");

        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (heroPill) {
          heroTl.fromTo(heroPill, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.8 });
        }
        if (heroHeading) {
          heroTl.fromTo(heroHeading, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.85 }, "-=0.6");
        }
        if (heroDesc) {
          heroTl.fromTo(heroDesc, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
        }

        // 2. Main Contact Block: Left Contact Info & Right Form (-28 -> 0 or 28 -> 0)
        const infoBlock = containerRef.current?.querySelector(".contact-info-block");
        const formBlock = containerRef.current?.querySelector(".contact-form-block");

        // Direction adjustment for RTL if applicable
        const leftX = isArabic ? 28 : -28;
        const rightX = isArabic ? -28 : 28;

        if (infoBlock) {
          gsap.fromTo(
            infoBlock,
            { opacity: 0, x: leftX },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: infoBlock,
                start: "top 82%",
                once: true,
              },
            }
          );
        }

        if (formBlock) {
          gsap.fromTo(
            formBlock,
            { opacity: 0, x: rightX },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: formBlock,
                start: "top 82%",
                once: true,
              },
            }
          );
        }

        // 3. Contact Items Stagger
        const contactItems = containerRef.current?.querySelectorAll(".contact-item");
        if (contactItems && contactItems.length > 0) {
          gsap.fromTo(
            contactItems,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.05,
              ease: "power3.out",
              scrollTrigger: {
                trigger: infoBlock || contactItems[0],
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        // 4. Form Fields Stagger
        const formTitle = containerRef.current?.querySelector(".contact-form-title");
        const formFields = containerRef.current?.querySelectorAll(".contact-form-field");

        if (formTitle) {
          gsap.fromTo(
            formTitle,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power3.out",
              scrollTrigger: {
                trigger: formBlock || formTitle,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        if (formFields && formFields.length > 0) {
          gsap.fromTo(
            formFields,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.04,
              ease: "power3.out",
              scrollTrigger: {
                trigger: formBlock || formFields[0],
                start: "top 78%",
                once: true,
              },
            }
          );
        }

        // 5. Quick Contact Cards Reveal
        const quickCard = containerRef.current?.querySelector(".quick-contact-card");
        if (quickCard) {
          gsap.fromTo(
            quickCard,
            { opacity: 0, y: 35, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: quickCard,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // 6. Branch / Location Cards
        const branchTitle = containerRef.current?.querySelector(".branch-section-title");
        const branchCards = containerRef.current?.querySelectorAll(".branch-card");

        if (branchTitle) {
          gsap.fromTo(
            branchTitle,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: branchTitle,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        if (branchCards && branchCards.length > 0) {
          gsap.fromTo(
            branchCards,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: branchCards[0],
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // 7. Map Reveal
        const mapContainer = containerRef.current?.querySelector(".contact-map-container");
        if (mapContainer) {
          gsap.fromTo(
            mapContainer,
            { opacity: 0, scale: 0.985 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: mapContainer,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // 8. FAQ Section & Items
        const faqTitle = containerRef.current?.querySelector(".faq-section-title");
        const faqRows = containerRef.current?.querySelectorAll(".faq-item-row");

        if (faqTitle) {
          gsap.fromTo(
            faqTitle,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              scrollTrigger: {
                trigger: faqTitle,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        if (faqRows && faqRows.length > 0) {
          gsap.fromTo(
            faqRows,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power3.out",
              scrollTrigger: {
                trigger: faqRows[0],
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // 9. Final Contact CTA
        const finalCta = containerRef.current?.querySelector(".final-cta-block");
        if (finalCta) {
          gsap.fromTo(
            finalCta,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: finalCta,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // 10. Footer Reveal
        const footerBlock = document.querySelector(".page-footer-block");
        if (footerBlock) {
          gsap.fromTo(
            footerBlock,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: footerBlock,
                start: "top 92%",
                once: true,
              },
            }
          );
        }
      });

      // MOBILE / TOUCH: keep content, form and branch cards in normal flow.
      mm.add("(max-width: 899px), (hover: none) and (pointer: coarse)", () => {
        const hero = containerRef.current?.querySelector(".contact-hero-heading");
        if (hero) {
          gsap.fromTo(
            hero,
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

        cleanupAnimations = () => {
          mm.revert();
          ctx.revert();
        };
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
      cleanupAnimations?.();
    };
  }, [isArabic, introComplete]);

  // Language switch ScrollTrigger refresh
  useEffect(() => {
    if (!introComplete) return;
    refreshScrollTrigger();
  }, [isArabic, introComplete]);

  return <div ref={containerRef}>{children}</div>;
}
