"use client";

import Link from "next/link";
import { Phone, Send } from "lucide-react";
import Container from "@/components/ui/Container";
import { useBranch } from "@/context/BranchContext";
import { normalizePhone } from "@/lib/phone";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ContactCTA() {
  const { language, isArabic } = useLanguage();
  const t = translations[language].cta;
  const { branch } = useBranch();
  const phone = branch?.phones?.[0] || "0550183813";

  return (
    <section data-section="contact-cta" className="bg-[#07111F] py-10 sm:py-16 lg:py-20">
      <Container>
        <div className="cta-container flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[#0B1526] via-[#0D1727] to-[#142033] p-5 sm:gap-8 sm:rounded-3xl sm:p-10 md:flex-row md:items-center lg:p-12 sm:shadow-2xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs sm:tracking-widest bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
              {isArabic ? "طلب استفسار أو عرض سعر" : "NEED PRODUCT INFORMATION?"}
            </span>
            <h2 className="mt-1.5 text-[24px] font-black leading-[1.08] text-white sm:mt-2 sm:text-3xl lg:text-4xl">
              {t.headline}
            </h2>
            <p className="mt-2 text-[12px] leading-relaxed text-[#AAB4C3] sm:text-sm">
              {t.description}
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-2.5 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-3">
            <a
              className="inline-flex h-10 min-w-0 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-[10px] font-bold sm:h-12 sm:gap-2 sm:rounded-xl sm:px-6 sm:text-sm text-white backdrop-blur-sm transition hover:bg-white/10 dir-ltr"
              href={`tel:${normalizePhone(phone)}`}
            >
              <Phone size={17} className="text-[#6EA8FF]" /> {phone}
            </a>

            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r sm:h-12 sm:gap-2 sm:rounded-xl from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-3 text-[10px] font-bold text-white sm:px-6 sm:text-sm sm:shadow-lg transition hover:brightness-110"
            >
              <span>{t.btnRequest}</span>
              <Send className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

