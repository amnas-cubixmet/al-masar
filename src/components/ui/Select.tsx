import { forwardRef, SelectHTMLAttributes, useId } from "react";
import { cn } from "@/lib/cn";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, children, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id || generatedId;

    return (
      <div className="w-full min-w-0">
        {label && (
          <label htmlFor={selectId} className="mb-2 block text-xs font-medium text-slate-300">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            "h-11 w-full min-w-0 appearance-none rounded-xl border border-white/10 bg-[#151E2D] px-3.5 text-base text-white outline-none transition focus:border-[#6993CF]/60 md:text-sm",
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
