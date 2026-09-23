"use client";

import Link from "next/link";
import { ArrowUpRight, BadgeCheck, ReceiptText, Boxes } from "lucide-react";
import CompanyStatCard from "@/components/home/CompanyStatCard";
import { company } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function AboutPreview() {
  const { language } = useLanguage();
  const t = translations[language].aboutPreview;

  return (
    <section data-section="about-preview" className="py-10 sm:py-16 lg:py-24 bg-[#07111F] text-white">
      <div className="mx-auto grid w-full max-w-[1680px] gap-7 px-5 sm:gap-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-[7vw]">
        {/* Left Side Copy */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[12px] sm:tracking-[0.24em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
            {t.eyebrow}
          </span>
          <h2 className="mt-2 max-w-2xl text-[28px] font-extrabold leading-[1.12] tracking-tight text-white sm:mt-3 sm:text-[40px] lg:text-[50px]">
            {t.headline}
          </h2>
          <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-[#AAB4C3] sm:mt-4 sm:text-base">
            {t.description}
          </p>
          <Link
            href="/about"
            className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg sm:mt-6 sm:h-12 sm:rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-6 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
          >
            <span>{t.btn}</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Right Side Credentials / Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1">
          <div className="company-stat-card">
            <CompanyStatCard
              label={t.nationalNumber}
              value={company.nationalNumber}
              icon={BadgeCheck}
            />
          </div>
          <div className="company-stat-card">
            <CompanyStatCard
              label={t.vatRegistration}
              value={company.vatNumber}
              icon={ReceiptText}
            />
          </div>
          <div className="company-stat-card col-span-2 sm:col-span-1">   <CompanyStatCard
              label={t.catalogueLabel}
              value={`${company.totalProductFamilies} Product Families (${company.totalProductVariants} Variants)`}
              icon={Boxes}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

