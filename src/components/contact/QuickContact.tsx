"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Branch } from "@/types/branch";
import { normalizePhone, whatsappHref } from "@/lib/phone";

interface QuickContactProps {
  branches: Branch[];
}

export default function QuickContact({ branches }: QuickContactProps) {
  const { isArabic } = useLanguage();
  const mainBranch = branches[0];
  const primaryPhone = mainBranch.phones[0];
  const mainWhatsapp = mainBranch.whatsapp || "0550183813";

  return (
    <div className="quick-contact-card mt-5 rounded-xl border border-white/[0.08] bg-[#0D1727] p-4 transition-transform duration-300 sm:mt-8 sm:rounded-2xl sm:p-6 sm:shadow-lg sm:hover:-translate-y-1">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-[15px] font-bold text-white sm:text-base">
            {isArabic ? "هل تحتاج لرد أسرع؟" : "Need a Faster Response?"}
          </h3>
          <p className="mt-1 text-[11px] leading-relaxed text-[#AAB4C3] sm:text-xs">
            {isArabic
              ? "تحدث مباشرة مع مهندسي المبيعات لدينا عبر الهاتف أو الواتساب."
              : "Connect directly with our sales engineers via phone or WhatsApp."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
          <a
            href={whatsappHref(
              mainWhatsapp,
              isArabic
                ? "مرحباً، أرغب في استفسار سريع عن توفر المواد الكهربائية."
                : "Hello AL MASAR, I need a quick response regarding electrical products."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg sm:h-11 sm:justify-start sm:gap-2 sm:rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-3 text-[10px] sm:px-5 sm:text-xs font-bold text-white shadow-lg transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{isArabic ? "المحادثة عبر الواتساب ←" : "Chat on WhatsApp →"}</span>
          </a>

          <a
            href={`tel:${normalizePhone(primaryPhone)}`}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg sm:h-11 sm:justify-start sm:gap-2 sm:rounded-xl border border-white/10 bg-white/5 px-3 text-[10px] sm:px-5 sm:text-xs font-bold text-white transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4 text-[#6EA8FF]" />
            <span>{isArabic ? "اتصل بنا ←" : "Call Us →"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
