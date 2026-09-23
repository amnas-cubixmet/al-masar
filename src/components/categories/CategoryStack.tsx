"use client";

import { useRef } from "react";
import type { Category } from "@/data/categories";
import CategoryStackCard from "./CategoryStackCard";

interface CategoryStackProps {
  categories: Category[];
  activeIndex: number;
  onSelectCategory?: (index: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function CategoryStack({
  categories,
  activeIndex,
  onSelectCategory,
  onPrev,
  onNext,
}: CategoryStackProps) {
  // Mobile / Touch Drag State
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Mouse Drag State (Desktop & Pointer)
  const isDragging = useRef<boolean>(false);
  const dragStartX = useRef<number>(0);

  // Compute discrete 3D card deck position based on activeIndex (Desktop)
  const getDiscreteStyle = (index: number) => {
    const dist = index - activeIndex;

    // Card has passed active to the left
    if (dist < 0) {
      return {
        left: "-35%",
        width: "64%",
        zIndex: 10,
        opacity: 0,
        transform: "translate3d(0, -50%, 0) scale(0.9)",
      };
    }

    // Active Card (dist === 0)
    if (dist === 0) {
      return {
        left: "0%",
        width: "64%",
        zIndex: 40,
        opacity: 1,
        transform: "translate3d(0, -50%, 0) scale(1)",
      };
    }

    // 2nd Card (dist === 1)
    if (dist === 1) {
      return {
        left: "52%",
        width: "32%",
        zIndex: 30,
        opacity: 0.92,
        transform: "translate3d(0, -50%, 0) scale(0.95)",
      };
    }

    // 3rd Card (dist === 2)
    if (dist === 2) {
      return {
        left: "70%",
        width: "23%",
        zIndex: 20,
        opacity: 0.75,
        transform: "translate3d(0, -50%, 0) scale(0.9)",
      };
    }

    // 4th Card (dist === 3)
    if (dist === 3) {
      return {
        left: "83%",
        width: "17%",
        zIndex: 10,
        opacity: 0.55,
        transform: "translate3d(0, -50%, 0) scale(0.85)",
      };
    }

    // Beyond 4th Card (dist > 3)
    return {
      left: "92%",
      width: "12%",
      zIndex: 1,
      opacity: 0,
      transform: "translate3d(0, -50%, 0) scale(0.8)",
    };
  };

  // Touch Swipe Handlers (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touchEndX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const touchEndY = e.changedTouches[0]?.clientY ?? touchStartY.current;

    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Trigger swipe if horizontal delta is larger than vertical and threshold >= 40px
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0 && onNext) {
        onNext();
      } else if (diffX < 0 && onPrev) {
        onPrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Mouse Drag Handlers (Desktop & Pointer)
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const diffX = dragStartX.current - e.clientX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0 && onNext) {
        onNext();
      } else if (diffX < 0 && onPrev) {
        onPrev();
      }
    }
    isDragging.current = false;
  };

  return (
    <div className="w-full select-none">
      {/* Mobile Slider Viewport & Flex Track Container (< lg / < 1024px) */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full overflow-x-hidden py-2 lg:hidden touch-pan-y"
        style={{ touchAction: "pan-y" }}
      >
        <div
          className="flex w-full gap-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translate3d(calc(-${activeIndex * 90}% - ${activeIndex * 16}px), 0, 0)` }}
        >
          {categories.map((cat, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={cat.slug}
                className="h-[430px] w-[88%] shrink-0 max-w-[340px] sm:w-[320px]"
                style={{ flex: "0 0 88%" }}
              >
                <CategoryStackCard category={cat} isActive={isActive} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Overlapping 3D Deck Container (>= lg / >= 1024px) */}
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative hidden h-[560px] w-full xl:h-[620px] lg:block touch-pan-y cursor-grab active:cursor-grabbing"
      >
        {categories.map((cat, idx) => {
          const dist = idx - activeIndex;
          const isVisible = dist >= -1 && dist <= 4;
          const style = getDiscreteStyle(idx);

          return (
            <div
              key={cat.slug}
              onClick={() => onSelectCategory && onSelectCategory(idx)}
              className={`absolute top-1/2 h-[480px] xl:h-[540px] transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                isVisible ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
              }`}
              style={style}
            >
              <CategoryStackCard category={cat} isActive={dist === 0} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
