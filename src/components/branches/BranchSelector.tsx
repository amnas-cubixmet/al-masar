"use client";

import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, MapPin } from "lucide-react";
import type { Branch } from "@/types/branch";
import { cn } from "@/lib/cn";

interface BranchSelectorProps {
  branches: Branch[];
  selectedBranch: Branch;
  onSelectBranch: (branch: Branch) => void;
}

export default function BranchSelector({
  branches,
  selectedBranch,
  onSelectBranch,
}: BranchSelectorProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-11 w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#151E2D] px-4 text-sm font-medium text-white transition hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6993CF]/50"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <MapPin size={18} className="shrink-0 text-[#6993CF]" />
          <span className="truncate">{selectedBranch.name}</span>
        </div>
        <ChevronDown
          size={16}
          className={cn("shrink-0 text-slate-400 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 rounded-xl border border-white/10 bg-[#131B2B] p-1 shadow-2xl">
          {branches.map((item) => {
            const isSelected = item.id === selectedBranch.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelectBranch(item);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition hover:bg-white/5 hover:text-white",
                  isSelected
                    ? "bg-[#6993CF]/10 text-[#8BB8EF] font-semibold"
                    : "text-slate-300"
                )}
              >
                <span className="truncate">{item.name}</span>
                {isSelected && <Check size={16} className="shrink-0 text-[#8BB8EF]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
