"use client";

import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { cn } from "@/lib/cn";

export default function LanguageSelector() {
  const { language, setLanguage, isArabic } = useLanguage();
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

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
    } else if (event.key === "Enter" || event.key === " ") {
      if (!open) {
        event.preventDefault();
        setOpen(true);
      }
    }
  };

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left" onKeyDown={handleKeyDown}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={isArabic ? "اختر اللغة" : "Select language"}
        className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/10 bg-[#131B2B] px-3 text-xs font-semibold text-slate-200 transition hover:border-white/20 hover:bg-[#182235] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6993CF]/50"
      >
        <Languages size={15} className="shrink-0 text-[#6993CF]" />
        <span>{language.toUpperCase()}</span>
        <ChevronDown
          size={14}
          className={cn("shrink-0 text-slate-400 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Languages"
          className={cn(
            "absolute top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-white/10 bg-[#131B2B] p-1 shadow-2xl shadow-black/40",
            isArabic ? "left-0 right-auto" : "right-0 left-auto"
          )}
        >
          <button
            type="button"
            role="option"
            aria-selected={language === "en"}
            onClick={() => handleSelect("en")}
            className={cn(
              "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-white/5 hover:text-white",
              language === "en" ? "bg-[#6993CF]/10 text-[#8BB8EF] font-semibold" : "text-slate-300"
            )}
          >
            <span>English</span>
            {language === "en" && <Check size={14} className="text-[#8BB8EF]" />}
          </button>

          <button
            type="button"
            role="option"
            aria-selected={language === "ar"}
            onClick={() => handleSelect("ar")}
            className={cn(
              "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-white/5 hover:text-white",
              language === "ar" ? "bg-[#6993CF]/10 text-[#8BB8EF] font-semibold" : "text-slate-300"
            )}
          >
            <span>العربية</span>
            {language === "ar" && <Check size={14} className="text-[#8BB8EF]" />}
          </button>
        </div>
      )}
    </div>
  );
}
