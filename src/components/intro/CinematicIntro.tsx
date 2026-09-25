"use client";

import { useCallback, useEffect, useRef } from "react";
import { gsap, refreshScrollTrigger } from "@/lib/gsapClient";
import { useIntro } from "@/context/IntroContext";
import { useLanguage } from "@/context/LanguageContext";

export default function CinematicIntro() {
  const { introActive, introComplete, completeIntro } = useIntro();
  const { isArabic } = useLanguage();

  const overlayRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<ReturnType<typeof gsap.timeline> | null>(null);
  const finishedRef = useRef(false);

  const complete = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    completeIntro();
    refreshScrollTrigger();
  }, [completeIntro]);

  const handleSkip = useCallback(() => {
    if (finishedRef.current) return;

    timelineRef.current?.kill();
    timelineRef.current = null;

    if (!overlayRef.current) {
      complete();
      return;
    }

    gsap.to(overlayRef.current, {
      autoAlpha: 0,
      duration: 0.2,
      ease: "power2.out",
      onComplete: complete,
    });
  }, [complete]);

  useEffect(() => {
    if (!introActive || introComplete || !overlayRef.current) return;

    finishedRef.current = false;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const label = textContainerRef.current?.querySelector(".intro-label");
    const heading = textContainerRef.current?.querySelector(".intro-heading");
    const glow = overlayRef.current.querySelector(".intro-glow");

    if (label && heading) {
      gsap.set([label, heading], {
        autoAlpha: 0,
        y: prefersReducedMotion ? 0 : 20,
      });
    }

    if (glow) {
      gsap.set(glow, {
        scale: prefersReducedMotion ? 1 : 0.96,
        opacity: 0.45,
      });
    }

    const tl = gsap.timeline({
      onComplete: complete,
    });

    timelineRef.current = tl;

    if (glow) {
      tl.to(glow, {
        scale: 1,
        opacity: 1,
        duration: prefersReducedMotion ? 0.1 : 0.7,
        ease: "power2.out",
      });
    }

    if (label && heading) {
      tl.to(
        [label, heading],
        {
          autoAlpha: 1,
          y: 0,
          duration: prefersReducedMotion ? 0.15 : 0.55,
          stagger: prefersReducedMotion ? 0 : 0.08,
          ease: "power3.out",
        },
        prefersReducedMotion ? 0 : "-=0.4"
      );
    }

    tl.to({}, { duration: prefersReducedMotion ? 0.15 : 0.65 });

    tl.to(overlayRef.current, {
      autoAlpha: 0,
      scale: prefersReducedMotion ? 1 : 1.01,
      duration: prefersReducedMotion ? 0.15 : 0.4,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
      timelineRef.current = null;

      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [introActive, introComplete, complete]);

  if (!introActive || introComplete) return null;

  return (
    <div
      ref={overlayRef}
      className="intro-viewport fixed inset-0 z-[9999] overflow-hidden bg-[#030814] text-white"
      role="dialog"
      aria-label="Cinematic intro"
    >
      <div
        className="intro-glow pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(110,168,255,0.22),transparent_36%),radial-gradient(circle_at_72%_72%,rgba(196,91,203,0.18),transparent_40%),linear-gradient(135deg,#030814_0%,#07111F_55%,#0B1020_100%)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6EA8FF]/60 to-transparent"
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={handleSkip}
        className="absolute z-30 inline-flex h-10 items-center justify-center rounded-full border border-white/15 bg-black/20 px-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-colors hover:border-white/35 hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        style={{
          top: "max(16px, env(safe-area-inset-top))",
          right: "max(16px, env(safe-area-inset-right))",
        }}
        aria-label={isArabic ? "تخطي المقدمة" : "Skip intro"}
      >
        {isArabic ? "تخطي" : "Skip"}
      </button>

      <div
        ref={textContainerRef}
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center"
      >
        <p className="intro-label mb-3 bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-[12px] font-bold uppercase tracking-[0.3em] text-transparent opacity-0 sm:text-[14px]">
          AL MASAR
        </p>

        <h1 className="intro-heading max-w-4xl text-[36px] font-extrabold leading-[1.05] tracking-tight opacity-0 sm:text-[56px] lg:text-[76px]">
          {isArabic ? (
            <>
              <span>نمنح كل اتصال </span>
              <span className="bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
                قوة
              </span>
            </>
          ) : (
            <>
              <span>Powering Every </span>
              <span className="bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
                Connection
              </span>
            </>
          )}
        </h1>
      </div>
    </div>
  );
}
