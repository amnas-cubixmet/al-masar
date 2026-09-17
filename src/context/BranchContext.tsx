"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { branches } from "@/data/branches";
import type { Branch } from "@/types/branch";

type BranchContextValue = {
  branch: Branch;
  branches: Branch[];
  setBranchId: (id: string) => void;
};

const BranchContext = createContext<BranchContextValue | null>(null);

export function BranchProvider({ children }: { children: React.ReactNode }) {
  const [branchId, setBranchIdState] = useState(branches[0].id);

  useEffect(() => {
    const saved = window.localStorage.getItem("al-masar-branch");
    if (saved && branches.some((item) => item.id === saved)) {
      setBranchIdState(saved);
    }
  }, []);

  const setBranchId = (id: string) => {
    setBranchIdState(id);
    window.localStorage.setItem("al-masar-branch", id);
  };

  const branch = useMemo(
    () => branches.find((item) => item.id === branchId) ?? branches[0],
    [branchId],
  );

  return (
    <BranchContext.Provider value={{ branch, branches, setBranchId }}>
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch() {
  const context = useContext(BranchContext);
  if (!context) throw new Error("useBranch must be used inside BranchProvider");
  return context;
}
