import React from "react";
import { FactualStatus } from "@/data/types";

interface StatusBadgeProps {
  status: FactualStatus;
  className?: string;
  showDot?: boolean;
}

export function StatusBadge({
  status,
  className = "",
  showDot = true,
}: StatusBadgeProps) {
  const getDotColor = () => {
    switch (status) {
      case "Implemented":
        return "bg-emerald-400";
      case "Prototyped":
        return "bg-accent-cyan";
      case "Designed":
        return "bg-amber-400";
      case "In Incubation":
        return "bg-accent-violet";
      default:
        return "bg-text-muted";
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-text-secondary border border-border-subtle/80 bg-surface-lowest/70 px-2.5 py-0.5 rounded ${className}`}
    >
      {showDot && <span className={`w-1.5 h-1.5 rounded-full ${getDotColor()}`} />}
      <span>[ {status} ]</span>
    </span>
  );
}
