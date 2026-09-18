"use client";

import React from "react";

interface Subsystem {
  title: string;
  category: string;
  role: string;
  interfaces: string[];
}

const SUBSYSTEMS: Subsystem[] = [
  {
    title: "Optical Camera Unit",
    category: "Perception & Acquisition",
    role: "Frames and acquires leaf canopy surfaces under ambient field illumination.",
    interfaces: ["MIPI-CSI / USB Interface", "Direct Frame Capture"],
  },
  {
    title: "Edge Compute Unit",
    category: "Inference Engine",
    role: "Hosts local computer vision models to perform on-device foliar classification without cloud roundtrips.",
    interfaces: ["Local Model Memory", "Serial Inter-Process Bridge"],
  },
  {
    title: "ESP32 Controller",
    category: "Hardware Orchestration",
    role: "Manages system triggering, power states, sensor scheduling, and serial modem handshakes.",
    interfaces: ["UART Serial Protocol", "GPIO Triggers"],
  },
  {
    title: "Cellular GSM Modem",
    category: "Communication Channel",
    role: "Executes AT command sequences to transmit plain-text advisory SMS over available cellular base stations.",
    interfaces: ["Standard SIM Slot", "AT Command Interface"],
  },
];

export function PhysicalSystem() {
  return (
    <div className="space-y-6">
      <div className="space-y-3 max-w-2xl text-text-secondary leading-relaxed text-sm sm:text-base">
        <p>
          AUMByte integrates software intelligence directly with field-deployable embedded hardware.
          The physical architecture is structured to maintain clear operational boundaries between
          optical acquisition, localized inference computation, system orchestration, and cellular dispatch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SUBSYSTEMS.map((sub, i) => (
          <div
            key={sub.title}
            className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-3 hover:border-emerald-500/40 transition-colors"
          >
            <div className="border-b border-border-subtle/80 pb-2">
              <span className="font-mono text-[10px] text-emerald-400 font-bold block mb-1">
                0{i + 1} {"//"} SUBSYSTEM
              </span>
              <h4 className="text-sm font-bold text-text-primary">{sub.title}</h4>
              <span className="font-mono text-[10px] text-text-muted block mt-0.5">
                {sub.category}
              </span>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed">
              {sub.role}
            </p>

            <div className="pt-2 border-t border-border-subtle/50 space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block">
                Hardware Interfaces
              </span>
              <div className="flex flex-wrap gap-1">
                {sub.interfaces.map((itf) => (
                  <span
                    key={itf}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface border border-border-subtle text-text-muted"
                  >
                    {itf}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
