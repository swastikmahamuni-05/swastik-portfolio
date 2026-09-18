import React from "react";
import { focusDomainsData } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EngineeringFocus() {
  return (
    <section className="py-24 border-t border-border-subtle">
      {/* Section Header */}
      <SectionHeading
        indexTag="[02] // ENGINEERING FOCUS"
        title="Core Focus Domains"
        subtitle="Grounding abstract computational logic in physical silicon, reliable distributed networks, and real-world execution."
      />

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {focusDomainsData.map((item) => (
          <div
            key={item.tag}
            className="p-8 rounded-xl border border-border-subtle bg-surface-lowest/40 flex flex-col justify-between space-y-6 hover:border-border-medium transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent-cyan tracking-wider font-semibold">
                  {item.index} {"//"}
                </span>
                <span className="text-text-muted tracking-widest uppercase text-[11px]">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-text-primary">
                {item.headline}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-border-subtle/50 flex flex-wrap gap-1.5 font-mono text-[11px] text-text-muted">
              {item.skills.map((s) => (
                <span key={s} className="px-2 py-0.5 rounded bg-surface-elevated">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
