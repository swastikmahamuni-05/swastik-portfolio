"use client";

import React, { useState } from "react";

interface PerceptionTarget {
  id: string;
  code: string;
  name: string;
  category: "Safety" | "Spatial" | "Fiducial" | "Hazard";
  concept: string;
  operationalRole: string;
}

const TARGETS: PerceptionTarget[] = [
  {
    id: "people",
    code: "T-01",
    name: "People",
    category: "Safety",
    concept:
      "Visual and proximity recognition of human personnel within warehouse aisles.",
    operationalRole:
      "Projects a protective spatial envelope to trigger deceleration and prevent close encounters.",
  },
  {
    id: "obstacles",
    code: "T-02",
    name: "Obstacles",
    category: "Spatial",
    concept:
      "Detection of static infrastructure (racks, machinery) and transient floor items.",
    operationalRole:
      "Updates the spatial occupancy model to prevent collisions and route through clear transit paths.",
  },
  {
    id: "tags",
    code: "T-03",
    name: "Optical Tags",
    category: "Fiducial",
    concept:
      "Optical fiducial markers placed at checkpoints, docking bays, and charging pads.",
    operationalRole:
      "Enables terminal visual alignment when precision beyond broad spatial mapping is required.",
  },
  {
    id: "fire",
    code: "T-04",
    name: "Fire",
    category: "Hazard",
    concept:
      "Thermal and flame signature monitoring across industrial corridors.",
    operationalRole:
      "Detects abnormal thermal events to trigger safety alerts and avoid fire-compromised routes.",
  },
  {
    id: "smoke",
    code: "T-05",
    name: "Smoke",
    category: "Hazard",
    concept:
      "Visual opacity and airborne particulate sensing in enclosed warehouse zones.",
    operationalRole:
      "Identifies environmental hazard zones to divert robot transit and notify facility operators.",
  },
  {
    id: "environment",
    code: "T-06",
    name: "Environmental Conditions",
    category: "Safety",
    concept:
      "Monitoring ambient air parameters, volatile gases, and indoor climate shifts.",
    operationalRole:
      "Acts as a mobile environmental sensor suite complementing fixed facility infrastructure.",
  },
];

