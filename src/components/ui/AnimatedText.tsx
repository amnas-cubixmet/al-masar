"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export interface AnimatedTextProps {
  text: string;
  className?: string;
  isGradient?: boolean;
  gradientClassName?: string;
  initialDelay?: number; // in seconds
  stagger?: number; // in seconds
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function AnimatedText({
  text,
  className,
  isGradient = false,
  gradientClassName = "bg-gradient-to-r from-[#C45BCF] via-[#8A5CC7] to-[#6AA8FF] bg-clip-text text-transparent",
  initialDelay = 0.25,
  stagger = 0.03,
  as: Component = "span",
}: AnimatedTextProps) {
  const [animated, setAnimated] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      setAnimated(true);
      return;
    }

    const timer = setTimeout(() => {
      setAnimated(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  if (!text) return null;

  const words = text.trim().split(" ");
  let globalIndex = 0;

  return (
    <Component
      className={cn(
        "inline-block min-w-0 max-w-full break-words",
        isGradient && gradientClassName,
        className
      )}
      style={isGradient ? { WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } : undefined}
    >
      {words.map((word, wordIdx) => {
        const letters = Array.from(word);

        return (
          <span key={`word-${wordIdx}`} className="inline-block whitespace-nowrap">
            {letters.map((letter, letterIdx) => {
              const index = globalIndex++;
              const letterDelay = initialDelay + index * stagger;
              const isVisible = animated || reducedMotion;

              return (
                <span
                  key={`letter-${index}-${letterIdx}`}
                  className="inline-block transition-all ease-out will-change-[transform,opacity,filter]"
                  style={
                    reducedMotion
                      ? {}
                      : {
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible
                            ? "translate3d(0, 0, 0)"
                            : "translate3d(0, 14px, 0)",
                          filter: isVisible ? "blur(0px)" : "blur(4px)",
                          transitionDelay: `${letterDelay}s`,
                          transitionDuration: "350ms",
                        }
                  }
                >
                  {letter}
                </span>
              );
            })}
            {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
    </Component>
  );
}
