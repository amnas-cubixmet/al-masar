"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let configured = false;

if (typeof window !== "undefined" && !configured) {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.config({
    ignoreMobileResize: true,
    limitCallbacks: true,
  });

  configured = true;
}

type MobileRevealOptions = {
  y?: number;
  duration?: number;
  startRatio?: number;
  ease?: string;
};

export function setupMobileReveal(
  targets: Iterable<Element> | ArrayLike<Element> | Element[],
  options: MobileRevealOptions = {}
) {
  if (typeof window === "undefined") return () => {};

  const {
    y = 18,
    duration = 0.55,
    startRatio = 0.92,
    ease = "power2.out",
  } = options;

  const elements = Array.from(targets).filter(
    (target): target is HTMLElement => target instanceof HTMLElement
  );

  if (elements.length === 0) return () => {};

  const tweens = new Set<gsap.core.Tween>();
  const rafIds = new Set<number>();

  const reveal = (element: HTMLElement) => {
    if (element.dataset.mobileRevealDone === "true") return;
    element.dataset.mobileRevealDone = "true";

    const tween = gsap.to(element, {
      autoAlpha: 1,
      y: 0,
      duration,
      ease,
      force3D: true,
      overwrite: "auto",
      onComplete: () => {
        tweens.delete(tween);
        gsap.set(element, {
          clearProps: "opacity,visibility,transform,willChange",
        });
      },
    });

    tweens.add(tween);
  };

  elements.forEach((element) => {
    delete element.dataset.mobileRevealDone;
    gsap.set(element, {
      autoAlpha: 0,
      y,
      force3D: true,
      willChange: "transform,opacity",
    });
  });

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      const rafId = requestAnimationFrame(() => {
        rafIds.delete(rafId);
        reveal(element);
      });
      rafIds.add(rafId);
    });

    return () => {
      rafIds.forEach(cancelAnimationFrame);
      tweens.forEach((tween) => tween.kill());
      elements.forEach((element) => {
        delete element.dataset.mobileRevealDone;
      });
      gsap.set(elements, {
        clearProps: "opacity,visibility,transform,willChange",
      });
    };
  }

  const bottomMargin = Math.max(
    0,
    Math.min(40, Math.round((1 - startRatio) * 100))
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target as HTMLElement;
        observer.unobserve(element);

        const rafId = requestAnimationFrame(() => {
          rafIds.delete(rafId);
          reveal(element);
        });
        rafIds.add(rafId);
      });
    },
    {
      root: null,
      rootMargin: `0px 0px -${bottomMargin}% 0px`,
      threshold: 0.01,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => {
    observer.disconnect();
    rafIds.forEach(cancelAnimationFrame);
    tweens.forEach((tween) => tween.kill());
    elements.forEach((element) => {
      delete element.dataset.mobileRevealDone;
    });
    gsap.set(elements, {
      clearProps: "opacity,visibility,transform,willChange",
    });
  };
}
export function refreshScrollTrigger() {
  if (typeof window === "undefined") return;

  const refresh = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });
  };

  refresh();

  if (document.fonts?.ready) {
    document.fonts.ready.then(refresh).catch(() => {});
  }
}

export { gsap, ScrollTrigger };
