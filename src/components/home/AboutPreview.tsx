"use client";

import Link from "next/link";
import { ArrowUpRight, BadgeCheck, ReceiptText, Boxes } from "lucide-react";
import CompanyStatCard from "@/components/home/CompanyStatCard";
import { company } from "@/data/company";

export default function AboutPreview() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#0D1320]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-3 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        {/* Left Side Copy */}
        <div>
          <div className="mb-4 h-px w-10 bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#6993CF]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6993CF]">
            ABOUT AL MASAR
          </span>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Electrical materials, organized around how customers actually buy.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            AL MASAR YELLOW Company is presented here through a clean product catalogue, branch-based contact flow and direct access to company information.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:border-[#6993CF]/40 hover:bg-white/10"
          >
            <span>Company Profile</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Right Side Credentials / Stats */}
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <CompanyStatCard
            label="NATIONAL NUMBER"
            value={company.nationalNumber}
            icon={BadgeCheck}
          />
          <CompanyStatCard
            label="VAT REGISTRATION"
            value={company.vatNumber}
            icon={ReceiptText}
          />
          <CompanyStatCard
            label="CATALOGUE"
            value={`${company.totalProductFamilies} Product Families (${company.totalProductVariants} Variants)`}
            icon={Boxes}
          />
        </div>
      </div>
    </section>
  );
}
