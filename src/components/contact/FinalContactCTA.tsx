"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Send, MessageCircle } from "lucide-react";
import type { Branch } from "@/types/branch";
import { whatsappHref } from "@/lib/phone";

interface FinalContactCTAProps {
  branches: Branch[];
}

export default function FinalContactCTA({ branches }: FinalContactCTAProps) {
  const { isArabic } = useLanguage();
  const mainBranch = branches[0];

  return (
    <div className="final-cta-block relative mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[#0B1526] via-[#0D1727] to-[#142033] p-5 sm:mt-16 sm:rounded-3xl sm:p-10 sm:shadow-2xl">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#8A63E8]/10 blur-[90px]" />

      <div className="relative flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] sm:text-[11px] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
            {isArabic ? "جاهزون لمساعدتك" : "LET'S WORK TOGETHER"}
          </span>
          <h2 className="mt-1.5 text-[24px] font-black leading-[1.1] text-white sm:mt-2 sm:text-3xl lg:text-4xl">
            {isArabic ? "هل لديك مشروع يدور في ذهنك؟" : "Have a Project in Mind?"}
          </h2>
          <p className="mt-2 max-w-xl text-[12px] leading-relaxed text-[#AAB4C3] sm:text-sm">
            {isArabic
              ? "أرسل لنا متطلبات المواد الكهربائية الخاصة بمشروعك وسيقوم فريق الهندسة والمبيعات بالرد عليك فوراً."
              : "Send us your electrical material requirements and our sales engineering team will get back to you with a comprehensive quote."}
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:items-center sm:gap-3.5">
          <a
            href="#contact-form-section"
            className="inline-flex h-10 w-full min-h-[40px] sm:h-12 sm:w-auto sm:min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-3 text-[10px] sm:px-7 sm:text-sm font-bold text-white shadow-lg shadow-[#8A63E8]/20 transition hover:brightness-110"
          >
            <span>{isArabic ? "طلب عرض سعر ←" : "Request a Quote  "}</span>
            <Send className="h-4 w-4" />
          </a>

          <a
            href={whatsappHref(
              mainBranch.whatsapp || mainBranch.phones[0],
              isArabic
                ? "مرحباً، أود إرسال متطلبات مشروع للحصول على تسعيرة من شركة المسار."
                : "Hello AL MASAR, I would like to send my project requirements for a quote."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-full min-h-[40px] sm:h-12 sm:w-auto sm:min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-[10px] sm:px-7 sm:text-sm font-bold text-white transition hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4 text-[#6EA8FF]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
