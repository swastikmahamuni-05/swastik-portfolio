"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FlowStep {
  index: string;
  stage: string;
  description: string;
  detail: string;
}

const FLOW_STEPS: FlowStep[] = [
  {
    index: "01",
    stage: "Heterogeneous Inputs",
    description: "Discrete ingestion of meteorological, oceanographic, bathymetric, and port market signals.",
    detail: "Raw feeds are parsed into structured temporal and geospatial data models.",
  },
  {
    index: "02",
    stage: "Specialized Agent Analysis",
    description: "Independent evaluation by domain-specific agents (Weather, Ocean, Habitat, Safety, Route, Market).",
    detail: "Each agent isolates risks, calculates regional thresholds, and identifies operational opportunities.",
  },
  {
    index: "03",
    stage: "Contextual Synthesis",
    description: "Multi-agent cross-referencing to eliminate conflicting or hazardous trade-offs.",
    detail: "Safety guardrails override commercial yield; high-swell zones trigger automatic detour advisories.",
  },
  {
    index: "04",
    stage: "Decision Support Advisory",
    description: "Generation of optimized, risk-rated passage corridors and arrival windows.",
    detail: "Presents transparent, scored choices rather than opaque autonomous commands.",
  },
  {
    index: "05",
    stage: "Human Operator Validation",
    description: "Operator reviews the synthesized recommendation alongside transparent situational rationales.",
    detail: "The human captain maintains complete operational command, aided by clear situational clarity.",
  },
];

export function DecisionFlow() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-lg bg-surface-elevated/40 border border-border-subtle/80 flex items-start gap-3">
        <span className="text-accent-cyan font-mono text-sm leading-none mt-0.5">ℹ</span>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          <strong className="text-text-primary font-semibold">Human-in-the-Loop Philosophy:</strong> ORCA
          is engineered as an advisory decision-support system. It never assumes autonomous vessel
          control, ensuring the marine operator retains full agency guided by synthesized intelligence.
        </p>
      </div>

      <div className="space-y-3">
        {FLOW_STEPS.map((step, idx) => (
          <motion.div
            key={step.index}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.4,
              delay: shouldReduceMotion ? 0 : idx * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/40 hover:bg-surface-lowest/70 hover:border-border-active transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent-cyan font-bold">
                  [{step.index}] //
                </span>
                <h4 className="text-base font-semibold text-text-primary">
                  {step.stage}
                </h4>
              </div>
              <span className="font-mono text-[11px] text-text-muted">
                Stage {idx + 1} of 5
              </span>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed mb-1.5">
              {step.description}
            </p>
            <p className="font-mono text-xs text-text-muted">
              ↳ {step.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
