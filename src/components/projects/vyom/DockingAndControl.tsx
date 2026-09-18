"use client";

import React from "react";

const DOCKING_SEQUENCE = [
  {
    step: "01",
    name: "ROBOT",
    desc: "Approaches designated terminal charging zone under broad LiDAR navigation.",
  },
  {
    step: "02",
    name: "DOCK",
    desc: "Engages close-range optical fiducial alignment to mate contact terminals with the base.",
  },
  {
    step: "03",
    name: "CHARGE",
    desc: "Initiates power transfer via charging pads while maintaining low-power sleep telemetry.",
  },
  {
    step: "04",
    name: "READY",
    desc: "Re-engages navigation systems upon replenishment to accept queued dispatch tasks.",
  },
];

export function DockingAndControl() {
  return (
    <div className="space-y-8">
      {/* 1. DOCKING SEQUENCE */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider">
            {"//"} REPLENISHMENT LIFECYCLE
          </span>
          <span className="font-mono text-xs text-text-muted">
            CONCEPTUAL DOCKING SEQUENCE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {DOCKING_SEQUENCE.map((item, idx) => (
            <div
              key={item.name}
              className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/40 space-y-2 relative"
            >
              {idx < DOCKING_SEQUENCE.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-white/20 text-xs pointer-events-none">
                  →
                </div>
              )}
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent-cyan font-semibold">STAGE {item.step}</span>
                <span className="text-text-muted">●</span>
              </div>
              <h5 className="font-mono text-base font-bold text-text-primary">
                {item.name}
              </h5>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. USER / CONTROL MODES */}
      <div className="space-y-4 pt-4 border-t border-border-subtle">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider">
            {"//"} OPERATIONAL MODALITIES
          </span>
          <span className="font-mono text-xs text-text-muted">
            OPERATOR INTERACTION SYSTEM
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Manual Mode */}
          <div className="p-5 rounded-xl border border-border-subtle bg-[#080b14] space-y-2">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-text-primary font-bold">MANUAL CONTROL</span>
              <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-[10px] text-text-muted">
                OPERATOR OVERRIDE
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Provides direct manual positioning for maintenance, maintenance relocation, payload
              alignment verification, or exceptional obstacle clearance where autonomy is temporarily suspended.
            </p>
          </div>

          {/* Autonomous Mode */}
          <div className="p-5 rounded-xl border border-border-subtle bg-[#080b14] space-y-2">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-text-primary font-bold">SYSTEM-SET / AUTONOMOUS</span>
              <span className="px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30 text-[10px] text-accent-cyan">
                AUTONOMOUS DISPATCH
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Executes autonomous route tracking between warehouse storage bays, reacting dynamically to
              pedestrians and stationary obstacles while maintaining adherence to facility speed limits.
            </p>
          </div>
        </div>

        {/* Touchscreen HMI Note */}
        <div className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/40 font-mono text-xs text-text-secondary flex items-start gap-3">
          <span className="text-accent-cyan">■</span>
          <p className="leading-relaxed">
            <strong className="text-text-primary">Onboard Touchscreen HMI Concept:</strong> An
            integrated local display architecture conceived for on-chassis operator inspection, mode
            toggling, and e-stop release confirmation directly at the robot.
          </p>
        </div>
      </div>
    </div>
  );
}
