"use client";

import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  counter?: { current: number; max: number };
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, counter, id, ...props }, ref) => {
    const inputId = id || props.name;
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={3}
          className={cn(
            "w-full rounded-xl bg-bg-surface border border-border px-4 py-3 text-base text-text-primary placeholder:text-text-muted/60 outline-none transition-all resize-none",
            "focus:border-primary focus:shadow-glow",
            error && "border-danger focus:border-danger focus:shadow-none",
            className
          )}
          {...props}
        />
        <div className="flex items-center justify-between">
          {error ? (
            <span className="text-xs text-danger">{error}</span>
          ) : hint ? (
            <span className="text-xs text-text-muted">{hint}</span>
          ) : (
            <span />
          )}
          {counter && (
            <span
              className={cn(
                "text-xs",
                counter.current > counter.max
                  ? "text-danger"
                  : "text-text-muted"
              )}
            >
              {counter.current}/{counter.max}
            </span>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
