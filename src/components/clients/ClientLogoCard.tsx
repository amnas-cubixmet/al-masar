"use client";

import Image from "next/image";
import type { Client } from "@/data/clients";

interface ClientLogoCardProps {
  client: Client;
  isDuplicate?: boolean;
}

export default function ClientLogoCard({ client, isDuplicate = false }: ClientLogoCardProps) {
  return (
    <div
      aria-hidden={isDuplicate ? "true" : undefined}
      className="group flex h-16 w-32 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#111A29] px-3 sm:px-4 transition duration-300 hover:border-[#6993CF]/40 hover:bg-[#172235] sm:h-20 sm:w-40 lg:h-24 lg:w-48"
    >
      {client.logo ? (
        <Image
          src={client.logo}
          alt={client.name}
          width={120}
          height={40}
          className="max-h-8 max-w-[100px] object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-10 sm:max-w-[120px]"
          onError={(e) => {
            // Hide broken images seamlessly
            (e.target as HTMLElement).style.display = "none";
          }}
        />
      ) : (
        <span className="text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 transition-colors group-hover:text-white sm:text-xs">
          {client.name}
        </span>
      )}
    </div>
  );
}