export function PerceptionTargets() {
  const [selectedId, setSelectedId] = useState<string>("people");

  const active = TARGETS.find((t) => t.id === selectedId) || TARGETS[0];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Conceptual Target Matrix */}
        <div className="lg:col-span-6 space-y-3">
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
            {"//"} SIX CONCEPTUAL PERCEPTION DOMAINS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TARGETS.map((target) => {
              const isSelected = selectedId === target.id;
              return (
                <button
                  key={target.id}
                  onClick={() => setSelectedId(target.id)}
                  onMouseEnter={() => setSelectedId(target.id)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-accent-cyan flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0b1120] border-accent-cyan/60 shadow-md shadow-accent-cyan/5"
                      : "bg-surface-lowest/40 border-border-subtle hover:border-border-active hover:bg-surface-lowest/70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-text-muted">
                      {target.code} {"//"} {target.category}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? "bg-accent-cyan" : "bg-white/20"
                      }`}
                    />
                  </div>
                  <h4
                    className={`font-mono text-sm font-semibold tracking-tight ${
                      isSelected ? "text-text-primary" : "text-text-secondary"
                    }`}
                  >
                    {target.name}
                  </h4>
                  <p className="text-[11px] text-text-muted mt-1 leading-snug line-clamp-2">
                    {target.concept}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Abstract Technical Perception Visualization */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative w-full aspect-[4/3] bg-[#070a12] rounded-2xl border border-border-subtle p-6 overflow-hidden flex flex-col justify-between">
            {/* HUD Header */}
            <div className="flex items-center justify-between text-[11px] font-mono border-b border-white/10 pb-2">
              <span className="text-accent-cyan flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
                PERCEPTION FIELD // CONCENTRIC OBSERVATION
              </span>
              <span className="text-text-muted">TARGET: {active.name.toUpperCase()}</span>
            </div>

            {/* Abstract Vector Visualization */}
            <div className="relative w-full flex-1 flex items-center justify-center">
              <svg
                className="w-full h-full max-h-56 select-none"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Concentric Observation Ranges */}
                <circle
                  cx="200"
                  cy="150"
                  r="120"
                  stroke="#00e5ff"
                  strokeDasharray="4 6"
                  strokeOpacity="0.12"
                  strokeWidth="1"
                />
                <circle
                  cx="200"
                  cy="150"
                  r="80"
                  stroke="#00e5ff"
                  strokeDasharray="2 4"
                  strokeOpacity="0.2"
                  strokeWidth="1"
                />
                <circle
                  cx="200"
                  cy="150"
                  r="40"
                  stroke="#00e5ff"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />

                {/* Central Robot Focal Marker */}
                <g transform="translate(200, 150)">
                  <rect
                    x="-12"
                    y="-16"
                    width="24"
                    height="32"
                    rx="3"
                    fill="#0f1626"
                    stroke="#00e5ff"
                    strokeWidth="1.5"
                  />
                  <circle cx="0" cy="0" r="3" fill="#ffffff" />
                  <polygon points="0,-12 4,-5 -4,-5" fill="#00e5ff" />
                  <text
                    x="0"
                    y="25"
                    fill="#849396"
                    fontFamily="monospace"
                    fontSize="7"
                    textAnchor="middle"
                  >
                    VYOM CORE
                  </text>
                </g>

                {/* Conceptual Perception Target Nodes */}
                {/* 1. People Node */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedId("people")}
                  opacity={selectedId === "people" ? 1 : 0.4}
                >
                  <circle
                    cx="290"
                    cy="90"
                    r="16"
                    fill="#f87171"
                    fillOpacity="0.15"
                    stroke="#f87171"
                    strokeWidth={selectedId === "people" ? 2 : 1}
                  />
                  <circle cx="290" cy="90" r="4" fill="#f87171" />
                  <line
                    x1="200"
                    y1="150"
                    x2="290"
                    y2="90"
                    stroke="#f87171"
                    strokeDasharray="2 2"
                    strokeOpacity={selectedId === "people" ? 0.6 : 0.15}
                  />
                  <text
                    x="290"
                    y="120"
                    fill="#f87171"
                    fontFamily="monospace"
                    fontSize="8"
                    textAnchor="middle"
                  >
                    PEOPLE
                  </text>
                </g>

                {/* 2. Obstacles Node */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedId("obstacles")}
                  opacity={selectedId === "obstacles" ? 1 : 0.4}
                >
                  <rect
                    x="80"
                    y="70"
                    width="28"
                    height="20"
                    rx="2"
                    fill="#38bdf8"
                    fillOpacity="0.15"
                    stroke="#38bdf8"
                    strokeWidth={selectedId === "obstacles" ? 2 : 1}
                  />
                  <line
                    x1="200"
                    y1="150"
                    x2="94"
                    y2="80"
                    stroke="#38bdf8"
                    strokeDasharray="2 2"
                    strokeOpacity={selectedId === "obstacles" ? 0.6 : 0.15}
                  />
                  <text
                    x="94"
                    y="105"
                    fill="#38bdf8"
                    fontFamily="monospace"
                    fontSize="8"
                    textAnchor="middle"
                  >
                    OBSTACLES
                  </text>
                </g>

                {/* 3. Tags Node */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedId("tags")}
                  opacity={selectedId === "tags" ? 1 : 0.4}
                >
                  <circle
                    cx="310"
                    cy="210"
                    r="14"
                    fill="#a78bfa"
                    fillOpacity="0.15"
                    stroke="#a78bfa"
                    strokeWidth={selectedId === "tags" ? 2 : 1}
                  />
                  <rect x="306" y="206" width="8" height="8" fill="#a78bfa" />
                  <line
                    x1="200"
                    y1="150"
                    x2="310"
                    y2="210"
                    stroke="#a78bfa"
                    strokeDasharray="2 2"
                    strokeOpacity={selectedId === "tags" ? 0.6 : 0.15}
                  />
                  <text
                    x="310"
                    y="236"
                    fill="#a78bfa"
                    fontFamily="monospace"
                    fontSize="8"
                    textAnchor="middle"
                  >
                    TAGS
                  </text>
                </g>

                {/* 4. Fire Node */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedId("fire")}
                  opacity={selectedId === "fire" ? 1 : 0.4}
                >
                  <polygon
                    points="90,210 105,235 75,235"
                    fill="#fb923c"
                    fillOpacity="0.15"
                    stroke="#fb923c"
                    strokeWidth={selectedId === "fire" ? 2 : 1}
                  />
                  <line
                    x1="200"
                    y1="150"
                    x2="90"
                    y2="225"
                    stroke="#fb923c"
                    strokeDasharray="2 2"
                    strokeOpacity={selectedId === "fire" ? 0.6 : 0.15}
                  />
                  <text
                    x="90"
                    y="250"
                    fill="#fb923c"
                    fontFamily="monospace"
                    fontSize="8"
                    textAnchor="middle"
                  >
                    FIRE
                  </text>
                </g>

                {/* 5. Smoke & Environment Nodes */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedId("smoke")}
                  opacity={selectedId === "smoke" ? 1 : 0.4}
                >
                  <circle
                    cx="190"
                    cy="45"
                    r="12"
                    fill="#94a3b8"
                    fillOpacity="0.15"
                    stroke="#94a3b8"
                    strokeWidth={selectedId === "smoke" ? 2 : 1}
                  />
                  <text
                    x="190"
                    y="30"
                    fill="#94a3b8"
                    fontFamily="monospace"
                    fontSize="8"
                    textAnchor="middle"
                  >
                    SMOKE
                  </text>
                </g>

                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedId("environment")}
                  opacity={selectedId === "environment" ? 1 : 0.4}
                >
                  <circle
                    cx="200"
                    cy="255"
                    r="12"
                    fill="#34d399"
                    fillOpacity="0.15"
                    stroke="#34d399"
                    strokeWidth={selectedId === "environment" ? 2 : 1}
                  />
                  <text
                    x="200"
                    y="280"
                    fill="#34d399"
                    fontFamily="monospace"
                    fontSize="8"
                    textAnchor="middle"
                  >
                    ENVIRONMENT
                  </text>
                </g>
              </svg>
            </div>

            {/* Selected Target Description Footer */}
            <div className="bg-[#05070d]/90 rounded-lg p-3 border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-text-primary font-semibold">
                  {active.name} {"//"} OPERATIONAL ROLE
                </span>
                <span className="text-accent-cyan">{active.category}</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {active.operationalRole}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
