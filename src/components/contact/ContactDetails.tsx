"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import type { Branch } from "@/types/branch";
import { normalizePhone, whatsappHref } from "@/lib/phone";

interface ContactDetailsProps {
  branches: Branch[];
}

export default function ContactDetails({ branches }: ContactDetailsProps) {
  const { isArabic } = useLanguage();
  const mainBranch = branches[0];

  const primaryPhone = mainBranch.phones[0];
  const mainWhatsapp = mainBranch.whatsapp || "0550183813";

  return (
    <div className="contact-info-block flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D1727] p-4 sm:rounded-3xl sm:p-7 sm:shadow-xl">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] sm:text-[11px] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
          {isArabic ? "تواصل مباشر" : "DIRECT CONTACT"}
        </span>
        <h2 className="mt-1.5 text-[22px] font-black text-white sm:mt-2 sm:text-3xl">
          {isArabic ? "تحدث مع فريقنا" : "Talk to Our Team"}
        </h2>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#AAB4C3] sm:mt-2 sm:text-sm">
          {isArabic
            ? "يقوم مهندسو وممثلو مبيعات المواد الكهربائية لدينا بمساعدة طلباتكم وتوريدكم فورا."
            : "Our electrical specialists and project team are ready to assist with materials, pricing and technical specs."}
        </p>

        <div className="mt-5 flex flex-col divide-y divide-white/5 sm:mt-8">
          {/* Phone Item */}
          <div className="contact-item flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl border border-white/10 bg-white/5 text-[#6EA8FF]">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0 flex-1 break-words">
              <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#AAB4C3] sm:text-[11px] sm:tracking-wider">
                {isArabic ? "الهاتف المباشر" : "Phone Call"}
              </span>
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                {mainBranch.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${normalizePhone(phone)}`}
                    className="text-[12px] font-bold text-white sm:text-sm transition hover:text-[#6EA8FF] dir-ltr inline-block"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp Item */}
          <div className="contact-item flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl border border-white/10 bg-white/5 text-[#6EA8FF]">
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
                      ? "مرحباً، أود استفسار عن توريد مواد كهربائية لشركة المسار."
                      : "Hello AL MASAR, I would like to enquire about electrical materials."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] font-bold text-white sm:text-sm transition hover:text-[#6EA8FF] dir-ltr inline-block break-all"
                >
                  +{normalizePhone(mainWhatsapp)}
                </a>
              </div>
            </div>
          </div>

          {/* Email Item */}
          <div className="contact-item flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl border border-white/10 bg-white/5 text-[#6EA8FF]">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0 flex-1 break-words">
              <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#AAB4C3] sm:text-[11px] sm:tracking-wider">
                {isArabic ? "البريد الإلكتروني" : "Email Address"}
              </span>
              <div className="mt-1">
                <a
                  href="mailto:info@almasaryellow.com"
                  className="text-[12px] font-bold text-white sm:text-sm transition hover:text-[#6EA8FF] dir-ltr inline-block break-all"
                >
                  info@almasaryellow.com
                </a>
              </div>
            </div>
          </div>

          {/* Location Item */}
          <div className="contact-item flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl border border-white/10 bg-white/5 text-[#6EA8FF]">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0 flex-1 break-words">
              <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#AAB4C3] sm:text-[11px] sm:tracking-wider">
                {isArabic ? "المقر الرئيسي" : "Main Office & Showroom"}
              </span>
              <p className="mt-1 text-[12px] font-semibold text-white sm:text-sm leading-relaxed">
                {isArabic
                  ? "سوق غابي الكهربائي، البطحاء، الرياض، المملكة العربية السعودية"
                  : "Ghurabi Electrical Market, Batha, Riyadh, Saudi Arabia"}
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="contact-item flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl border border-white/10 bg-white/5 text-[#6EA8FF]">
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
