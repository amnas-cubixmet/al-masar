"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { useIntro } from "@/context/IntroContext";
import { gsap } from "@/lib/gsapClient";

export default function HeroProductLoop() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { isArabic } = useLanguage();
  const { introComplete } = useIntro();

  const loopProducts = useMemo(() => {
    const featured = products.filter((product) => product.featured === true);
    const fallback = products.filter((product) => product.featured !== true);

    return [
      ...featured.slice(0, 3),
      ...fallback.slice(0, Math.max(0, 3 - featured.length)),
    ].slice(0, 3);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || !introComplete) return;

    const cards = Array.from(
      wrap.querySelectorAll<HTMLElement>(".hero-loop-product")
    );

    if (cards.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      gsap.set(cards, { autoAlpha: 0 });
      gsap.set(cards[0], { autoAlpha: 1 });

      return () => {
        gsap.set(cards, {
          clearProps: "opacity,visibility,transform,willChange",
        });
      };
    }

    const mobile = window.matchMedia("(max-width: 899px)").matches;
    const enterY = mobile ? -110 : -210;
    const exitY = mobile ? 80 : 125;

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        autoAlpha: 0,
        y: enterY,
        scale: 0.94,
        rotation: -2,
        force3D: true,
        willChange: "transform,opacity",
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.08,
      });

      cards.forEach((card, index) => {
        tl.set(card, {
          autoAlpha: 0,
          y: enterY,
          scale: 0.94,
          rotation: index % 2 === 0 ? -2 : 2,
          force3D: true,
        })
          .to(card, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: mobile ? 0.72 : 0.95,
            ease: "power3.out",
            force3D: true,
          })
          .to(card, {
            y: 0,
            duration: mobile ? 1.35 : 1.65,
            ease: "none",
          })
          .to(card, {
            autoAlpha: 0,
            y: exitY,
            scale: 0.97,
            rotation: index % 2 === 0 ? 1.2 : -1.2,
            duration: mobile ? 0.48 : 0.58,
            ease: "power2.in",
            force3D: true,
          });
      });
    }, wrap);

    return () => ctx.revert();
  }, [introComplete]);

  return (
    <div
      ref={wrapRef}
      className="relative flex h-full w-full items-center justify-center"
    >
      <div className="relative h-[250px] w-full max-w-[330px] sm:h-[330px] sm:max-w-[430px] lg:h-[470px] lg:max-w-[560px]">
        {loopProducts.map((product, index) => {
          const title =
            isArabic && product.titleAr ? product.titleAr : product.title;
          const category =
            isArabic && product.categoryAr
              ? product.categoryAr
              : product.category || product.mainCategory;

          return (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="hero-loop-product absolute inset-0 flex items-center justify-center"
              aria-label={title}
            >
              <div className="group relative w-[78%] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0D1727]/94 shadow-[0_28px_70px_rgba(0,0,0,0.34)] backdrop-blur-md sm:w-[74%] lg:w-[72%]">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#091321]">
                  <Image
                    src={product.image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 30vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                    priority={index === 0}
                  />
                </div>

                <div
                  className="flex items-end justify-between gap-3 px-4 py-3.5 sm:px-5 sm:py-4 lg:px-6 lg:py-5"
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  <div className="min-w-0">
                    <p className="truncate text-[8px] font-bold uppercase tracking-[0.14em] text-[#8FA0FF] sm:text-[9px] lg:text-[10px]">
                      {category}
                    </p>
                    <h3 className="mt-1 truncate text-[13px] font-bold text-white sm:text-[16px] lg:text-[19px]">
                      {title}
                    </h3>
                  </div>

                  <span className="shrink-0 text-[10px] font-semibold tracking-[0.08em] text-white/35 sm:text-[11px]">
                    {String(index + 1).padStart(2, "0")} / {String(loopProducts.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
