import { forwardRef, InputHTMLAttributes, useId } from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full min-w-0">
        {label && (
          <label htmlFor={inputId} className="mb-2 block text-xs font-medium text-slate-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-11 w-full min-w-0 rounded-xl border border-white/10 bg-[#151E2D] px-3.5 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-[#6993CF]/60 md:text-sm",
            error && "border-rose-500/60 focus:border-rose-500",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-rose-400">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
