"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Layer {
  id: string;
  name: string;
  color: string;
  description: string;
}

const LAYERS: Layer[] = [
  {
    id: "all",
    name: "Composite View",
    color: "#00e5ff",
    description: "Complete spatial representation of the structured indoor facility layout.",
  },
  {
    id: "racks",
    name: "Aisle Boundaries",
    color: "#38bdf8",
    description: "Static storage racking boundaries establishing primary non-navigable constraints.",
  },
  {
    id: "corridor",
    name: "Transit Corridor",
    color: "#00e5ff",
    description: "Primary arterial transit lanes engineered for bidirectional AMR movement.",
  },
  {
    id: "slow",
    name: "Pedestrian Slow Zone",
    color: "#f87171",
    description: "Shared operator zones where velocity envelopes automatically throttle.",
  },
];

export function IndustrialEnvironment() {
  const [activeLayer, setActiveLayer] = useState<string>("all");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
          VYOM is designed for structured indoor industrial environments—such as manufacturing
          floors, distribution centers, and warehouse aisles—navigating predictable geometries while
          adaptively reacting to dynamic human and vehicular presence.
        </p>

        {/* Interactive Layer Toggles */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface-lowest border border-border-subtle">
          {LAYERS.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeLayer === layer.id
                  ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 font-semibold"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {layer.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="relative rounded-2xl border border-border-subtle bg-[#080b13] p-4 sm:p-6 overflow-hidden">
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/5 bg-[#05070d]">
          {/* Authentic Technical Floor Plan Asset */}
          <Image
            src="/images/projects/vyom_card.png"
            alt="VYOM Industrial Environment Spatial LiDAR Floor Plan"
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className={`object-contain transition-opacity duration-300 ${
              activeLayer === "slow"
                ? "filter hue-rotate-300 contrast-125"
                : activeLayer === "racks"
                ? "filter contrast-150 brightness-90"
                : ""
            }`}
          />

          {/* Interactive Highlight Overlays based on activeLayer */}
          {activeLayer === "slow" && (
            <div className="absolute inset-0 bg-red-950/20 pointer-events-none flex items-center justify-center">
              <div className="bg-[#0b0808]/90 border border-red-500/40 px-4 py-2 rounded-lg font-mono text-xs text-red-300 shadow-xl">
                HIGHLIGHTED: PEDESTRIAN PROXIMITY &amp; DECELERATION ZONE
              </div>
            </div>
          )}

          {activeLayer === "corridor" && (
            <div className="absolute inset-0 bg-cyan-950/20 pointer-events-none flex items-center justify-center">
              <div className="bg-[#040d12]/90 border border-cyan-500/40 px-4 py-2 rounded-lg font-mono text-xs text-cyan-300 shadow-xl">
                HIGHLIGHTED: CENTRAL TRANSIT ARTERY &amp; WAYPOINT PATH
              </div>
            </div>
          )}

          {/* Corner HUD coordinates */}
          <div className="absolute top-3 left-3 bg-[#060810]/80 backdrop-blur-sm px-2.5 py-1.5 rounded border border-white/10 font-mono text-[10px] text-text-muted">
            TOPOLOGY // RECTILINEAR WAREHOUSE GRID
          </div>
          <div className="absolute bottom-3 right-3 bg-[#060810]/80 backdrop-blur-sm px-2.5 py-1.5 rounded border border-white/10 font-mono text-[10px] text-text-muted">
            STATUS: SPATIAL CONCEPT MODEL
          </div>
        </div>

        {/* Selected Layer Note */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-text-muted border-t border-white/5 pt-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
            <span className="text-text-primary">
              {LAYERS.find((l) => l.id === activeLayer)?.name}:
            </span>
            <span>{LAYERS.find((l) => l.id === activeLayer)?.description}</span>
          </div>
          <span className="text-[11px] text-text-secondary">
            STRUCTURED INDOOR GEOMETRY · NOT A LIVE CUSTOMER INSTALLATION
          </span>
        </div>
      </div>
    </div>
  );
}
