import { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-xs font-medium text-slate-300">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full rounded-xl border border-white/10 bg-[#151E2D] p-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#6993CF]/60 transition min-h-[140px]",
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
Textarea.displayName = "Textarea";

export default Textarea;
