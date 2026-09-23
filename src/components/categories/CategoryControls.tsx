"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryControlsProps {
  currentIndex: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function CategoryControls({
  currentIndex,
  totalCount,
  onPrev,
  onNext,
}: CategoryControlsProps) {
  const formattedCurrent = String(currentIndex + 1).padStart(2, "0");
  const formattedTotal = String(totalCount).padStart(2, "0");

  return (
    <div className="relative z-20 mt-8 flex items-center justify-between gap-4 pointer-events-auto">
      {/* Dynamic Progress Text Counter (01 / 10) */}
      <div className="flex items-center gap-2 font-mono text-sm font-semibold tracking-wider text-slate-400">
        <span className="text-2xl font-bold text-[#69A7FF]">{formattedCurrent}</span>
        <span className="text-slate-600">/</span>
        <span className="text-xs text-slate-500">{formattedTotal}</span>
      </div>

      {/* Slider Buttons */}
      <div className="relative z-20 flex items-center gap-2 pointer-events-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous category"
          className="relative z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#6AA8FF] hover:bg-[#6AA8FF]/20 focus:outline-none cursor-pointer pointer-events-auto min-h-[44px] min-w-[44px]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next category"
          className="relative z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#6AA8FF] hover:bg-[#6AA8FF]/20 focus:outline-none cursor-pointer pointer-events-auto min-h-[44px] min-w-[44px]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
