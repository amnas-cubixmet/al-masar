"use client";

import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import type { Branch } from "@/types/branch";
import { normalizePhone, whatsappHref } from "@/lib/phone";

interface AllBranchesProps {
  branches: Branch[];
  onSelectBranch: (branch: Branch) => void;
}

export default function AllBranches({ branches, onSelectBranch }: AllBranchesProps) {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#0D1320]">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6993CF]">
            OUR LOCATIONS
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            All Branches
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Visit or contact any of our branch locations across Saudi Arabia.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => {
            const primaryPhone = branch.phones[0];
            return (
              <div
                key={branch.id}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#151E2D] p-6 transition duration-300 hover:border-[#6993CF]/40 hover:bg-[#182235]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6993CF]">
                      {branch.label || branch.city}
                    </span>
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-400">
                      {branch.city}
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-white transition group-hover:text-[#6993CF]">
                    {branch.name}
                  </h3>

                  <div className="mt-4 flex items-start gap-2.5 text-xs text-slate-300">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#6993CF]" />
                    <p className="leading-5">{branch.address}</p>
                  </div>

                  <div className="mt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Phones:
                    </span>
                    <div className="mt-1 flex flex-col gap-1">
                      {branch.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${normalizePhone(phone)}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#6993CF]"
                        >
                          <Phone className="h-3.5 w-3.5 text-[#6993CF]" />
                          <span>{phone}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">
                  <a
                    href={`tel:${normalizePhone(primaryPhone)}`}
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#53A6DC] px-3.5 text-xs font-semibold text-white transition hover:brightness-110"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call</span>
                  </a>

                  {branch.whatsapp ? (
                    <a
                      href={whatsappHref(branch.whatsapp, `Hello AL MASAR ${branch.name}, I have an enquiry.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#22C55E] px-3.5 text-xs font-semibold text-white transition hover:brightness-110"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  ) : null}

                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3.5 text-xs font-semibold text-white transition hover:border-[#6993CF]/40 hover:bg-white/10"
                  >
                    <Navigation className="h-3.5 w-3.5 text-[#6993CF]" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
