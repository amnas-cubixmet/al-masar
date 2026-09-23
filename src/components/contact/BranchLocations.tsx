"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import type { Branch } from "@/types/branch";
import { normalizePhone, whatsappHref } from "@/lib/phone";

interface BranchLocationsProps {
  branches: Branch[];
}

export default function BranchLocations({ branches }: BranchLocationsProps) {
  const { isArabic } = useLanguage();

  return (
    <div className="mt-10 pt-8 sm:mt-16 sm:pt-12">
      <div className="branch-section-title mb-5 sm:mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] sm:text-[11px] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
          {isArabic ? "فروعنا بالمملكة" : "OUR LOCATIONS"}
        </span>
        <h2 className="mt-1.5 text-[24px] font-black text-white sm:mt-2 sm:text-3xl lg:text-4xl">
          {isArabic ? "فروع شركة المسار" : "Our Locations"}
        </h2>
        <p className="mt-1.5 max-w-2xl text-[12px] leading-relaxed text-[#AAB4C3] sm:mt-2 sm:text-sm">
          {isArabic
            ? "تفضل بزيارة فروعنا ومستودعاتنا في الرياض وجدة لتلبية احتياجات مشروعك."
            : "Visit or contact any of our branch locations in Riyadh and Jeddah for your project needs."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {branches.map((branch) => {
          const primaryPhone = branch.phones[0];
          return (
            <div
              key={branch.id}
              className="branch-card group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0D1727] p-4 transition duration-300 hover:border-[#8A63E8]/50 hover:bg-[#142033] sm:rounded-2xl sm:p-6 sm:shadow-lg sm:hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-bold text-[#6EA8FF] border border-white/10">
                    {branch.label || branch.city}
                  </span>
                  <span className="text-xs font-semibold text-[#AAB4C3]">
                    {branch.city}
                  </span>
                </div>

                <h3 className="mt-2.5 text-[16px] font-bold sm:mt-3 sm:text-lg text-white transition group-hover:text-[#6EA8FF]">
                  {branch.name}
                </h3>

                <div className="mt-3 sm:mt-4 flex items-start gap-2.5 text-xs text-[#AAB4C3]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#6EA8FF]" />
                  <p className="leading-5">{branch.address}</p>
                </div>

                <div className="mt-3 sm:mt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#AAB4C3]/80">
                    {isArabic ? "أرقام التواصل:" : "Phones:"}
                  </span>
                  <div className="mt-1 flex flex-col gap-1">
                    {branch.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${normalizePhone(phone)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white transition hover:text-[#6EA8FF] dir-ltr"
                      >
                        <Phone className="h-3.5 w-3.5 text-[#6EA8FF]" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 sm:mt-6 sm:border-t sm:border-white/5 sm:pt-4">
                <a
                  href={`tel:${normalizePhone(primaryPhone)}`}
                  className="inline-flex h-8 items-center sm:h-9 gap-1.5 rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-3 text-[10px] sm:px-3.5 sm:text-xs font-bold text-white transition hover:brightness-110"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{isArabic ? "اتصال" : "Call"}</span>
                </a>

                {branch.whatsapp ? (
                  <a
                    href={whatsappHref(
                      branch.whatsapp,
                      isArabic
                        ? `مرحباً فرع ${branch.name}، لدي استفسار بخصوص مشروع.`
                        : `Hello AL MASAR ${branch.name}, I have an enquiry.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 items-center sm:h-9 gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 text-[10px] sm:px-3.5 sm:text-xs font-bold text-white transition hover:bg-white/10"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-[#6EA8FF]" />
                    <span>WhatsApp</span>
                  </a>
                ) : null}

                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 items-center sm:h-9 gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 text-[10px] sm:px-3.5 sm:text-xs font-bold text-[#AAB4C3] transition hover:border-[#6EA8FF]/40 hover:text-white"
                >
                  <Navigation className="h-3.5 w-3.5 text-[#6EA8FF]" />
                  <span>{isArabic ? "الموقع" : "Directions"}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
