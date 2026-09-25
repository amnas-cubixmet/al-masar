"use client";

import type { Branch } from "@/types/branch";
import { useLanguage } from "@/context/LanguageContext";
import BranchActions from "./BranchActions";
import BranchMap from "./BranchMap";
import { cn } from "@/lib/cn";

export default function SelectedBranchCard({ branch }: { branch: Branch }) {
  const { isArabic } = useLanguage();
  const isMain = branch.id === "main-batha";
  const name = isArabic && branch.nameAr ? branch.nameAr : branch.name;
  const label = isArabic
    ? branch.labelAr || branch.cityAr || "الفرع المحدد"
    : branch.label || "Selected Branch";
  const address = isArabic && branch.addressAr ? branch.addressAr : branch.address;

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="mt-4 grid overflow-hidden rounded-xl border border-white/10 bg-[#151E2D] sm:mt-8 sm:rounded-2xl lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="flex flex-col justify-between p-3.5 sm:p-6 lg:p-8">
        <div>
          <span
            className={cn(
              "inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold sm:px-3 sm:text-xs",
              isMain ? "bg-[#B6519F]/10 text-[#D68AC8]" : "bg-[#8A5CC7]/10 text-[#BFA8F5]"
            )}
          >
            {label}
          </span>

          <h3 className="mt-2.5 text-[16px] font-semibold leading-snug text-white sm:mt-4 sm:text-2xl">{name}</h3>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-400 sm:mt-2 sm:text-sm">{address}</p>

          <div className="mt-3 flex flex-col gap-1 text-[11px] text-slate-300 sm:mt-4 sm:text-xs">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              {isArabic ? "أرقام التواصل" : "Contact Phones"}
            </span>
            <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-200" dir="ltr">
              {branch.phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`} className="hover:text-white hover:underline">
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>

        <BranchActions branch={branch} />
      </div>

      <BranchMap branch={branch} />
    </div>
  );
}
