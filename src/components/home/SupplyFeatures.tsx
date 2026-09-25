"use client";

import { Boxes, ShieldCheck, MapPin, Zap } from "lucide-react";
import SupplyFeatureCard from "@/components/home/SupplyFeatureCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function SupplyFeatures() {
  const { language } = useLanguage();
  const t = translations[language].whyUs;

  const icons = [Boxes, ShieldCheck, MapPin, Zap];

  return (
    <section data-section="why-us" className="relative touch-pan-y overflow-x-clip overflow-y-visible bg-[#07111F] py-10 sm:py-14 lg:py-24 text-white">
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        {/* Section Header */}
        <div className="mb-5 sm:mb-10 lg:mb-14">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-3 sm:text-[12px] sm:tracking-[0.24em]">
            {t.eyebrow}
          </p>
          <h2 className="text-[27px] sm:text-[42px] lg:text-[52px] font-extrabold text-white leading-[1.08] tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-2 max-w-2xl text-[13px] leading-[1.6] text-[#AAB4C3] sm:mt-3 sm:text-base">
            {t.description}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {t.features.map((feature, idx) => (
            <div key={feature.number} className="feature-card-item">
              <SupplyFeatureCard
                number={feature.number}
                title={feature.title}
                description={feature.desc}
                icon={icons[idx % icons.length]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

