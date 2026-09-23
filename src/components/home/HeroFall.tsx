"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useIntro } from "@/context/IntroContext";
import { translations } from "@/data/translations";
import { gsap } from "@/lib/gsapClient";

export default function HeroFall() {
  const sectionRef = useRef<HTMLElement>(null);
  const { language, isArabic } = useLanguage();
  const { introComplete } = useIntro();
  const t = translations[language].hero;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !introComplete) return;

    const orbs = Array.from(
      section.querySelectorAll<HTMLElement>(".hero-fall-orb")
    );
    const bar = section.querySelector<HTMLElement>(".hero-fall-bar");

    if (orbs.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      gsap.set([...orbs, bar].filter(Boolean), {
        clearProps: "opacity,visibility,transform,willChange",
      });
      return;
    }

    const mobile = window.matchMedia("(max-width: 899px)").matches;
    const starts = mobile
      ? [
          { y: -72, x: 16, rotation: 2 },
          { y: -54, x: -10, rotation: -2 },
          { y: -42, x: 8, rotation: 1 },
        ]
      : [
          { y: -220, x: 40, rotation: 4 },
          { y: -165, x: -24, rotation: -3 },
          { y: -120, x: 18, rotation: 2 },
        ];

    const ctx = gsap.context(() => {
      orbs.forEach((orb, index) => {
        const start = starts[index] ?? starts[0];

        gsap.set(orb, {
          autoAlpha: 0,
          x: start.x,
          y: start.y,
          rotation: start.rotation,
          scale: mobile ? 0.96 : 0.92,
          transformOrigin: "50% 50%",
          force3D: true,
          willChange: "transform,opacity",
        });
      });

      if (bar) {
        gsap.set(bar, {
          autoAlpha: 0,
          y: -34,
          scaleX: 0.7,
          force3D: true,
          willChange: "transform,opacity",
        });
      }

      const tl = gsap.timeline({
        delay: mobile ? 0.12 : 0.32,
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(orbs, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: mobile ? 0.7 : 1.05,
        stagger: mobile ? 0.07 : 0.11,
        ease: "back.out(1.12)",
        force3D: true,
        clearProps: "opacity,visibility,transform,willChange",
      });

      if (bar) {
        tl.to(
          bar,
          {
            autoAlpha: 1,
            y: 0,
            scaleX: 1,
            duration: mobile ? 0.45 : 0.65,
            ease: "power2.out",
            force3D: true,
            clearProps: "opacity,visibility,transform,willChange",
          },
          mobile ? "-=0.30" : "-=0.42"
        );
      }
    }, section);

    return () => ctx.revert();
  }, [introComplete]);

  return (
    <section
      ref={sectionRef}
      data-section="hero"
      className="relative isolate min-h-[88svh] w-full overflow-hidden bg-[#070D1A] text-white sm:min-h-[94svh] lg:min-h-[100svh]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(89,103,255,0.035),transparent_34%)]" />

      <div className="relative z-10 mx-auto grid min-h-[88svh] w-full max-w-[1680px] grid-cols-1 items-center px-5 pb-10 pt-[104px] sm:min-h-[94svh] sm:px-10 sm:pb-12 sm:pt-[112px] lg:min-h-[100svh] lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] lg:gap-8 lg:px-[6vw] lg:pb-10 lg:pt-[110px] xl:gap-12 xl:px-[7vw]">
        <div className="hero-content-wrapper relative z-20 flex w-full max-w-[760px] flex-col justify-center lg:pr-8">
          <div className="mb-3 overflow-hidden sm:mb-5">
            <p className="hero-eyebrow text-[9px] font-bold uppercase tracking-[0.16em] text-[#9B82FF] sm:text-[11px] sm:tracking-[0.18em]">
              {t.eyebrow}
            </p>
          </div>

          <h1 className="hero-heading mb-5 text-[42px] font-extrabold leading-[0.98] tracking-[-0.035em] sm:mb-7 sm:text-[66px] lg:text-[68px] xl:text-[78px] 2xl:text-[88px]">
            <span className="block overflow-hidden">
              <span className="hero-title-line-1 block text-white">
                {t.headlineWhite}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-title-line-2 block bg-gradient-to-r from-[#8EA0FF] via-[#8D7CFF] to-[#7C6CF2] bg-clip-text text-transparent">
                {t.headlineGradient}
              </span>
            </span>
          </h1>

          <p className="hero-desc mb-6 max-w-[560px] text-[13px] font-normal leading-[1.58] text-[#A8B0C0] sm:mb-9 sm:text-[17px] lg:max-w-[590px] lg:text-[17px] xl:text-[18px]">
            {t.description}
          </p>

          <div className="hero-ctas flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Link
              href="#categories"
              className="inline-flex h-11 min-w-[132px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#6F86FF] to-[#8993FF] px-5 text-[11px] font-bold text-white shadow-[0_10px_30px_rgba(111,134,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 sm:h-12 sm:min-w-[150px] sm:px-6 sm:text-[12px]"
            >
              <span>{t.viewProducts}</span>
              <span aria-hidden="true">{isArabic ? "←" : "→"}</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-11 min-w-[116px] items-center justify-center rounded-lg border border-white/[0.06] bg-[#20283A] px-5 text-[11px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#273147] active:translate-y-0 sm:h-12 sm:min-w-[132px] sm:px-6 sm:text-[12px]"
            >
              {t.contactUs}
            </Link>
          </div>

          <div className="hero-stats hidden" aria-hidden="true" />
        </div>

        <div
          className="pointer-events-none relative mt-8 h-[270px] w-full sm:mt-10 sm:h-[350px] lg:mt-0 lg:h-[560px]"
          aria-hidden="true"
        >
          <div className="hero-fall-orb absolute right-[-7%] top-[2%] h-[210px] w-[210px] rounded-full bg-[#171E43]/55 sm:right-[4%] sm:h-[280px] sm:w-[280px] lg:right-[-2%] lg:top-[2%] lg:h-[365px] lg:w-[365px]" />

          <div className="hero-fall-orb absolute right-[12%] top-[25%] h-[180px] w-[180px] rounded-full bg-[#202D67]/72 sm:right-[18%] sm:h-[235px] sm:w-[235px] lg:right-[19%] lg:top-[20%] lg:h-[305px] lg:w-[305px]" />

          <div className="hero-fall-orb absolute bottom-[2%] right-[34%] h-[145px] w-[145px] rounded-full bg-[#172757]/70 sm:right-[38%] sm:h-[190px] sm:w-[190px] lg:bottom-[3%] lg:right-[36%] lg:h-[235px] lg:w-[235px]" />

          <div className="hero-fall-bar absolute bottom-[20%] right-[15%] h-[14px] w-[46%] origin-center rounded-full bg-[#1A2248]/80 sm:bottom-[18%] sm:right-[12%] sm:h-[18px] sm:w-[48%] lg:bottom-[11%] lg:right-[10%] lg:h-[16px] lg:w-[46%]" />
        </div>
      </div>
    </section>
  );
}
