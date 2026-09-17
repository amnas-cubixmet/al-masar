"use client";

import { Building2, BadgeCheck, ReceiptText, Boxes } from "lucide-react";
import CredentialCard from "@/components/about/CredentialCard";
import { company } from "@/data/company";

export default function CredentialsGrid() {
  const credentials = [
    {
      label: "ENTITY",
      value: "Limited Liability Company",
      icon: Building2,
    },
    {
      label: "NATIONAL NUMBER",
      value: company.nationalNumber,
      icon: BadgeCheck,
    },
    {
      label: "VAT NUMBER",
      value: company.vatNumber,
      icon: ReceiptText,
    },
    {
      label: "CATALOGUE",
      value: `${company.catalogueCount}+ Listed Items`,
      icon: Boxes,
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#0D1320]">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6993CF]">
            CREDENTIALS
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Company Credentials & Registration
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((cred) => (
            <CredentialCard
              key={cred.label}
              label={cred.label}
              value={cred.value}
              icon={cred.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
