"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LayerOption {
  id: string;
  name: string;
  description: string;
  badge: string;
}

const LAYERS: LayerOption[] = [
  {
    id: "ocean",
    name: "Ocean Conditions",
    description: "Visualizes bathymetric depth contours (-120m to -1450m) and thermal upwelling gradient fronts.",
    badge: "Hydrodynamics",
  },
  {
    id: "fishing",
    name: "Habitat Convergence",
    description: "Delineates habitat probability zones correlated from ocean optic chlorophyll plumes.",
    badge: "Biological",
  },
  {
    id: "safety",
    name: "Safety & Hazards",
    description: "Highlights navigation hazard markers (shoal sectors, swell break points, shallow reefs).",
    badge: "Guardrails",
  },
  {
    id: "route",
    name: "Passage Corridor",
    description: "Illustrates planned passage trajectory connecting departure point to convergence target.",
    badge: "Navigation",
  },
  {
    id: "market",
    name: "Market Landing",
    description: "Associates return vectors with harbor landing facilities and auction timing windows.",
    badge: "Commercial",
  },
];

export function GeospatialExperience() {
  const [activeLayers, setActiveLayers] = useState<Record<string, boolean>>({
    ocean: true,
    fishing: true,
    safety: true,
    route: true,
    market: false,
  });

  const toggleLayer = (id: string) => {
    setActiveLayers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: Explicit Conceptual Clarification */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-subtle pb-4">
        <div>
          <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block">
            {"//"} GEOSPATIAL INTERACTION PROTOTYPE
          </span>
          <p className="text-xs text-text-muted mt-0.5">
            Demonstrates multi-layer map interaction for high-contrast offshore marine readability
          </p>
        </div>
        <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-surface border border-border-subtle text-text-secondary self-start sm:self-auto">
          [ CONCEPTUAL UI VISUALIZATION · NO LIVE TELEMETRY ]
        </span>
      </div>

      {/* Interactive Layer Toggles */}
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Conceptual map layer toggles">
        {LAYERS.map((layer) => {
          const isActive = !!activeLayers[layer.id];
          return (
            <button
              key={layer.id}
              onClick={() => toggleLayer(layer.id)}
              aria-pressed={isActive}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-accent-cyan ${
                isActive
                  ? "bg-surface-elevated text-accent-cyan border border-border-active shadow-sm"
                  : "bg-surface-lowest/60 text-text-muted hover:text-text-secondary border border-border-subtle"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  isActive ? "bg-accent-cyan" : "bg-text-muted/40"
                }`}
              />
              <span>{layer.name}</span>
            </button>
          );
        })}
      </div>

      {/* Geospatial Visual Container */}
      <div className="relative w-full aspect-[16/10] rounded-xl bg-[#06080e] border border-border-subtle overflow-hidden shadow-2xl">
        <Image
          src="/images/projects/orca_card.png"
          alt="ORCA conceptual geospatial interface"
          fill
          quality={95}
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover object-center"
          priority={false}
        />

        {/* Dynamic Highlight Overlays corresponding to active layer toggles */}
        <AnimatePresence>
          {activeLayers.safety && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="w-16 h-16 rounded-full border border-red-500/40 animate-ping opacity-25" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeLayers.fishing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-[35%] right-[28%] pointer-events-none"
            >
              <div className="px-2 py-0.5 rounded bg-accent-cyan/15 border border-accent-cyan/40 font-mono text-[9px] text-accent-cyan">
                LAYER ACTIVE: CONVERGENCE
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Bar: Interface Meta */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-text-muted bg-canvas/80 backdrop-blur-md px-3 py-1.5 rounded border border-border-subtle/80">
          <span>HIGH-CONTRAST OFFSHORE SPECIFICATION</span>
          <span>LAYER CHANNELS: {Object.values(activeLayers).filter(Boolean).length} / 5</span>
        </div>
      </div>

      {/* Active Layers Legend Description */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
        {LAYERS.filter((l) => activeLayers[l.id]).map((layer) => (
          <div
            key={layer.id}
            className="p-3 rounded-lg border border-border-subtle bg-surface-lowest/40 space-y-1"
          >
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="text-accent-cyan">{layer.name}</span>
              <span className="text-text-muted">{layer.badge}</span>
            </div>
            <p className="text-xs text-text-secondary leading-normal">
              {layer.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
