"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import type { Branch } from "@/types/branch";
import { useLanguage } from "@/context/LanguageContext";
import { normalizePhone, whatsappHref } from "@/lib/phone";
import { cn } from "@/lib/cn";

interface BranchCardProps {
  branch: Branch;
  isSelected?: boolean;
  onSelect?: (branch: Branch) => void;
}

export default function BranchCard({ branch, isSelected = false, onSelect }: BranchCardProps) {
  const { isArabic } = useLanguage();
  const isMain = branch.id === "main-batha";
  const name = isArabic && branch.nameAr ? branch.nameAr : branch.name;
  const label = isArabic
    ? branch.labelAr || branch.cityAr || branch.label || branch.city
    : branch.label || branch.city;
  const address = isArabic && branch.addressAr ? branch.addressAr : branch.address;

  return (
    <article
      dir={isArabic ? "rtl" : "ltr"}
      onClick={() => onSelect?.(branch)}
      className={cn(
        "flex cursor-pointer flex-col justify-between rounded-xl border border-white/10 bg-[#151E2D] p-3.5 transition hover:border-[#6993CF]/40 hover:bg-[#182235] sm:rounded-2xl sm:p-5",
        isSelected && "border-[#8A5CC7] bg-[#182235] ring-1 ring-[#8A5CC7]"
      )}
    >
      <div>
        <span
          className={cn(
            "inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold",
            isMain ? "bg-[#B6519F]/10 text-[#D68AC8]" : "bg-[#6993CF]/10 text-[#8BB8EF]"
          )}
        >
          {label}
        </span>
        <h3 className="mt-2.5 text-[15px] font-semibold text-white sm:mt-3 sm:text-lg">{name}</h3>
        <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-slate-400 sm:text-sm">{address}</p>
        <div className="mt-2.5 flex flex-wrap gap-1.5 text-[10px] font-medium text-slate-300 sm:mt-3 sm:gap-2 sm:text-xs" dir="ltr">
          {branch.phones.map((phone) => (
            <span key={phone} className="rounded bg-white/5 px-2 py-0.5">
              {phone}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-2.5 sm:mt-5 sm:gap-2 sm:border-t sm:border-white/10 sm:pt-3">
        <a
          href={`tel:${normalizePhone(branch.phones[0])}`}
          aria-label={isArabic ? `اتصل بـ ${name}` : `Call ${name}`}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex min-h-[34px] items-center gap-1.5 rounded-lg border border-white/10 bg-[#1B2638] px-2.5 text-[9px] font-medium text-white transition hover:bg-white/10 sm:min-h-[40px] sm:px-3 sm:text-xs"
        >
          <Phone size={14} className="text-[#6993CF]" /> {isArabic ? "اتصال" : "Call"}
        </a>
        {branch.whatsapp ? (
          <a
            href={whatsappHref(branch.whatsapp)}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex min-h-[34px] items-center gap-1.5 rounded-lg bg-[#22C55E] px-2.5 text-[9px] font-semibold text-white transition hover:brightness-110 sm:min-h-[40px] sm:px-3 sm:text-xs"
          >
            <MessageCircle size={14} /> {isArabic ? "واتساب" : "WhatsApp"}
          </a>
        ) : null}
        <a
          href={branch.mapUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex min-h-[34px] items-center gap-1.5 rounded-lg border border-[#6993CF]/40 px-2.5 text-[9px] font-medium text-[#8BB8EF] transition hover:bg-[#6993CF]/10 sm:min-h-[40px] sm:px-3 sm:text-xs"
        >
          <MapPin size={14} /> {isArabic ? "الاتجاهات" : "Directions"}
        </a>
      </div>
    </article>
  );
}
