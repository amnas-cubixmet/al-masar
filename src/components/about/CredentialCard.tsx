"use client";

import type { LucideIcon } from "lucide-react";

interface CredentialCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

export default function CredentialCard({
  label,
  value,
  icon: Icon,
}: CredentialCardProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#151E2D] p-5 sm:p-6 transition duration-300 hover:border-[#6993CF]/30">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6993CF]/10 text-[#8BB8EF]">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 break-all text-base font-semibold text-white sm:text-lg">
        {value}
      </p>
    </div>
  );
}
