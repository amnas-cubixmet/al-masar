"use client";

import { useState, Suspense } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactBranchSelector from "@/components/contact/ContactBranchSelector";
import SelectedBranchContact from "@/components/contact/SelectedBranchContact";
import ContactActions from "@/components/contact/ContactActions";
import ContactForm from "@/components/contact/ContactForm";
import AllBranches from "@/components/contact/AllBranches";
import { branches } from "@/data/branches";
import type { Branch } from "@/types/branch";

export default function ContactView() {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);

  return (
    <div className="bg-[#0D1320] min-h-screen">
      <ContactHero />

      {/* Selected Branch & Actions Section */}
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-3 sm:px-6 lg:px-8">
          <ContactBranchSelector
            branches={branches}
            selectedBranch={selectedBranch}
            onSelectBranch={setSelectedBranch}
          />

          <SelectedBranchContact branch={selectedBranch} />

          <ContactActions branch={selectedBranch} />
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#101826]">
        <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-[#6993CF]">Loading enquiry form...</div>}>
            <ContactForm branches={branches} selectedBranch={selectedBranch} />
          </Suspense>
        </div>
      </section>

      {/* All Branches Cards */}
      <AllBranches branches={branches} onSelectBranch={setSelectedBranch} />
    </div>
  );
}
