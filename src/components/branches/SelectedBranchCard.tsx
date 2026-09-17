import type { Branch } from "@/types/branch";
import BranchActions from "./BranchActions";
import BranchMap from "./BranchMap";
import { cn } from "@/lib/cn";

export default function SelectedBranchCard({ branch }: { branch: Branch }) {
  const isMain = branch.id === "main-batha";

  return (
    <div className="mt-8 grid overflow-hidden rounded-2xl border border-white/10 bg-[#151E2D] lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-8">
        <div>
          <span
            className={cn(
              "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
              isMain ? "bg-[#B6519F]/10 text-[#D68AC8]" : "bg-[#8A5CC7]/10 text-[#BFA8F5]"
            )}
          >
            {branch.label || "Selected Branch"}
          </span>

          <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">{branch.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{branch.address}</p>

          <div className="mt-4 flex flex-col gap-1 text-xs text-slate-300">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">Contact Phones</span>
            <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-200">
              {branch.phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`} className="hover:text-white hover:underline">
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>

        <BranchActions branch={branch} />
      </div>

      <BranchMap branch={branch} />
    </div>
  );
}
