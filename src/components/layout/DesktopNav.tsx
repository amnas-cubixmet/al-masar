"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { cn } from "@/lib/cn";

export default function DesktopNav() {
  const pathname = usePathname();
  const { language, isArabic } = useLanguage();
  const t = translations[language].nav;

  const navItems = [
    { href: "/", label: t.home },
    { href: "/about", label: t.about },
    { href: "/products", label: t.products },
    { href: "/contact", label: t.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="hidden items-center gap-7 xl:gap-8 lg:flex" aria-label="Primary navigation">
      {navItems.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative text-[15px] font-medium transition-all hover:text-white py-1 tracking-wide",
              active
                ? "bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent font-semibold"
                : "text-[#AAB4C3]"
            )}
          >
            {item.label}
            {active && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2.5px] w-6 rounded-full bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

