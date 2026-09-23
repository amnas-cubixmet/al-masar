"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useIntro } from "@/context/IntroContext";
import { gsap } from "@/lib/gsapClient";

const heroProducts = [
  "/images/hero/product-1.png",
  "/images/hero/product-2.png",
  "/images/hero/product-3.png",
  "/images/hero/prodduct-4.png",
];

export default function HeroProductLoop() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { introComplete } = useIntro();

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || !introComplete) return;

    const items = Array.from(
      wrap.querySelectorAll<HTMLElement>(".hero-loop-product")
    );

    if (items.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      gsap.set(items, { autoAlpha: 0 });
      gsap.set(items[0], { autoAlpha: 1 });

      return () => {
        gsap.set(items, {
          clearProps: "opacity,visibility,transform,willChange",
        });
      };
    }

    const mobile = window.matchMedia("(max-width: 899px)").matches;
    const enterY = mobile ? -120 : -230;
    const exitY = mobile ? 90 : 145;

    const ctx = gsap.context(() => {
      gsap.set(items, {
        autoAlpha: 0,
        y: enterY,
        scale: 0.92,
        rotation: 0,
        force3D: true,
        willChange: "transform,opacity",
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.06,
      });

      items.forEach((item) => {
        tl.set(item, {
          autoAlpha: 0,
          y: enterY,
          scale: 0.92,
          rotation: 0,
          force3D: true,
        })
          .to(item, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: mobile ? 0.72 : 0.95,
            ease: "power3.out",
            force3D: true,
          })
          .to(item, {
            y: 0,
            duration: mobile ? 1.35 : 1.7,
            ease: "none",
          })
          .to(item, {
            autoAlpha: 0,
            y: exitY,
            scale: 0.97,
            duration: mobile ? 0.46 : 0.58,
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
      aria-label="Featured electrical products"
    >
      <div className="relative h-[250px] w-full max-w-[360px] sm:h-[340px] sm:max-w-[470px] lg:h-[500px] lg:max-w-[620px]">
        {heroProducts.map((src, index) => (
          <div
            key={src}
            className="hero-loop-product pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden={index !== 0}
          >
            <div className="relative h-[82%] w-[90%] sm:h-[86%] sm:w-[88%] lg:h-[90%] lg:w-[92%]">
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 86vw, (max-width: 1024px) 50vw, 36vw"
                className="object-contain object-center drop-shadow-[0_28px_38px_rgba(0,0,0,0.32)]"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
