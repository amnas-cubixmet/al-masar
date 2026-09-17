"use client";

import ClientLogoCard from "@/components/clients/ClientLogoCard";
import { clients as defaultClients } from "@/data/clients";
import type { Client } from "@/data/clients";

interface ClientsMarqueeProps {
  clients?: Client[];
}

export default function ClientsMarquee({ clients = defaultClients }: ClientsMarqueeProps) {
  return (
    <section className="py-14 sm:py-16 lg:py-20 border-y border-white/10 bg-[#101826]">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#151E2D] p-5 sm:p-6 lg:p-8">
          {/* Section Copy */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6993CF]">
              CLIENTS
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Trusted Industry Partners
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Providing high-grade electrical equipment and solutions across major industrial and commercial projects.
            </p>
          </div>

          {/* Continuous Infinite Auto-Scrolling Marquee */}
          <div className="relative mt-6 sm:mt-8 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 sm:before:w-24 before:bg-gradient-to-r before:from-[#151E2D] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 sm:after:w-24 after:bg-gradient-to-l after:from-[#151E2D] after:to-transparent">
            <div className="flex w-max items-center gap-3 sm:gap-4 animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused]">
              {/* Primary client track */}
              {clients.map((client) => (
                <ClientLogoCard key={`${client.id}-1`} client={client} />
              ))}
              {/* Duplicated client track for seamless 100% infinite loop */}
              {clients.map((client) => (
                <ClientLogoCard key={`${client.id}-2`} client={client} isDuplicate />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
