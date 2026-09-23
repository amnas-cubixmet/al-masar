"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, ChevronDown, Check } from "lucide-react";
import { useBranch } from "@/context/BranchContext";
import { useLanguage } from "@/context/LanguageContext";

interface HeroBranchSelectorProps {
  mounted?: boolean;
}

export default function HeroBranchSelector({ mounted = true }: HeroBranchSelectorProps) {
  const { branch: selectedBranch, branches, setBranchId } = useBranch();
  const { isArabic } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const name = (branch: typeof selectedBranch) =>
    isArabic && branch.nameAr ? branch.nameAr : branch.name;
  const address = (branch: typeof selectedBranch) =>
    isArabic && branch.addressAr ? branch.addressAr : branch.address;

  return (
    <div
      ref={containerRef}
      dir={isArabic ? "rtl" : "ltr"}
      className={`relative z-20 w-full transition-all duration-500 ease-out ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
      style={{ transitionDelay: "2050ms" }}
    >
      {isOpen && (
        <div className="absolute bottom-full z-50 mb-2 w-full rounded-xl border border-white/10 bg-[#131B2B] p-1.5 shadow-2xl backdrop-blur-md">
          <div className="mb-1 border-b border-white/5 px-2 py-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7BA9E6]">
              {isArabic ? "اختر الموقع" : "Choose Location"}
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
                  className={`flex w-full items-center justify-between rounded-lg p-2.5 transition ${
                    isArabic ? "text-right" : "text-left"
                  } ${
                    isSelected
                      ? "bg-[#6993CF]/10 text-[#8BB8EF]"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold leading-snug">
                      {name(b)}
                    </p>
                    <p className="mt-0.5 truncate text-[11px] text-slate-400">
                      {address(b)}
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

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={`w-full rounded-2xl border border-white/10 bg-[#0F1724]/85 p-4 shadow-2xl backdrop-blur-xl transition hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6993CF]/50 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#6993CF]/20 bg-[#6993CF]/10 text-[#7BA9E6] transition-all duration-400 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: "2100ms" }}
            >
              <MapPin size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <span
                className={`block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7BA9E6] transition-all duration-400 ease-out ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: "2150ms" }}
              >
                {isArabic ? "اختر الفرع" : "SELECT BRANCH"}
              </span>
              <p
                className={`mt-0.5 truncate text-sm font-semibold leading-snug text-white transition-all duration-400 ease-out ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: "2300ms" }}
              >
                {name(selectedBranch)}
              </p>
              <p
                className={`mt-0.5 truncate text-xs text-slate-400 transition-all duration-400 ease-out ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: "2450ms" }}
              >
                {address(selectedBranch)}
              </p>
            </div>
          </div>
          <ChevronDown
            size={18}
            className={`shrink-0 text-slate-400 transition-all duration-400 ease-out ${
              isOpen ? "rotate-180 text-white" : ""
            } ${mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
            style={{ transitionDelay: "2600ms" }}
          />
        </div>
      </button>
    </div>
  );
}
