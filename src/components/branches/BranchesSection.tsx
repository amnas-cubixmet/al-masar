"use client";

import { useState } from "react";
import { branches } from "@/data/branches";
import type { Branch } from "@/types/branch";
import BranchSelector from "./BranchSelector";
import SelectedBranchCard from "./SelectedBranchCard";
import BranchGrid from "./BranchGrid";

export default function BranchesSection() {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);

  return (
    <section data-section="branches" className="mx-auto w-full max-w-[1440px] touch-pan-y px-5 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6993CF] sm:text-xs">
        OUR BRANCHES
      </span>

      <h2 className="mt-2 max-w-2xl text-[28px] font-bold leading-[1.08] tracking-tight text-white sm:mt-3 sm:text-4xl">
        Find the Branch Closest to You
      </h2>

      <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-slate-400 sm:mt-4 sm:text-base">
        Select a branch to view its contact details and location.
      </p>

      {/* Branch Selector Dropdown */}
      <div className="mt-4 sm:mt-6">
        <BranchSelector
          branches={branches}
          selectedBranch={selectedBranch}
          onSelectBranch={setSelectedBranch}
        />
      </div>

      {/* Selected Branch Information | Dynamic Map */}
      <SelectedBranchCard branch={selectedBranch} />

      {/* All Locations Grid */}
      <BranchGrid
        branches={branches}
        selectedBranch={selectedBranch}
        onSelectBranch={setSelectedBranch}
      />
    </section>
  );
}
