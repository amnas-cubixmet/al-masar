"use client";

import { MessageCircle, Navigation, Phone } from "lucide-react";
import type { Branch } from "@/types/branch";
import { normalizePhone, whatsappHref } from "@/lib/phone";

interface ContactActionsProps {
  branch: Branch;
}

export default function ContactActions({ branch }: ContactActionsProps) {
  const primaryPhone = branch.phones[0];

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {/* Call Us Card */}
      <a
        href={`tel:${normalizePhone(primaryPhone)}`}
        className="group flex items-center gap-3.5 rounded-xl border border-white/5 bg-[#111A29] p-4 transition duration-300 hover:border-[#6993CF]/40 hover:bg-[#172235]"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6993CF]/10 text-[#6993CF]">
          <Phone className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-xs font-semibold text-white">Call Us Directly</h4>
          <p className="mt-0.5 text-xs font-medium text-slate-400">{primaryPhone}</p>
        </div>
      </a>

      {/* WhatsApp Card */}
      {branch.whatsapp ? (
        <a
          href={whatsappHref(branch.whatsapp, `Hello AL MASAR ${branch.name}, I have an enquiry.`)}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3.5 rounded-xl border border-white/5 bg-[#111A29] p-4 transition duration-300 hover:border-[#22C55E]/40 hover:bg-[#172235]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22C55E]/10 text-[#22C55E]">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white">WhatsApp Chat</h4>
            <p className="mt-0.5 text-xs font-medium text-emerald-400">Fast Response</p>
          </div>
        </a>
      ) : (
        <a
          href={`tel:${normalizePhone(branch.phones[1] || primaryPhone)}`}
          className="group flex items-center gap-3.5 rounded-xl border border-white/5 bg-[#111A29] p-4 transition duration-300 hover:border-[#6993CF]/40 hover:bg-[#172235]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6993CF]/10 text-[#6993CF]">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white">Secondary Line</h4>
            <p className="mt-0.5 text-xs font-medium text-slate-400">{branch.phones[1] || primaryPhone}</p>
          </div>
        </a>
      )}

      {/* Get Directions Card */}
      <a
        href={branch.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3.5 rounded-xl border border-white/5 bg-[#111A29] p-4 transition duration-300 hover:border-[#6993CF]/40 hover:bg-[#172235]"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6993CF]/10 text-[#6993CF]">
          <Navigation className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-xs font-semibold text-white">Get Directions</h4>
          <p className="mt-0.5 text-xs font-medium text-slate-400">{branch.city} Map</p>
        </div>
      </a>
    </div>
  );
}
