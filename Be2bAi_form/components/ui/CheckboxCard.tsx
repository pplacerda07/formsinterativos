"use client";

import { cn } from "@/lib/utils";
import { Option } from "@/lib/options";
import { Check } from "lucide-react";

interface CheckboxCardGroupProps {
  name: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: Option[];
  columns?: 1 | 2 | 3;
  error?: string;
}

export function CheckboxCardGroup({
  name,
  value,
  onChange,
  options,
  columns = 2,
  error,
}: CheckboxCardGroupProps) {
  const toggle = (val: string) => {
    if (value.includes(val)) {
      onChange(value.filter((v) => v !== val));
    } else {
      onChange([...value, val]);
    }
  };

  const gridCols =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="flex flex-col gap-2">
      <div className={cn("grid gap-2.5", gridCols)}>
        {options.map((opt) => {
          const selected = value.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              aria-pressed={selected}
              data-name={name}
              className={cn(
                "group relative flex items-center gap-3 rounded-2xl border bg-bg-surface px-4 py-3 text-left transition-all duration-200",
                selected
                  ? "border-accent bg-bg-elevated shadow-glow"
                  : "border-border hover:border-accent/50 hover:bg-bg-elevated/60"
              )}
            >
              {opt.emoji && (
                <span className="shrink-0 text-xl leading-none">
                  {opt.emoji}
                </span>
              )}
              <span
                className={cn(
                  "flex-1 text-sm font-medium",
                  selected ? "text-text-primary" : "text-text-primary/85"
                )}
              >
                {opt.label}
              </span>
              <span
                className={cn(
                  "shrink-0 flex h-5 w-5 items-center justify-center rounded-md transition-all",
                  selected
                    ? "bg-indigo-violet text-white"
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
