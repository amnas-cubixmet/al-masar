import type { Branch } from "@/types/branch";
import BranchCard from "./BranchCard";

interface BranchGridProps {
  branches: Branch[];
  selectedBranch: Branch;
  onSelectBranch: (branch: Branch) => void;
}

export default function BranchGrid({ branches, selectedBranch, onSelectBranch }: BranchGridProps) {
  return (
    <div className="mt-6 sm:mt-12">
      <h3 className="text-[16px] font-bold text-white sm:text-2xl">All Locations</h3>
      <div className="mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {branches.map((item) => (
          <BranchCard
            key={item.id}
            branch={item}
            isSelected={item.id === selectedBranch.id}
            onSelect={onSelectBranch}
          />
        ))}
      </div>
    </div>
  );
}
