"use client";

import { ShieldCheck, PackageCheck, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CategoryTrustPoints() {
  const { isArabic } = useLanguage();

  const trustItems = [
    {
      icon: ShieldCheck,
      title: isArabic ? "جودة موثوقة" : "Trusted Quality",
    },
    {
      icon: PackageCheck,
      title: isArabic ? "توريد مستمر" : "Reliable Supply",
    },
    {
      icon: Layers,
      title: isArabic ? "تشكيلة واسعة" : "Wide Selection",
    },
  ];

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6 sm:gap-6">
      {trustItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#69A7FF]/20 bg-[#69A7FF]/10 text-[#69A7FF]">
              <Icon className="h-4 w-4" />
            </div>
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
}
