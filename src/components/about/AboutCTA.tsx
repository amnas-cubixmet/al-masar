"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutCTA() {
  const { isArabic } = useLanguage();

  return (
    <section data-section="about-cta" className="w-full bg-[#07111F] py-10 text-white sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        <div className="about-cta-card flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-[#101A2B] p-5 sm:gap-8 sm:rounded-3xl sm:p-10 md:flex-row md:items-center lg:p-14 sm:shadow-2xl sm:shadow-black/40">
          
          <div className="about-cta-content">
            <p className="about-cta-eyebrow mb-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-3 sm:text-[12px] sm:tracking-[0.24em]">
              {isArabic ? "دعنا نعمل معاً" : "LET'S WORK TOGETHER"}
            </p>
            <h2 className="about-cta-heading text-[25px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[38px]">
              {isArabic ? "جهّز مشروعك القادم مع شركة المسار" : "Power Your Next Project with AL MASAR"}
            </h2>
            <p className="about-cta-desc mt-2 max-w-xl text-[13px] leading-relaxed text-[#AAB4C3] sm:mt-3 sm:text-base">
              {isArabic
                ? "تواصل مع فريقنا الفني لمعرفة توفر المواد والمنتجات الكهربائية واحتياجات التوريد لمشروعك."
                : "Talk to our team about electrical materials, product availability and project requirements."}
            </p>
          </div>

          <div className="about-cta-btns flex w-full flex-wrap items-center gap-2.5 sm:w-auto sm:gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r sm:h-[54px] sm:flex-none sm:rounded-xl from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] hover:brightness-110 px-7 text-[15px] font-bold text-white shadow-lg shadow-[#8A63E8]/25 transition-transform group"
            >
              <span>{isArabic ? "طلب عرض سعر" : "Request a Quote"}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 text-[13px] font-semibold text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/10 sm:h-[54px] sm:flex-none sm:rounded-xl sm:px-6 sm:text-[15px]"
            >
              <span>{isArabic ? "تواصل معنا" : "Contact Us"}</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
