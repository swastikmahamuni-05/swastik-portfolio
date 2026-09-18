import React from "react";

interface TechBadgeProps {
  label: string;
  variant?: "default" | "accent";
  className?: string;
}

export function TechBadge({
  label,
  variant = "default",
  className = "",
}: TechBadgeProps) {
  if (variant === "accent") {
    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded font-mono text-[11px] font-medium tracking-wide bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25 ${className}`}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded font-mono text-[11px] font-medium tracking-wide bg-surface-elevated text-text-muted border border-border-subtle ${className}`}
    >
      {label}
    </span>
  );
}

export function ProjectStatusBadge({
  status,
  className = "",
}: {
  status: "Implemented" | "Designed" | "Prototyped" | "In Incubation";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center font-mono text-[11px] uppercase tracking-widest text-text-secondary border border-border-subtle/80 bg-surface-lowest/70 px-2 py-0.5 rounded ${className}`}
    >
      [ {status} ]
    </span>
  );
}
