"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Footer() {
  const { language, isArabic } = useLanguage();
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-footer-block bg-[#050B14] py-8 text-[#AAB4C3] border-t border-white/10 relative">
      <div className="mx-auto w-full max-w-[1680px] px-6 sm:px-10 lg:px-[7vw]">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="group relative inline-flex w-fit shrink-0 items-center"
              aria-label="AL MASAR Home"
            >
              <span
                className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#6EA8FF]/20 via-[#8A63E8]/15 to-[#C45BCB]/20 blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <img
                src="/logo/logo.png"
                alt="AL MASAR"
                width={200}
                height={70}
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/logo/al-masar-logo.jpeg";
                }}
                className="h-11 w-auto max-w-[180px] object-contain drop-shadow-[0_0_14px_rgba(110,168,255,0.22)] transition duration-300 group-hover:brightness-110 sm:h-12 sm:max-w-[200px]"
              />
            </Link>

            <span className="h-8 w-px shrink-0 bg-white/15" aria-hidden="true" />

            <div className="min-w-0">
              <div className="text-[12px] font-extrabold tracking-[0.08em] text-white sm:text-[13px]">
                AL MASAR YELLOW
              </div>
              <div className="mt-1 text-[10px] font-medium tracking-[0.06em] text-[#AAB4C3] sm:text-[11px]">
                {isArabic ? "المواد الكهربائية" : "Electrical Materials"}
              </div>
              <p className="mt-1.5 hidden text-[10px] text-[#778397] md:block">
                {isArabic
                  ? "تجهيز وتوريد كل مشروع في جميع أنحاء المملكة العربية السعودية"
                  : "Powering Every Connection Across Saudi Arabia"}
              </p>
            </div>
          </div>

          <div className="text-xs text-[#778397]">
            © {currentYear} AL MASAR. {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}

