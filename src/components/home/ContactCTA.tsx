"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { useBranch } from "@/context/BranchContext";
import { normalizePhone, whatsappHref } from "@/lib/phone";

export default function ContactCTA() {
  const { branch } = useBranch();
  const phone = branch?.phones?.[0] || "0550183813";

  return (
    <section className="bg-[#0D1320] py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#172337] via-[#111B2A] to-[#0D1320] p-8 sm:p-12 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6993CF]">
              Need product information?
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Talk to our team today.
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {branch?.name || "Main Branch"} · {branch?.city || "Riyadh"}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              href={`tel:${normalizePhone(phone)}`}
            >
              <Phone size={17} className="text-[#6993CF]" /> {phone}
            </a>
            {branch?.whatsapp ? (
              <a
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#22C55E] px-5 text-sm font-semibold text-white transition hover:brightness-110"
                href={whatsappHref(branch.whatsapp, "Hello AL MASAR, I need product information.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
            ) : (
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#53A6DC] px-5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Send enquiry
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
