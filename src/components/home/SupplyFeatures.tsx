"use client";

import { Boxes, Search, MapPin, Send } from "lucide-react";
import SupplyFeatureCard from "@/components/home/SupplyFeatureCard";

const features = [
  {
    number: "01",
    title: "Broad catalogue",
    description: "Organized product categories with detail pages and specifications.",
    icon: Boxes,
  },
  {
    number: "02",
    title: "Fast discovery",
    description: "Global search plus category filtering across the product library.",
    icon: Search,
  },
  {
    number: "03",
    title: "Multiple branches",
    description: "Switch branch details, contact numbers and maps from one selector.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Quick enquiry",
    description: "Call, WhatsApp and location actions stay close to the customer journey.",
    icon: Send,
  },
];

export default function SupplyFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#101826] py-14 sm:py-16 lg:py-20">
      {/* Animated Full-Width Edge-to-Edge Top Energy Line */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden pointer-events-none">
        <div className="h-full w-[35%] bg-gradient-to-r from-transparent via-[#8A5CC7] via-[#6993CF] to-transparent opacity-75 drop-shadow-[0_0_8px_rgba(105,147,207,0.45)] animate-section-line" />
      </div>

      {/* Section Content */}
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B26BFF]">
            DESIGNED AROUND SUPPLY
          </span>
          <h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl">
            A simpler path from product to enquiry
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Everything customers need to find the right product, branch and contact path quickly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {features.map((feature) => (
            <SupplyFeatureCard
              key={feature.number}
              number={feature.number}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
