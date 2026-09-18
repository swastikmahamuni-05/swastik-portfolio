"use client";

import React from "react";

interface Surface {
  name: string;
  code: string;
  role: string;
  intent: string;
}

const SURFACES: Surface[] = [
  {
    name: "Web Portal",
    code: "SURF // 01",
    role: "Visual hub & session overview",
    intent: "Lightweight browser interface for structured interaction, system configuration, and history inspection.",
  },
  {
    name: "Desktop Companion",
    code: "SURF // 02",
    role: "Local engineering companion",
    intent: "Deep operating system integration with local terminal hooks, editor awareness, and sandboxed filesystem access.",
  },
  {
    name: "Mobile Endpoint",
    code: "SURF // 03",
    role: "Ambient on-the-go touchpoint",
    intent: "Voice interaction, contextual reminders, and rapid human-in-the-loop task authorizations.",
  },
  {
    name: "Background Services",
    code: "SURF // 04",
    role: "Asynchronous monitoring & sync",
    intent: "Headless task orchestration maintaining continuity, scheduled research passes, and event indexing.",
  },
  {
    name: "Tool Integration",
    code: "SURF // 05",
    role: "External execution layer",
    intent: "Extensible connector layer linking the core intelligence to developer toolchains and remote APIs.",
  },
];

export function SheshSurfaces() {
  return (
    <section className="py-16 sm:py-24 border-t border-border-subtle">
      <div className="max-w-3xl mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#101218] border border-border-subtle font-mono text-[10px] text-cyan-300">
          <span>VISION {"//"} CROSS-DEVICE TOPOLOGY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
          One Intelligence. Multiple Surfaces.
        </h2>
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
          Intelligence should not be trapped inside a single browser tab. The long-term vision for
          SHESH is an ambient companion that follows the user seamlessly across diverse hardware and
          operating environments while maintaining a unified memory graph.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {SURFACES.map((surf) => (
          <div
            key={surf.code}
            className="p-5 rounded-2xl border border-border-subtle bg-[#101218] space-y-3 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-[10px] text-cyan-400/80 mb-2">
                {surf.code}
              </div>
              <h4 className="font-mono text-base font-semibold text-text-primary">
                {surf.name}
              </h4>
              <p className="font-mono text-xs text-text-muted mt-1">
                {surf.role}
              </p>
            </div>

            <p className="text-xs text-text-secondary border-t border-white/5 pt-3 leading-relaxed">
              {surf.intent}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl border border-border-subtle bg-[#08090D] font-mono text-xs text-text-muted flex items-start gap-3">
        <span className="text-cyan-400 font-bold">ℹ</span>
        <p className="leading-relaxed">
          <strong className="text-text-primary">Vision Boundary:</strong> Cross-surface continuity
          represents the intended architectural direction for SHESH. It is not currently deployed as
          an active multi-device client network.
        </p>
      </div>
    </section>
  );
}
