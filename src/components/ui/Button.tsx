import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const variants = {
      primary:
        "bg-gradient-to-r from-[#B6519F] via-[#8A5CC7] to-[#53A6DC] text-white hover:brightness-110",
      secondary:
        "bg-white/10 text-white hover:bg-white/15 border border-white/10",
      outline:
        "border border-white/10 bg-white/5 text-white hover:border-[#6993CF]/40 hover:bg-white/10",
      whatsapp:
        "bg-[#22C55E] text-white hover:brightness-110",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex h-11 min-h-[44px] items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
