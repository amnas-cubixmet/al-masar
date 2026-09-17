"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { NAV_ITEMS } from "./DesktopNav";
import { cn } from "@/lib/cn";

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
  onOpenSearch?: () => void;
}) {
  const pathname = usePathname();
  const { language, setLanguage, isArabic } = useLanguage();

  if (!open) return null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div
      className="fixed inset-x-0 top-16 z-50 flex h-[80dvh] flex-col overflow-y-auto border-t border-white/10 bg-[#0D1320] shadow-2xl lg:hidden"
      role="dialog"
      aria-label="Mobile navigation menu"
    >
      <nav className="flex flex-col" aria-label="Mobile menu links">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex w-full items-center border-b border-white/5 px-4 py-4 text-base font-medium text-slate-300 transition hover:bg-white/5 hover:text-white",
                active && "font-semibold text-white"
              )}
              onClick={onClose}
            >
              <span className="flex-1">{isArabic ? item.ar : item.en}</span>
              {active && (
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#6993CF]" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/10 p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {isArabic ? "اللغة" : "Language"}
        </p>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={cn(
              "flex h-11 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition",
              language === "en"
                ? "border-[#6993CF]/30 bg-[#6993CF]/10 text-[#8BB8EF]"
                : "border-white/10 bg-[#131B2B] text-slate-300 hover:bg-white/5 hover:text-white"
            )}
          >
            English
          </button>

          <button
            type="button"
            onClick={() => setLanguage("ar")}
            className={cn(
              "flex h-11 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition",
              language === "ar"
                ? "border-[#6993CF]/30 bg-[#6993CF]/10 text-[#8BB8EF]"
                : "border-white/10 bg-[#131B2B] text-slate-300 hover:bg-white/5 hover:text-white"
            )}
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}
