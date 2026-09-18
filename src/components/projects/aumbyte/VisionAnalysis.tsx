"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface VisionFilter {
  id: string;
  label: string;
  description: string;
}

const FILTERS: VisionFilter[] = [
  {
    id: "canopy",
    label: "Full Canopy Frame",
    description: "Optical acquisition calibrated for leaf structure boundaries and illumination variance.",
  },
  {
    id: "roi",
    label: "Pathogen ROI Bounding",
    description: "Localized bounding box isolating foliar lesions (e.g. Cercospora leaf spot symptoms).",
  },
  {
    id: "chlorophyll",
    label: "Canopy Tissue Stratum",
    description: "Distinguishes healthy chlorophyll-rich tissue from necrotic surface discolouration.",
  },
];

export function VisionAnalysis() {
  const [activeFilter, setActiveFilter] = useState<string>("roi");

  return (
    <div className="space-y-6">
      {/* Visual Header & Clarification */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-subtle pb-4">
        <div>
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block">
            {"//"} COMPUTER VISION INTERFACE VIEW
          </span>
          <p className="text-xs text-text-muted mt-0.5">
            Foliage camera viewfinder layout with localized symptom bounding
          </p>
        </div>
        <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-surface border border-border-subtle text-text-secondary self-start sm:self-auto">
          [ PROTOTYPE INTERFACE · NO FABRICATED CONFIDENCE VALUES ]
        </span>
      </div>

      {/* Filter Mode Controls */}
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Vision inspection layer toggles">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={isActive}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                isActive
                  ? "bg-surface-elevated text-emerald-400 border border-emerald-500/40 shadow-sm"
                  : "bg-surface-lowest/60 text-text-muted hover:text-text-secondary border border-border-subtle"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  isActive ? "bg-emerald-400" : "bg-text-muted/40"
                }`}
              />
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dominant Image Container */}
      <div className="relative w-full aspect-[16/10] rounded-xl bg-[#06080e] border border-border-subtle overflow-hidden shadow-2xl group">
        <Image
          src="/images/projects/aumbyte_card.png"
          alt="AUMByte computer vision leaf canopy analysis viewfinder"
          fill
          quality={95}
          sizes="(max-width: 1024px) 100vw, 850px"
          className="object-cover object-center"
          priority={false}
        />

        {/* Dynamic Highlight Overlays based on active filter */}
        <AnimatePresence>
          {activeFilter === "roi" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="w-48 h-32 border-2 border-emerald-400/80 rounded bg-emerald-500/10 flex items-start justify-end p-1.5">
                <span className="font-mono text-[9px] bg-emerald-950/90 text-emerald-300 px-1 py-0.5 rounded border border-emerald-400/40">
                  ROI // PATHOGEN_DETECT
                </span>
              </div>
            </motion.div>
          )}

          {activeFilter === "chlorophyll" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-emerald-950/20 pointer-events-none flex items-center justify-center"
            >
              <div className="font-mono text-[11px] bg-surface-elevated/90 text-emerald-300 px-3 py-1.5 rounded border border-emerald-500/40 shadow-xl">
                CHLOROPHYLL EQUILIBRIUM: CANOPY STABILITY
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle Scan Beam on Group Hover */}
        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent top-0 group-hover:top-full transition-all duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-100" />

        {/* Bottom Metadata Ribbon */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-text-muted bg-canvas/80 backdrop-blur-md px-3 py-1.5 rounded border border-border-subtle/80">
          <span>OPTICAL INSPECTION VIEW // HUD</span>
          <span>FILTER: {FILTERS.find((f) => f.id === activeFilter)?.label}</span>
        </div>
      </div>

      {/* Narrative Legend */}
      <div className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/40 space-y-2">
        <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wide block">
          Active Diagnostic Layer: {FILTERS.find((f) => f.id === activeFilter)?.label}
        </span>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          {FILTERS.find((f) => f.id === activeFilter)?.description}
        </p>
      </div>
    </div>
  );
}
