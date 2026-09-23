"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Clock, Globe2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Branch } from "@/types/branch";
import { company } from "@/data/company";
import { normalizePhone, whatsappHref } from "@/lib/phone";

interface ContactDetailsProps {
  branches: Branch[];
}

export default function ContactDetails({ branches }: ContactDetailsProps) {
  const { isArabic } = useLanguage();
  const mainBranch = branches[0];

  const mainWhatsapp = mainBranch.whatsapp || mainBranch.phones[0];
  const mainAddress =
    isArabic && mainBranch.addressAr ? mainBranch.addressAr : mainBranch.address;

  return (
    <div className="contact-info-block flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D1727] p-4 sm:rounded-3xl sm:p-7 sm:shadow-xl">
      <div>
        <span className="bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-[10px] font-bold uppercase tracking-[0.15em] text-transparent sm:text-[11px]">
          {isArabic ? "تواصل مباشر" : "DIRECT CONTACT"}
        </span>
        <h2 className="mt-1.5 text-[22px] font-black text-white sm:mt-2 sm:text-3xl">
          {isArabic ? "تحدث مع فريقنا" : "Talk to Our Team"}
        </h2>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#AAB4C3] sm:mt-2 sm:text-sm">
          {isArabic
            ? "فريقنا جاهز لمساعدتك في المواد الكهربائية والأسعار والمواصفات الفنية."
            : "Our electrical specialists and project team are ready to assist with materials, pricing and technical specs."}
        </p>

        <div className="mt-5 flex flex-col divide-y divide-white/5 sm:mt-8">
          <div className="contact-item flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#6EA8FF] sm:h-10 sm:w-10 sm:rounded-xl">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0 flex-1 break-words">
              <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#AAB4C3] sm:text-[11px] sm:tracking-wider">
                {isArabic ? "الهاتف المباشر" : "Phone Call"}
              </span>
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1" dir="ltr">
                {mainBranch.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${normalizePhone(phone)}`}
                    className="inline-block text-[12px] font-bold text-white transition hover:text-[#6EA8FF] sm:text-sm"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-item flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#6EA8FF] sm:h-10 sm:w-10 sm:rounded-xl">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0 flex-1 break-words">
              <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#AAB4C3] sm:text-[11px] sm:tracking-wider">
                {isArabic ? "واتساب المبيعات" : "WhatsApp Sales"}
              </span>
              <div className="mt-1">
                <a
                  href={whatsappHref(
                    mainWhatsapp,
                    isArabic
                      ? "مرحباً، أود الاستفسار عن توريد مواد كهربائية من شركة المسار."
                      : "Hello AL MASAR, I would like to enquire about electrical materials."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block break-all text-[12px] font-bold text-white transition hover:text-[#6EA8FF] sm:text-sm"
                  dir="ltr"
                >
                  +{normalizePhone(mainWhatsapp)}
                </a>
              </div>
            </div>
          </div>

          <div className="contact-item flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#6EA8FF] sm:h-10 sm:w-10 sm:rounded-xl">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0 flex-1 break-words">
              <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#AAB4C3] sm:text-[11px] sm:tracking-wider">
                {isArabic ? "البريد الإلكتروني" : "Email Address"}
              </span>
              <div className="mt-1">
                <a
                  href={`mailto:${company.email}`}
                  className="inline-block break-all text-[12px] font-bold text-white transition hover:text-[#6EA8FF] sm:text-sm"
                  dir="ltr"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          <div className="contact-item flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#6EA8FF] sm:h-10 sm:w-10 sm:rounded-xl">
              <Globe2 className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0 flex-1 break-words">
              <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#AAB4C3] sm:text-[11px] sm:tracking-wider">
                {isArabic ? "الموقع الإلكتروني" : "Website"}
              </span>
              <div className="mt-1">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block break-all text-[12px] font-bold text-white transition hover:text-[#6EA8FF] sm:text-sm"
                  dir="ltr"
                >
                  www.almasarelectricals.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-item flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#6EA8FF] sm:h-10 sm:w-10 sm:rounded-xl">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0 flex-1 break-words">
              <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#AAB4C3] sm:text-[11px] sm:tracking-wider">
                {isArabic ? "المقر الرئيسي" : "Main Office & Showroom"}
              </span>
              <p className="mt-1 text-[12px] font-semibold leading-relaxed text-white sm:text-sm">
                {mainAddress}
              </p>
            </div>
          </div>

          <div className="contact-item flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#6EA8FF] sm:h-10 sm:w-10 sm:rounded-xl">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0 flex-1 break-words">
              <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#AAB4C3] sm:text-[11px] sm:tracking-wider">
                {isArabic ? "ساعات العمل" : "Business Hours"}
              </span>
              <p className="mt-1 text-[12px] font-semibold text-white sm:text-sm">
                {isArabic
                  ? "السبت - الخميس: 8:00 صباحاً - 9:00 مساءً"
                  : "Sat – Thu: 8:00 AM – 9:00 PM"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
