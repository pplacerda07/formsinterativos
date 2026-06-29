"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  full?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-indigo-violet text-white shadow-glow hover:shadow-glow-strong hover:brightness-110 active:scale-[0.98]",
  ghost:
    "bg-transparent text-text-muted hover:text-text-primary hover:bg-bg-elevated",
  outline:
    "bg-transparent border border-border text-text-primary hover:bg-bg-elevated",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", full, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          full && "w-full",
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
