"use client";

import { Search, X } from "lucide-react";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({ value, onChange }: ProductSearchProps) {
  return (
    <div className="relative w-full min-w-0 max-w-xl">
      <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-[#6993CF]" />
      <input
        type="search"
        inputMode="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search product name, code, brand or spec..."
        className="h-12 w-full min-w-0 rounded-xl border border-white/10 bg-[#151E2D] pl-11 pr-10 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-[#6993CF]/60 md:text-sm"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck="false"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
