import React from "react";
import Link from "next/link";

interface SectionHeadingProps {
  indexTag?: string;
  title: string;
  subtitle?: string;
  actionLink?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function SectionHeading({
  indexTag,
  title,
  subtitle,
  actionLink,
  className = "mb-16",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 ${className}`}
    >
      <div className="max-w-3xl">
        {indexTag && (
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-2">
            {indexTag}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          {title}
        </h2>
        {subtitle && (
          <p className="text-text-secondary text-base mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {actionLink && (
        <Link
          href={actionLink.href}
          className="group font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0"
        >
          <span>{actionLink.label}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      )}
    </div>
  );
}
