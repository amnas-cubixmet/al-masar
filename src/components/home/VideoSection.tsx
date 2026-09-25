"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function VideoSection() {
  const { language } = useLanguage();
  const t = translations[language].video;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const shouldLoadVideo =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!shouldLoadVideo) return;

    let sourceAttached = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!sourceAttached) {
              videoEl.src = "/video/hero.mp4";
              videoEl.load();
              sourceAttached = true;
            }

            videoEl.play().catch(() => {
              // Keep the static fallback when autoplay is unavailable.
            });
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.05, rootMargin: "300px 0px" }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
      videoEl.pause();
    };
  }, []);

  return (
    <section
      data-section="video"
      className="relative w-full bg-[#07111F] py-16 sm:py-24 lg:py-32 text-white border-t border-white/5 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1680px] px-6 sm:px-10 lg:px-[7vw]">
        <div className="video-wrapper relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0B1424] shadow-2xl transition-transform duration-700">
          {/* Background Video */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-black/60">
            <video
              ref={videoRef}
              muted
              playsInline
              loop
              preload="none"
              controls={false}
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/40 to-transparent" />
          </div>

          {/* Overlay Content */}
          <div className="video-text-overlay absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16">
            <div className="max-w-2xl">
              <span className="inline-block text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.24em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent mb-2">
                {t.eyebrow}
              </span>
              <h2 className="text-[30px] sm:text-[44px] lg:text-[56px] font-extrabold text-white leading-tight tracking-tight mb-3">
                {t.headline}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#AAB4C3] leading-relaxed max-w-xl">
                {t.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
