import React from "react";
import { cn } from "@/lib/cn";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-3 sm:px-4 md:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
