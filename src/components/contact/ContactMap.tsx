"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Branch } from "@/types/branch";

interface ContactMapProps {
  branch?: Branch;
}

export default function ContactMap({ branch }: ContactMapProps) {
  const { isArabic } = useLanguage();


  return (
    <div className="contact-map-container mt-8 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0D1727] sm:mt-12 sm:rounded-[20px] sm:shadow-2xl">
      <div className="flex items-center justify-between gap-3 p-3 sm:p-4">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6EA8FF]">
          {isArabic ? "موقع الخريطة الرئيسي - الرياض" : "Main Location Map – Riyadh"}
        </span>
        <span className="text-[10px] sm:text-xs text-[#AAB4C3]">
          {isArabic ? "سوق غابي الكهربائي" : "Ghurabi Electrical Market"}
        </span>
      </div>
      <div className="relative h-[220px] w-full sm:h-[300px] md:h-[420px]">
        <iframe
          title="AL MASAR Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.4385!2d46.7224731!3d24.6461506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM4JzQ2LjIiTiA0NsKwNDMnMjAuOSJF!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
