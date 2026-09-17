"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/cn";

export const NAV_ITEMS = [
  { href: "/", en: "Home", ar: "الرئيسية" },
  { href: "/about", en: "About", ar: "من نحن" },
  { href: "/products", en: "Products", ar: "المنتجات" },
  { href: "/contact", en: "Contact", ar: "اتصل بنا" },
];

export default function DesktopNav() {
  const pathname = usePathname();
  const { isArabic } = useLanguage();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
      {NAV_ITEMS.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative text-sm font-medium text-slate-400 transition-colors hover:text-white",
              active && "text-white"
            )}
          >
            {isArabic ? item.ar : item.en}
            {active && (
              <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#6993CF]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
