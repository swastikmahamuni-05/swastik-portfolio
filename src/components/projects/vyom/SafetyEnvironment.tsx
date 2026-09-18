"use client";

import React from "react";

interface SensorCategory {
  name: string;
  code: string;
  metrics: string[];
  purpose: string;
  operationalBehavior: string;
}

const CATEGORIES: SensorCategory[] = [
  {
    name: "Air Quality & Particulate",
    code: "ENV-AQ",
    metrics: ["PM2.5", "VOC", "CO₂"],
    purpose: "Monitors warehouse ambient air quality and volatile concentrations in enclosed bays.",
    operationalBehavior: "Identifies deteriorating air quality conditions and alerts maintenance personnel.",
  },
  {
    name: "Thermal & Climate",
    code: "ENV-TC",
    metrics: ["Ambient Temperature", "Relative Humidity"],
    purpose: "Tracks atmospheric shifts and hot spots across material storage aisles.",
    operationalBehavior: "Maintains climate awareness for temperature-sensitive inventory and machine overheating.",
  },
  {
    name: "Smoke & Particulate Detection",
    code: "SAF-SMK",
    metrics: ["Optical Obscuration", "Airborne Particulates"],
    purpose: "Detects early smoke development along active transit corridors.",
    operationalBehavior: "Initiates path avoidance around affected aisles and broadcasts immediate facility alerts.",
  },
  {
    name: "Flame & Thermal Signatures",
    code: "SAF-FLM",
    metrics: ["Infrared Signatures", "Rapid Thermal Delta"],
    purpose: "Monitors unexpected open flame or rapid heat spikes within the operating perimeter.",
    operationalBehavior: "Triggers immediate mobile base halt, safe standstill interlock, and emergency telemetry dispatch.",
  },
];

export function SafetyEnvironment() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.code}
            className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/40 space-y-3 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-text-muted mb-2">
                <span>{cat.code}</span>
                <div className="flex items-center gap-1.5">
                  {cat.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-[9px] text-text-secondary"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <h4 className="font-mono text-base font-semibold text-text-primary">
                {cat.name}
              </h4>
              <p className="text-xs text-text-muted mt-1 leading-snug">
                {cat.purpose}
              </p>
            </div>

            <div className="border-t border-white/5 pt-3">
              <span className="font-mono text-[10px] text-accent-cyan uppercase tracking-wider block mb-1">
                SYSTEM BEHAVIOR:
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                {cat.operationalBehavior}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Response & Fire Suppression Concept Clarification */}
      <div className="p-6 rounded-xl border border-border-subtle bg-[#080b15] space-y-3 font-mono text-xs">
        <div className="flex items-center gap-2 text-amber-400">
          <span className="font-bold">⚠</span>
          <span className="font-semibold uppercase tracking-wider">
            CONCEPT CLARIFICATION // SAFETY &amp; FIRE HAZARD HANDLING
          </span>
        </div>
        <p className="text-text-secondary leading-relaxed font-sans text-xs">
          Smoke and fire capabilities within VYOM are conceived strictly around{" "}
          <strong className="text-text-primary">early detection, localized corridor alert broadcasting, and obstacle rerouting</strong>.
          Any supplementary water-mist or extinguishing mechanisms discussed in the concept architecture
          represent prospective safety subsystem exploratory designs, rather than validated operational
          firefighting hardware.
        </p>
      </div>
    </div>
  );
}
