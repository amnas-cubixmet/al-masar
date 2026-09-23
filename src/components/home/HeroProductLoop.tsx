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

    const products = Array.from(
      wrap.querySelectorAll<HTMLElement>(".hero-loop-product")
    );

    if (products.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      gsap.set(products, { autoAlpha: 0 });
      gsap.set(products[0], { autoAlpha: 1 });

      return () => {
        gsap.set(products, {
          clearProps: "opacity,visibility,transform,willChange",
        });
      };
    }

    const mobile = window.matchMedia("(max-width: 899px)").matches;
    const enterY = mobile ? -110 : -210;
    const exitY = mobile ? 80 : 125;

    const ctx = gsap.context(() => {
      gsap.set(products, {
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

      products.forEach((product, index) => {
        tl.set(product, {
          autoAlpha: 0,
          y: enterY,
          scale: 0.94,
          rotation: index % 2 === 0 ? -2 : 2,
          force3D: true,
        })
          .to(product, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: mobile ? 0.72 : 0.95,
            ease: "power3.out",
            force3D: true,
          })
          .to(product, {
            y: 0,
            duration: mobile ? 1.35 : 1.65,
            ease: "none",
          })
          .to(product, {
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
      <div className="relative h-[250px] w-full max-w-[360px] sm:h-[340px] sm:max-w-[470px] lg:h-[500px] lg:max-w-[620px]">
        {loopProducts.map((product, index) => {
          const title =
            isArabic && product.titleAr ? product.titleAr : product.title;

          return (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="hero-loop-product absolute inset-0 flex items-center justify-center"
              aria-label={title}
            >
              <div className="relative h-[78%] w-[86%] sm:h-[82%] sm:w-[84%] lg:h-[86%] lg:w-[88%]">
                <Image
                  src={product.image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 34vw"
                  className="object-contain object-center drop-shadow-[0_28px_38px_rgba(0,0,0,0.32)] transition-transform duration-500 hover:scale-[1.025]"
                  priority={index === 0}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
