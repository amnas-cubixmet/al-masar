"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileSearch from "@/components/search/MobileSearch";
import LanguageSelector from "@/components/language/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import { useBranch } from "@/context/BranchContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { isArabic } = useLanguage();
  const { branch } = useBranch();

  const quoteHref = branch.whatsapp
    ? `https://wa.me/${branch.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
      isArabic
        ? "مرحباً، أود الحصول على عرض سعر من شركة المسار."
        : "Hello, I would like to request a quote from AL MASAR."
    )}`
    : "/contact";

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-[#07111F]/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group relative flex shrink-0 items-center gap-2.5 sm:gap-3"
          aria-label="AL MASAR Home"
        >
          <span
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#6EA8FF]/20 via-[#8A63E8]/15 to-[#C45BCB]/20 blur-xl opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
          <img
            src="/logo/logo.png"
            alt="AL MASAR"
            width={180}
            height={60}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = "/logo/al-masar-logo.jpeg";
            }}
            className="h-9 w-auto max-w-[150px] object-contain drop-shadow-[0_0_12px_rgba(110,168,255,0.22)] transition duration-300 group-hover:brightness-110 sm:h-10 sm:max-w-[170px]"
          />
          <span className="flex min-w-0 flex-col justify-center whitespace-nowrap leading-none">
            <span className="text-[11px] font-extrabold tracking-[0.08em] text-white sm:text-[13px] lg:text-[14px]">
              AL MASAR YELLOW
            </span>
            <span className="mt-1 text-[9px] font-medium tracking-[0.06em] text-[#AAB4C3] sm:text-[10px]">
              Electrical Materials
            </span>
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <DesktopNav />

        {/* Header Action Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:block">
            <LanguageSelector />
          </div>

          {/* Search Toggle Icon */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#AAB4C3] transition hover:bg-white/10 hover:text-white"
            type="button"
            aria-label={isArabic ? "البحث في المنتجات" : "Search products"}
            onClick={() => setSearchOpen((prev) => !prev)}
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Get a Quote Button */}
          <a
            href={quoteHref}
            target={branch.whatsapp ? "_blank" : "_self"}
            rel={branch.whatsapp ? "noopener noreferrer" : undefined}
            className="
              hidden sm:inline-flex h-[40px] items-center justify-center
              rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB]
              px-5 text-[13px] font-bold text-white
              shadow-lg shadow-[#8A63E8]/20 transition-all hover:brightness-110 hover:-translate-y-0.5
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A63E8]
            "
          >
            {isArabic ? "طلب عرض" : "GET A QUOTE"}
            <span className="ml-1.5 text-sm font-bold"> </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#AAB4C3] transition hover:bg-white/10 hover:text-white lg:hidden"
            type="button"
            aria-label={
              menuOpen
                ? isArabic
                  ? "إغلاق القائمة"
                  : "Close menu"
                : isArabic
                  ? "فتح القائمة"
                  : "Open menu"
            }
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile / Search Modal Overlay */}
      <MobileSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Navigation Drawer */}
      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />
    </header>
  );
}

