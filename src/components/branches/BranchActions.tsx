"use client";

import { ExternalLink, MessageCircle, Phone } from "lucide-react";
import type { Branch } from "@/types/branch";
import { useLanguage } from "@/context/LanguageContext";
import { normalizePhone, whatsappHref } from "@/lib/phone";

export default function BranchActions({ branch }: { branch: Branch }) {
  const { isArabic } = useLanguage();
  const name = isArabic && branch.nameAr ? branch.nameAr : branch.name;

  return (
    <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5">
      {branch.phones.map((phone, idx) => (
        <a
          key={phone}
          href={`tel:${normalizePhone(phone)}`}
          aria-label={isArabic ? `اتصل بـ ${name} ${phone}` : `Call ${name} ${phone}`}
          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-white/10 bg-[#1B2638] px-3 text-[12px] font-medium text-white transition hover:bg-white/10 sm:min-h-[44px] sm:rounded-xl sm:px-4 sm:text-sm"
        >
          <Phone size={16} className="text-[#6993CF]" />
          <span>
            {isArabic ? "اتصال" : "Call"} {branch.phones.length > 1 ? `#${idx + 1}` : ""} ({phone})
          </span>
        </a>
      ))}

      {branch.whatsapp ? (
        <a
          href={whatsappHref(
            branch.whatsapp,
            isArabic
              ? `مرحباً شركة المسار، أتواصل بخصوص ${name}.`
              : `Hello AL MASAR, I am contacting ${name}.`
          )}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#22C55E] px-3 text-[12px] font-semibold text-white transition hover:brightness-110 sm:min-h-[44px] sm:rounded-xl sm:px-4 sm:text-sm"
        >
          <MessageCircle size={16} /> {isArabic ? "واتساب" : "WhatsApp"}
        </a>
      ) : null}

      <a
        href={branch.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#6993CF]/40 px-3 text-[12px] font-medium text-[#8BB8EF] transition hover:bg-[#6993CF]/10 sm:min-h-[44px] sm:rounded-xl sm:px-4 sm:text-sm"
      >
        <span>{isArabic ? "الحصول على الاتجاهات" : "Get Directions"}</span>
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
