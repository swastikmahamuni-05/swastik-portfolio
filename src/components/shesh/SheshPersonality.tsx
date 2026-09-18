"use client";

import React from "react";

const PRINCIPLES = [
  {
    title: "Consistent Communication",
    desc: "Maintains a calm, precise, and restrained tone tuned for high-velocity engineering and thoughtful collaboration.",
  },
  {
    title: "Contextual Behavior",
    desc: "Modulates detail density to match the user's focus—offering terse responses during active coding and detailed walkthroughs during exploration.",
  },
  {
    title: "Configurable Interaction",
    desc: "Respects explicit autonomy envelopes, allowing the user to dictate where automation stops and manual approval begins.",
  },
  {
    title: "Longitudinal Continuity",
    desc: "Preserves episodic context and project decisions across sessions, eliminating the fatigue of repeatedly re-explaining working constraints.",
  },
  {
    title: "Useful Initiative",
    desc: "Surfaces unprompted observations only when high-value: identifying overlooked edge cases, dead ends, or relevant previous solutions without noise.",
  },
];

export function SheshPersonality() {
  return (
    <section className="py-16 sm:py-24 border-t border-border-subtle">
      <div className="max-w-3xl mb-12 space-y-3">
        <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest block">
          {"//"} BEHAVIORAL DESIGN PHILOSOPHY
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
          A Personality, Not a Persona
        </h2>
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
          SHESH is not built to simulate an artificial human or pretend to possess emotions. Instead,
          its personality is defined through predictable behavioral consistency, reliable context
          preservation, and respect for the user&apos;s attention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PRINCIPLES.map((p, idx) => (
          <div
            key={p.title}
            className={`p-6 rounded-2xl border border-border-subtle bg-[#101218] space-y-2 ${
              idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-cyan-400/70 mb-1">
              <span>PRINCIPLE {"//"} 0{idx + 1}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40" />
            </div>
            <h4 className="font-mono text-base font-bold text-text-primary">
              {p.title}
            </h4>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Explicit Sentience Disavowal Note */}
      <div className="mt-6 p-4 rounded-xl border border-border-subtle bg-[#08090D] font-mono text-xs text-text-muted space-y-1">
        <div className="text-text-secondary font-semibold uppercase tracking-wider">
          DESIGN BOUNDARY:
        </div>
        <p className="leading-relaxed">
          SHESH makes no claim of consciousness, sentience, or human-like emotions. It is engineered
          strictly as a sophisticated software companion and agentic orchestration system.
        </p>
      </div>
    </section>
  );
}
