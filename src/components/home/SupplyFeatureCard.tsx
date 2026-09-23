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
    <div className="group relative touch-pan-y overflow-hidden rounded-xl border border-white/10 bg-[#101A2B] p-3 transition-all duration-300 hover:border-[#8A63E8]/40 hover:bg-[#142033] sm:rounded-2xl sm:p-6 sm:shadow-xl sm:shadow-black/30 sm:hover:-translate-y-1">
      {/* Icon & Number Header */}
      <div className="mb-2.5 flex items-center justify-between sm:mb-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg sm:h-12 sm:w-12 sm:rounded-xl border border-[#8A63E8]/30 bg-gradient-to-r from-[#6EA8FF]/15 to-[#C45BCB]/15 text-[#6EA8FF] transition-colors group-hover:text-white sm:h-12 sm:w-12">
          <Icon className="h-4 w-4 stroke-[1.8] sm:h-6 sm:w-6" />
        </div>
        <span className="text-[16px] font-extrabold sm:text-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
          {number}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="mb-1 text-[13px] font-bold leading-snug text-white transition-colors group-hover:text-[#6EA8FF] sm:mb-2 sm:text-xl">
        {title}
      </h3>
      <p className="line-clamp-3 text-[10px] leading-relaxed text-[#AAB4C3] sm:line-clamp-none sm:text-sm">
        {description}
      </p>

      {/* Subtle Bottom Accent */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8A63E8]/40 to-transparent" />
    </div>
  );
}
