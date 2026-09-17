"use client";

import Link from "next/link";
import { ArrowUpRight, MessageSquare } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#0D1320]">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#172337] via-[#111B2A] to-[#0D1320] p-8 sm:p-12 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6993CF]">
              GET IN TOUCH
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Need product or branch assistance?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Contact AL MASAR YELLOW for product availability, branch information and enquiries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#53A6DC] px-5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <span>View Products</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <MessageSquare className="h-4 w-4 text-[#6993CF]" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
