"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StepShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function StepShell({ title, subtitle, children }: StepShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1.5">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-5">{children}</div>
    </motion.div>
  );
}
