"use client";

import type { LucideIcon } from "lucide-react";

interface CompanyStatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

export default function CompanyStatCard({
  label,
  value,
  icon: Icon,
}: CompanyStatCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0D1727] p-4 transition duration-300 hover:border-[#8A63E8]/40 hover:bg-[#142033] sm:rounded-2xl sm:p-6 sm:shadow-lg">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl border border-white/10 bg-white/5 text-[#6EA8FF]">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <p className="mt-3 text-[9px] font-bold uppercase sm:mt-4 sm:text-[10px] tracking-[0.14em] text-[#AAB4C3]">
        {label}
      </p>
      <p className="mt-1 break-all text-[13px] font-extrabold leading-snug text-white sm:text-lg">
        {value}
      </p>
    </div>
  );
}

