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
    <section className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6993CF]">
        OUR BRANCHES
      </span>

      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Find the Branch Closest to You
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
        Select a branch to view its contact details and location.
      </p>

      {/* Branch Selector Dropdown */}
      <div className="mt-6">
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
