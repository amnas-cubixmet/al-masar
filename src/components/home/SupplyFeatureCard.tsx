"use client";

import type { LucideIcon } from "lucide-react";

interface SupplyFeatureCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function SupplyFeatureCard({
  number,
  title,
  description,
  icon: Icon,
}: SupplyFeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151E2D] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6993CF]/40 hover:bg-[#182235]">
      {/* Icon & Subtle Number */}
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#8BB8EF]">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-[10px] font-semibold tracking-[0.14em] text-slate-600">
          {number}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="mt-5 text-base font-semibold text-white sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        {description}
      </p>

      {/* Decorative Bottom Accent Line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#6993CF]/50 to-transparent" />
    </div>
  );
}
