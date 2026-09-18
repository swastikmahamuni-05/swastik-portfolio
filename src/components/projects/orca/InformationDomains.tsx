"use client";

import React, { useState } from "react";

interface DomainItem {
  id: string;
  index: string;
  name: string;
  category: "Atmospheric" | "Oceanographic" | "Navigation" | "Commercial";
  description: string;
  keySignals: string[];
}

const DOMAINS: DomainItem[] = [
  {
    id: "weather",
    index: "01",
    name: "Weather Forecasts",
    category: "Atmospheric",
    description: "Multi-day meteorological patterns, barometric pressure shifts, and squall advisories.",
    keySignals: ["Precipitation", "Cloud Cover", "Barometric Pressure"],
  },
  {
    id: "wind",
    index: "02",
    name: "Wind & Sea Conditions",
    category: "Atmospheric",
    description: "Directional wind shear, gale warnings, and surface agitation impacting vessel transit.",
    keySignals: ["Sustained Velocity", "Gust Vectors", "Beaufort Scale"],
  },
  {
    id: "wave",
    index: "03",
    name: "Wave Height & Swell",
    category: "Oceanographic",
    description: "Primary and secondary swell periods, wave interference, and coastal breaker intensity.",
    keySignals: ["Significant Wave Height", "Swell Interval", "Steepness Index"],
  },
  {
    id: "sst",
    index: "04",
    name: "Sea Surface Temp (SST)",
    category: "Oceanographic",
    description: "Satellite thermal radiometry mapping thermal fronts and upwelling boundary gradients.",
    keySignals: ["Thermal Edges", "Upwelling Zones", "MODIS Radiometry"],
  },
  {
    id: "chlorophyll",
    index: "05",
    name: "Chlorophyll & Ocean Optics",
    category: "Oceanographic",
    description: "Phytoplankton bloom concentrations indicating biological productivity and feed zones.",
    keySignals: ["Chlorophyll-a Plumes", "Water Clarity", "Nutrient Stratification"],
  },
  {
    id: "fishing",
    index: "06",
    name: "Historical Fishing Patterns",
    category: "Commercial",
    description: "Seasonal aggregation corridors and historic catch distribution records.",
    keySignals: ["Seasonal Corridors", "Bathymetric Association", "Habitation History"],
  },
  {
    id: "hazards",
    index: "07",
    name: "Maritime Hazards",
    category: "Navigation",
    description: "Submerged rocks, dynamic sand shoals, restricted boundaries, and marine sanctuary corridors.",
    keySignals: ["Shallow Shoals", "Navigational Obstructions", "Exclusion Boundaries"],
  },
  {
    id: "market",
    index: "08",
    name: "Market Landing Prices",
    category: "Commercial",
    description: "Harbor-specific auction values, demand fluctuations, and species landing rates.",
    keySignals: ["Port Auction Rates", "Species Demand", "Fuel Economy Tradeoffs"],
  },
];

export function InformationDomains() {
  const [selectedDomain, setSelectedDomain] = useState<DomainItem>(DOMAINS[3]); // Default to SST

  return (
    <div className="space-y-8">
      {/* Editorial Narrative */}
      <div className="space-y-4 max-w-2xl text-text-secondary leading-relaxed text-sm sm:text-base">
        <p>
          Marine operators and smallholder fishers currently navigate by mentally combining up to
          eight disparate information streams while offshore with intermittent connectivity.
        </p>
        <p className="font-mono text-xs text-text-muted">
          {"//"} The operational challenge is not obtaining raw numbers—it is turning fragmented data into a unified, safe operational decision.
        </p>
      </div>

      {/* Interactive Domain Matrix & Synthesis Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: The 8 Input Domains (7 cols) */}
        <div className="lg:col-span-7 space-y-2.5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted block mb-3">
            [08] Ingestion Streams // Discrete Marine Domains
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {DOMAINS.map((domain) => {
              const isSelected = selectedDomain.id === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain)}
                  className={`text-left p-3.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-accent-cyan ${
                    isSelected
                      ? "bg-surface-elevated border-accent-cyan text-text-primary shadow-sm"
                      : "bg-surface-lowest/50 border-border-subtle hover:border-border-active text-text-secondary"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-[11px] text-accent-cyan font-medium">
                      {domain.index} {"//"}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted uppercase">
                      {domain.category}
                    </span>
                  </div>
                  <h4 className="font-sans text-xs sm:text-sm font-semibold tracking-tight text-text-primary">
                    {domain.name}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Domain Focus & Synthesis Hub (5 cols) */}
        <div className="lg:col-span-5 rounded-xl border border-border-subtle bg-surface-lowest/60 p-6 space-y-6 lg:sticky lg:top-28">
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <span className="font-mono text-xs text-accent-cyan">
              STREAM DETAIL // [{selectedDomain.index}]
            </span>
            <span className="font-mono text-[11px] text-text-muted px-2 py-0.5 rounded bg-surface border border-border-subtle">
              {selectedDomain.category}
            </span>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-bold tracking-tight text-text-primary">
              {selectedDomain.name}
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {selectedDomain.description}
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-border-subtle/60">
            <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block">
              Primary Extracted Signals
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedDomain.keySignals.map((signal) => (
                <span
                  key={signal}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-elevated text-text-secondary border border-border-subtle"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          {/* Convergence Arrow into ORCA Node */}
          <div className="p-4 rounded-lg bg-surface border border-border-subtle/80 space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-text-muted">Target Synthesis Node</span>
              <span className="text-accent-cyan">ORCA // DECISION ENGINE</span>
            </div>
            <p className="text-[11px] text-text-secondary leading-normal">
              Feeds into specialized agent parsing pipelines before unified multi-factor evaluation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
