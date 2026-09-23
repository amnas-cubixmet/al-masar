"use client";

import { ChevronDown, MapPin } from "lucide-react";
import type { Branch } from "@/types/branch";

interface ContactBranchSelectorProps {
  branches: Branch[];
  selectedBranch: Branch;
  onSelectBranch: (branch: Branch) => void;
}

export default function ContactBranchSelector({
  branches,
  selectedBranch,
  onSelectBranch,
}: ContactBranchSelectorProps) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#6993CF]">
        SELECT BRANCH
      </label>
      <div className="relative w-full">
        <div className="pointer-events-none absolute left-3.5 top-3.5 flex items-center text-[#6993CF]">
          <MapPin className="h-5 w-5" />
        </div>
        <select
          value={selectedBranch.id}
          onChange={(e) => {
            const found = branches.find((b) => b.id === e.target.value);
            if (found) onSelectBranch(found);
          }}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#151E2D] pl-11 pr-10 text-sm font-semibold text-white outline-none focus:border-[#6993CF]/60 transition cursor-pointer appearance-none"
        >
          {branches.map((b) => (
            <option key={b.id} value={b.id} className="bg-[#151E2D] text-white py-2">
              {b.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3.5 top-3.5 flex items-center text-slate-400">
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
