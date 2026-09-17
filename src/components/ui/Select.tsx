import { forwardRef, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, children, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-xs font-medium text-slate-300">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            "h-11 w-full rounded-xl border border-white/10 bg-[#151E2D] px-3.5 text-sm text-white outline-none focus:border-[#6993CF]/60 transition cursor-pointer appearance-none",
            error && "border-rose-500/60 focus:border-rose-500",
            className
          )}
          {...props}
        >
          {children}
        </select>
        {error && <p className="mt-1 text-xs text-rose-400">{error}</p>}
      </div>
    );
  }
);
Select.displayName = "Select";

export default Select;
