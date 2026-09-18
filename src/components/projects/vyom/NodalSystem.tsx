"use client";

import React from "react";

const NODE_COMPONENTS = [
  { name: "ESP-Based Controller", desc: "Low-power microcontroller handling periodic sensor reads and telemetry packaging." },
  { name: "Environmental Sensing", desc: "Monitors ambient air quality and volatile atmospheric shifts at fixed points." },
  { name: "Temperature Sensing", desc: "Measures local thermal gradients across high-density storage bays." },
  { name: "Infrared (IR) Sensing", desc: "Short-range obstacle / presence detection and line-of-sight monitoring." },
  { name: "Battery Power Source", desc: "Self-contained DC power enabling flexible wall or column mounting without complex cabling." },
  { name: "Industrial Enclosure", desc: "Ruggedized casing protecting electronics from warehouse dust and mechanical contact." },
];

export function NodalSystem() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
        The conceptual architecture includes auxiliary distributed nodes placed at fixed checkpoints
        throughout the facility. These stationary units complement the mobile robot by gathering
        localized environmental telemetry and providing spatial reference signals along transit corridors.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Conceptual Architecture Tree */}
        <div className="lg:col-span-5 p-5 rounded-xl border border-border-subtle bg-[#080a13] font-mono text-xs space-y-3">
          <span className="text-accent-cyan text-[11px] uppercase tracking-wider block border-b border-white/10 pb-2">
            {"//"} CONCEPTUAL TOPOLOGY TREE
          </span>

          <div className="space-y-2 py-2 text-text-secondary">
            <div className="flex items-center gap-2 text-text-primary font-bold">
              <span className="w-2.5 h-2.5 rounded bg-accent-cyan inline-block"></span>
              <span>VYOM [MOBILE PLATFORM]</span>
            </div>
            <div className="pl-3 border-l border-white/10 space-y-2 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan">├──</span>
                <span className="text-text-primary">NODE 01</span>
                <span className="text-text-muted">(Corridor North Checkpoint)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan">├──</span>
                <span className="text-text-primary">NODE 02</span>
                <span className="text-text-muted">(Storage Bay Checkpoint)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan">├──</span>
                <span className="text-text-primary">NODE 03</span>
                <span className="text-text-muted">(Docking Boundary Checkpoint)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan">└──</span>
                <span className="text-text-secondary">NODE N</span>
                <span className="text-text-muted">(Scalable Perimeter Checkpoints)</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/5 text-[10px] text-text-muted">
            TOPOLOGY TYPE: DISTRIBUTED AMBIENT MONITORING
          </div>
        </div>

        {/* Node Internal Anatomy */}
        <div className="lg:col-span-7 space-y-3">
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
            {"//"} STATIONARY NODE ARCHITECTURE COMPONENTS
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {NODE_COMPONENTS.map((item, idx) => (
              <div
                key={item.name}
                className="p-3.5 rounded-lg border border-border-subtle bg-surface-lowest/40 space-y-1"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-text-muted">
                  <span>ELEMENT // 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/60" />
                </div>
                <h5 className="font-mono text-xs font-semibold text-text-primary">
                  {item.name}
                </h5>
                <p className="text-[11px] text-text-muted leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
