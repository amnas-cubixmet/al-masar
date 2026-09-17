import { ExternalLink, MessageCircle, Phone } from "lucide-react";
import type { Branch } from "@/types/branch";
import { normalizePhone, whatsappHref } from "@/lib/phone";

export default function BranchActions({ branch }: { branch: Branch }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2.5">
      {branch.phones.map((phone, idx) => (
        <a
          key={phone}
          href={`tel:${normalizePhone(phone)}`}
          aria-label={`Call ${branch.name} ${phone}`}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-[#1B2638] px-4 text-sm font-medium text-white transition hover:bg-white/10"
        >
          <Phone size={16} className="text-[#6993CF]" /> Call {branch.phones.length > 1 ? `#${idx + 1}` : ""} ({phone})
        </a>
      ))}

      {branch.whatsapp ? (
        <a
          href={whatsappHref(branch.whatsapp, `Hello AL MASAR, I am contacting ${branch.name}.`)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#22C55E] px-4 text-sm font-semibold text-white transition hover:brightness-110"
        >
          <MessageCircle size={16} /> WhatsApp
        </a>
      ) : null}

      <a
        href={branch.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#6993CF]/40 px-4 text-sm font-medium text-[#8BB8EF] transition hover:bg-[#6993CF]/10"
      >
        <span>Get Directions</span> <ExternalLink size={14} />
      </a>
    </div>
  );
}
