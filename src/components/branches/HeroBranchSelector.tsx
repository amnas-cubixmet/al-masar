"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, ChevronDown, Check } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

interface HeroBranchSelectorProps {
  mounted?: boolean;
}

export default function HeroBranchSelector({ mounted = true }: HeroBranchSelectorProps) {
  const { branch: selectedBranch, branches, setBranchId } = useBranch();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full z-20 transition-all duration-500 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      style={{ transitionDelay: "2050ms" }}
    >
      {/* Custom Dropdown Menu (Opens Above) */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 w-full rounded-xl border border-white/10 bg-[#131B2B] p-1.5 shadow-2xl z-50 backdrop-blur-md">
          <div className="px-2 py-1.5 border-b border-white/5 mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7BA9E6]">
              Choose Location
            </span>
          </div>
          <div className="space-y-1">
            {branches.map((b) => {
              const isSelected = b.id === selectedBranch.id;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => {
                    setBranchId(b.id);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg p-2.5 text-left transition ${
                    isSelected
                      ? "bg-[#6993CF]/10 text-[#8BB8EF]"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-xs font-semibold leading-snug truncate">
                      {b.name}
                    </p>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">
                      {b.address}
                    </p>
                  </div>
                  {isSelected && (
                    <Check size={16} className="shrink-0 text-[#8BB8EF]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Closed Selector Card Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-left rounded-2xl border border-white/10 bg-[#0F1724]/85 backdrop-blur-xl shadow-2xl p-4 transition hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6993CF]/50"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#6993CF]/20 bg-[#6993CF]/10 text-[#7BA9E6] transition-all duration-400 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: "2100ms" }}
            >
              <MapPin size={18} />
            </div>
            <div className="min-w-0 flex-1">
              {/* Step 8: SELECT BRANCH Label */}
              <span
                className={`block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7BA9E6] transition-all duration-400 ease-out ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "2150ms" }}
              >
                SELECT BRANCH
              </span>
              {/* Step 9: Branch Name */}
              <p
                className={`text-sm font-semibold text-white truncate leading-snug mt-0.5 transition-all duration-400 ease-out ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "2300ms" }}
              >
                {selectedBranch.name}
              </p>
              {/* Step 10: Branch Address */}
              <p
                className={`text-xs text-slate-400 truncate mt-0.5 transition-all duration-400 ease-out ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "2450ms" }}
              >
                {selectedBranch.address}
              </p>
            </div>
          </div>
          {/* Step 11: Branch Dropdown Icon */}
          <ChevronDown
            size={18}
            className={`shrink-0 text-slate-400 transition-all duration-400 ease-out ${
              isOpen ? "rotate-180 text-white" : ""
            } ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            style={{ transitionDelay: "2600ms" }}
          />
        </div>
      </button>
    </div>
  );
}
