"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { whatsappHref } from "@/lib/phone";

export default function FloatingQuoteButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 140);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const href = whatsappHref(company.quoteWhatsapp, company.quoteMessage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Request a quote on WhatsApp"
      className={[
        "fixed bottom-5 right-4 z-[70] flex h-12 w-12 items-center justify-center rounded-full",
        "bg-gradient-to-br from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB]",
        "text-white shadow-[0_14px_34px_rgba(138,99,232,0.35)]",
        "transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:brightness-110",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A63E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F]",
        "sm:bottom-7 sm:right-6 sm:h-14 sm:w-14",
        visible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0",
      ].join(" ")}
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-[#6EA8FF]/35 via-[#8A63E8]/35 to-[#C45BCB]/35 blur-lg" />
    </a>
  );
}
