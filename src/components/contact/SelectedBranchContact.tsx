"use client";

import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import type { Branch } from "@/types/branch";
import { normalizePhone, whatsappHref } from "@/lib/phone";
import ContactMap from "./ContactMap";

interface SelectedBranchContactProps {
  branch: Branch;
}

export default function SelectedBranchContact({ branch }: SelectedBranchContactProps) {
  const primaryPhone = branch.phones[0];

  return (
    <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#151E2D] lg:grid-cols-[0.9fr_1.1fr]">
      {/* Left Contact Information Content */}
      <div className="flex flex-col justify-between p-6 sm:p-8">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6993CF]">
            {branch.label || "BRANCH DETAILS"}
          </span>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            {branch.name}
          </h2>
          <p className="mt-1 text-xs font-semibold text-slate-400">
            {branch.city}, Saudi Arabia
          </p>

          <div className="mt-6 flex items-start gap-3 text-sm text-slate-300">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#6993CF]" />
            <p className="leading-6">{branch.address}</p>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Direct Phone Lines
            </h4>
            <div className="mt-2.5 flex flex-col gap-2">
              {branch.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${normalizePhone(phone)}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#6993CF]"
                >
                  <Phone className="h-4 w-4 text-[#6993CF]" />
                  <span>{phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Call & Direction Actions */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`tel:${normalizePhone(primaryPhone)}`}
            className="inline-flex h-11 min-h-[44px] items-center gap-2 rounded-xl bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#53A6DC] px-5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" />
            <span>Call Branch</span>
          </a>

          {branch.whatsapp ? (
            <a
              href={whatsappHref(branch.whatsapp, `Hello AL MASAR ${branch.name}, I have an enquiry.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 min-h-[44px] items-center gap-2 rounded-xl bg-[#22C55E] px-5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          ) : null}

          <a
            href={branch.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:border-[#6993CF]/40 hover:bg-white/10"
          >
            <Navigation className="h-4 w-4 text-[#6993CF]" />
            <span>Directions</span>
          </a>
        </div>
      </div>

      {/* Right Side Map */}
      <ContactMap branch={branch} />
    </div>
  );
}
