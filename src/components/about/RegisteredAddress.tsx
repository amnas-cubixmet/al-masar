"use client";

import { MapPin, Navigation } from "lucide-react";
import { company } from "@/data/company";

export default function RegisteredAddress() {
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(company.registeredAddress)}`;

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#101826]">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#111A29] p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#6993CF]/10 text-[#8BB8EF]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  REGISTERED ADDRESS
                </span>
                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Riyadh, Saudi Arabia
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                  {company.registeredAddress}
                </p>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:border-[#6993CF]/40 hover:bg-white/10"
            >
              <Navigation className="h-4 w-4 text-[#6993CF]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
