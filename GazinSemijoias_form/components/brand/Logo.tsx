"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const dimensions = {
    sm: { width: 100, height: 28 },
    md: { width: 140, height: 40 },
    lg: { width: 180, height: 52 },
  };

  return (
    <div className={cn("inline-flex items-center justify-center", className)}>
      <Image
        src="/logo-gazin.png"
        alt="Gazin Semijoias"
        width={dimensions[size].width}
        height={dimensions[size].height}
        className="object-contain rounded-2xl shadow-sm"
        priority
      />
    </div>
  );
}
