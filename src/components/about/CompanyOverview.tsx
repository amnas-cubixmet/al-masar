"use client";

import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";

export default function CompanyOverview() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#101826]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-3 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Left Side */}
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B26BFF]">
            ABOUT
          </span>
          <h2 className="mt-2 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Electrical materials with a clearer digital catalogue.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            The website organizes a broad product range into searchable categories while connecting customers directly with the appropriate branch.
          </p>
        </div>

        {/* Right Side Operational Summary Panel */}
        <div className="rounded-2xl border border-white/10 bg-[#151E2D] p-6 sm:p-8">
          <h3 className="text-base font-semibold text-white sm:text-lg">
            Operational Pillars
          </h3>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6993CF]/10 text-[#8BB8EF]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Verified Specifications</h4>
                <p className="mt-0.5 text-xs text-slate-400">Accurate product codes, sizes, and technical ratings.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6993CF]/10 text-[#8BB8EF]">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Branch-Backed Supply</h4>
                <p className="mt-0.5 text-xs text-slate-400">Direct phone, WhatsApp, and location maps for fast fulfillment.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6993CF]/10 text-[#8BB8EF]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Standard Compliance</h4>
                <p className="mt-0.5 text-xs text-slate-400">Fully compliant with KSA regulatory and industrial standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
