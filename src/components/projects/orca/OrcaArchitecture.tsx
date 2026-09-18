"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AgentNode {
  id: string;
  name: string;
  role: string;
  focus: string;
  inputs: string;
  status: "Designed" | "Proposed";
}

const AGENTS: AgentNode[] = [
  {
    id: "weather",
    name: "Weather Agent",
    role: "Atmospheric Assessment",
    focus: "Parses meteorological forecast matrices, squall trajectories, and barometric trends.",
    inputs: "Barometric trends, precipitation forecasts, squall warnings",
    status: "Designed",
  },
  {
    id: "ocean",
    name: "Ocean Agent",
    role: "Hydrodynamic Modeling",
    focus: "Synthesizes wave height, primary swell intervals, and wind shear vectors.",
    inputs: "Swell period, significant wave height, surface currents",
    status: "Designed",
  },
  {
    id: "fishing",
    name: "Fishing Habitat Agent",
    role: "Biological Convergence",
    focus: "Correlates thermal edges (MODIS SST) and chlorophyll plumes with historical habitat grounds.",
    inputs: "Sea Surface Temperature gradients, Chlorophyll-a optics, historical logs",
    status: "Designed",
  },
  {
    id: "safety",
    name: "Safety Agent",
    role: "Hazard & Bathymetry Guardrails",
    focus: "Evaluates transit corridors against submerged hazards, shallow shelf breaks, and coastal warnings.",
    inputs: "Bathymetric contours, submerged shoals, maritime exclusion zones",
    status: "Designed",
  },
  {
    id: "route",
    name: "Route Optimization Agent",
    role: "Passage Planning",
    focus: "Computes fuel-efficient transit corridors balancing voyage duration against sea agitation.",
    inputs: "Waypoint vectors, fuel consumption estimates, sea state friction",
    status: "Designed",
  },
  {
    id: "market",
    name: "Market Intelligence Agent",
    role: "Commercial Yield Analysis",
    focus: "Evaluates landing harbor auction prices to inform optimal catch return timing.",
    inputs: "Port auction rates, species landing prices, harbor proximity",
    status: "Designed",
  },
];

export function OrcaArchitecture() {
  const [selectedAgent, setSelectedAgent] = useState<AgentNode>(AGENTS[2]); // Fishing Habitat default
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-8">
      {/* Editorial Architecture Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
        <div>
          <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block">
            {"//"} MULTI-AGENT SYNTHESIS TOPOLOGY
          </span>
          <p className="text-xs text-text-muted mt-0.5">
            Interactive system architecture · Select any agent node to inspect functional scope
          </p>
        </div>
        <div className="inline-flex items-center gap-2 font-mono text-[11px] text-text-secondary bg-surface px-2.5 py-1 rounded border border-border-subtle">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          <span>Status: Designed Architecture</span>
        </div>
      </div>

      {/* SVG Interactive Architecture Canvas */}
      <div className="w-full rounded-xl border border-border-subtle bg-[#06080e] p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        {/* Visual Background Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#151d2f_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        {/* Responsive Grid of Agents (6 Inputs -> Central Decision -> Explanation) */}
        <div className="relative z-10 space-y-10">
          {/* Tier 1: Ingestion & Specialized Agents */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted/80 block mb-4">
              [Tier 1] Specialized Information Intake Agents
            </span>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {AGENTS.map((agent, i) => {
                const isSelected = selectedAgent.id === agent.id;
                return (
                  <motion.button
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent)}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay: shouldReduceMotion ? 0 : i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`p-3.5 rounded-lg border text-left transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-accent-cyan flex flex-col justify-between min-h-[110px] ${
                      isSelected
                        ? "bg-surface-elevated border-accent-cyan shadow-md shadow-accent-cyan/10"
                        : "bg-surface-lowest/60 border-border-subtle hover:border-border-active"
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] text-accent-cyan block mb-1">
                        0{i + 1} {"//"}
                      </span>
                      <h4 className="font-sans text-xs sm:text-sm font-semibold text-text-primary leading-tight">
                        {agent.name.replace(" Agent", "")}
                      </h4>
                    </div>
                    <span className="font-mono text-[10px] text-text-muted mt-2 block">
                      {agent.role}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* SVG Connector Flow (Animated Paths) */}
          <div className="relative py-2 flex justify-center">
            <svg
              className="w-full max-w-xl h-12 stroke-border-active overflow-visible"
              viewBox="0 0 600 48"
              fill="none"
              aria-hidden="true"
            >
              <motion.path
                d="M 50 0 C 50 24, 300 24, 300 48"
                stroke="rgba(0, 240, 255, 0.4)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <motion.path
                d="M 150 0 C 150 24, 300 24, 300 48"
                stroke="rgba(0, 240, 255, 0.4)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
              />
              <motion.path
                d="M 300 0 L 300 48"
                stroke="rgba(0, 240, 255, 0.7)"
                strokeWidth="1.5"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeInOut" }}
              />
              <motion.path
                d="M 450 0 C 450 24, 300 24, 300 48"
                stroke="rgba(0, 240, 255, 0.4)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 550 0 C 550 24, 300 24, 300 48"
                stroke="rgba(0, 240, 255, 0.4)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Tier 2: Central Decision Synthesis Layer */}
          <div className="max-w-xl mx-auto text-center space-y-4">
            <div className="p-5 rounded-xl border border-accent-cyan/40 bg-surface-elevated/70 shadow-lg shadow-accent-cyan/5">
              <span className="font-mono text-[10px] text-accent-cyan uppercase tracking-widest block mb-1">
                [Tier 2] Multi-Factor Evaluation
              </span>
              <h4 className="text-base sm:text-lg font-bold text-text-primary">
                Recommendation &amp; Decision Synthesis Layer
              </h4>
              <p className="text-xs text-text-secondary mt-1 max-w-md mx-auto leading-relaxed">
                Weighs safety constraints, weather hazard limits, biological habitat probability,
                and harbor landing economics into unified voyage advisories.
              </p>
            </div>

            {/* Downward Connector to Tier 3 */}
            <div className="flex justify-center">
              <span className="font-mono text-xs text-accent-cyan animate-pulse">↓</span>
            </div>

            {/* Tier 3: Human-in-the-Loop Explanation Layer */}
            <div className="p-4 rounded-lg border border-border-subtle bg-surface-lowest/70 max-w-md mx-auto">
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-0.5">
                [Tier 3] Explainability &amp; Advisory Output
              </span>
              <h5 className="text-xs sm:text-sm font-semibold text-text-primary">
                Operator Decision Support Interface
              </h5>
              <p className="text-[11px] text-text-muted mt-1">
                Presents contextual rationales (why a specific waypoint or departure time is advised)
                for final human validation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Agent Inspector Panel */}
      <div className="rounded-xl border border-border-subtle bg-surface-lowest/40 p-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-3">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-accent-cyan font-semibold">{selectedAgent.name}</span>
            <span className="text-text-muted">•</span>
            <span className="text-text-secondary">{selectedAgent.role}</span>
          </div>
          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface border border-border-subtle text-text-muted">
            [ {selectedAgent.status.toUpperCase()} ]
          </span>
        </div>

        <p className="text-sm text-text-primary leading-relaxed">
          {selectedAgent.focus}
        </p>

        <div className="flex items-center gap-2 font-mono text-xs text-text-muted pt-1">
          <span className="text-accent-cyan font-medium">Inputs:</span>
          <span>{selectedAgent.inputs}</span>
        </div>
      </div>
    </div>
  );
}
