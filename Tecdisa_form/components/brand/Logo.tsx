"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl",
  };

  return (
    <div className={cn("inline-flex items-baseline gap-1.5", className)}>
      <span
        className={cn(
          "silver-text font-extrabold tracking-tight",
          sizes[size]
        )}
        style={{
          textShadow: "0 0 24px rgba(192, 197, 206, 0.12)",
        }}
      >
        Tecdisa
      </span>
      <span
        className={cn(
          "silver-text font-bold uppercase tracking-[0.18em]",
          size === "lg" ? "text-2xl" : size === "md" ? "text-base" : "text-xs"
        )}
      >
        ERP
      </span>
    </div>
  );
}
