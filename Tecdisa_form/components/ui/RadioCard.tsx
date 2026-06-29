"use client";

import { cn } from "@/lib/utils";
import { Option } from "@/lib/options";
import { Check } from "lucide-react";

interface RadioCardGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  columns?: 1 | 2;
  size?: "md" | "lg";
  error?: string;
}

export function RadioCardGroup({
  name,
  value,
  onChange,
  options,
  columns = 2,
  size = "md",
  error,
}: RadioCardGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          "grid gap-2.5",
          columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"
        )}
      >
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              aria-pressed={selected}
              data-name={name}
              className={cn(
                "group relative flex items-center gap-3 rounded-2xl border bg-bg-surface px-4 text-left transition-all duration-200",
                size === "md" ? "py-3" : "py-4",
                selected
                  ? "border-primary bg-bg-elevated shadow-glow"
                  : "border-border hover:border-primary/50 hover:bg-bg-elevated/60"
              )}
            >
              {opt.emoji && (
                <span
                  className={cn(
                    "shrink-0 leading-none",
                    size === "md" ? "text-xl" : "text-2xl"
                  )}
                >
                  {opt.emoji}
                </span>
              )}
              <span
                className={cn(
                  "flex-1 font-medium",
                  size === "md" ? "text-sm" : "text-base",
                  selected ? "text-text-primary" : "text-text-primary/85"
                )}
              >
                {opt.label}
              </span>
              <span
                className={cn(
                  "shrink-0 flex items-center justify-center rounded-full transition-all",
                  size === "md" ? "h-5 w-5" : "h-6 w-6",
                  selected
                    ? "bg-tecdisa-green text-white"
                    : "border border-border bg-transparent"
                )}
              >
                {selected && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
              </span>
            </button>
          );
        })}
      </div>
      {error && <span className="text-xs text-danger">{error}</span>}
    </div>
  );
}
