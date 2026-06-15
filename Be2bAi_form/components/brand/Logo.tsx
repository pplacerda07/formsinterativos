"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const dims = {
  sm: { w: 120, h: 40 },
  md: { w: 180, h: 60 },
  lg: { w: 260, h: 88 },
};

export function Logo({ className, size = "md" }: LogoProps) {
  const { w, h } = dims[size];
  return (
    <div className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo.png"
        alt="Be2B AI"
        width={w}
        height={h}
        priority
        className="object-contain drop-shadow-[0_0_24px_rgba(192,197,206,0.18)]"
        style={{ height: "auto", width: `${w}px` }}
      />
    </div>
  );
}
