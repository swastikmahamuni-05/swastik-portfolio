import React from "react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperiencePreview() {
  return (
    <section className="py-24 border-t border-border-subtle">
      {/* Section Header */}
      <SectionHeading
        indexTag="[03] // EXPERIENCE"
        title="Experience &amp; Leadership"
        actionLink={{
          label: "View full experience",
          href: "/experience",
        }}
        className="mb-14"
      />

      {/* Experience Entries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experienceData.map((exp) => (
          <div
            key={exp.organization}
            className="p-8 rounded-xl border border-border-subtle bg-surface-lowest/40 space-y-4 hover:border-border-medium transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-border-subtle">
              <span className="font-mono text-xs text-accent-cyan font-medium">
                {exp.role}
              </span>
              <span className="font-mono text-[11px] text-text-muted">
                {exp.timeline}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary tracking-tight">
                {exp.organization}
              </h3>
              <p className="font-mono text-xs text-text-muted mt-0.5">
                {exp.department || exp.type}
              </p>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed pt-1">
              {exp.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
