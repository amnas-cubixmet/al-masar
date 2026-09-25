import { forwardRef, TextareaHTMLAttributes, useId } from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id || generatedId;

    return (
      <div className="w-full min-w-0">
        {label && (
          <label htmlFor={textareaId} className="mb-2 block text-xs font-medium text-slate-300">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "min-h-[140px] w-full min-w-0 resize-y rounded-xl border border-white/10 bg-[#151E2D] p-3.5 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-[#6993CF]/60 md:text-sm",
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
