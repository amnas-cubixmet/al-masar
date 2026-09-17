"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import HeaderSearch from "@/components/search/HeaderSearch";
import MobileSearch from "@/components/search/MobileSearch";
import LanguageSelector from "@/components/language/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import { useBranch } from "@/context/BranchContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { isArabic } = useLanguage();
  const { branch } = useBranch();

  const quoteHref = branch.whatsapp
    ? `https://wa.me/${branch.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
        isArabic
          ? "مرحباً، أود الحصول على عرض سعر من شركة المسار الأصفر."
          : "Hello, I would like to request a quote from AL MASAR YELLOW."
      )}`
    : "/contact";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B111C]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Mobile Brand (Full text visible) */}
        <Link href="/" className="flex min-w-0 flex-col leading-tight" aria-label="AL MASAR YELLOW Home">
          <div className="min-w-0">
            <div className="text-sm font-bold text-white">
              AL MASAR YELLOW
            </div>
            <div className="text-[10px] text-slate-400">
              {isArabic ? "مواد كهربائية" : "Electrical Materials"}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Desktop Header Search Input & Dropdown */}
        <HeaderSearch />

        {/* Header Action Controls */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <LanguageSelector />
          </div>

          {/* Mobile Search Toggle Button */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#131B2B] text-slate-300 transition hover:bg-[#182235] hover:text-white lg:hidden"
            type="button"
            aria-label={isArabic ? "البحث في المنتجات" : "Search products"}
            onClick={() => setMobileSearchOpen((prev) => !prev)}
          >
            <Search size={18} />
          </button>

          <a
            href={quoteHref}
            target={branch.whatsapp ? "_blank" : "_self"}
            rel={branch.whatsapp ? "noopener noreferrer" : undefined}
            className="
              hidden h-10 items-center justify-center
              rounded-xl bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#53A6DC]
              px-4 text-sm font-semibold text-white
              transition hover:brightness-110
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6993CF]
              sm:inline-flex
            "
          >
            {isArabic ? "طلب عرض" : "Get a Quote"}
          </a>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#131B2B] text-slate-300 transition hover:bg-[#182235] hover:text-white lg:hidden"
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

      {/* Mobile Expanding Search Bar */}
      <MobileSearch
        open={mobileSearchOpen}
        onClose={() => setMobileSearchOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenSearch={() => setMobileSearchOpen(true)}
      />
    </header>
  );
}
