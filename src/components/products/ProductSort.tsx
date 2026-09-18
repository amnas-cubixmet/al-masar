"use client";

import { ArrowUpDown } from "lucide-react";

interface ProductSortProps {
  value: string;
  onChange: (sort: string) => void;
}

export default function ProductSort({ value, onChange }: ProductSortProps) {
  return (
    <div className="relative inline-flex items-center">
      <div className="pointer-events-none absolute left-3 top-2.5 flex items-center text-[#6993CF]">
        <ArrowUpDown className="h-4 w-4" />
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 rounded-xl border border-white/10 bg-[#151E2D] pl-9 pr-8 text-xs font-semibold text-slate-300 outline-none transition focus:border-[#6993CF]/60 hover:text-white cursor-pointer appearance-none"
      >
        <option value="default" className="bg-[#151E2D] text-white">
          Sort: Default
        </option>
        <option value="name-asc" className="bg-[#151E2D] text-white">
          Sort: Name A–Z
        </option>
        <option value="name-desc" className="bg-[#151E2D] text-white">
          Sort: Name Z–A
        </option>
        <option value="most-variants" className="bg-[#151E2D] text-white">
          Sort: Most Variants
        </option>
      </select>
    </div>
  );
}
