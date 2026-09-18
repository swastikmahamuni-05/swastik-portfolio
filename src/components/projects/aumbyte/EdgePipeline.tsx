"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PipelineStage {
  id: string;
  step: string;
  title: string;
  domain: string;
  location: "Field Hardware" | "Edge Silicon" | "On-Device Model" | "Cellular Link";
  description: string;
  engineeringRationale: string;
}

const STAGES: PipelineStage[] = [
  {
    id: "camera",
    step: "01",
    title: "Camera Acquisition",
    domain: "Optical Sensing",
    location: "Field Hardware",
    description: "Captures high-resolution leaf canopy imagery focused on active vegetative growth zones.",
    engineeringRationale: "Optical capture is triggered at the plant canopy level, framing regions of interest directly under natural field lighting.",
  },
  {
    id: "image",
    step: "02",
    title: "Image Normalization",
    domain: "Preprocessing",
    location: "Edge Silicon",
    description: "Downsamples, crops, and color-balances the leaf image locally for model intake.",
    engineeringRationale: "Eliminates high transmission overhead by processing raw pixels in-memory rather than streaming video offsite.",
  },
  {
    id: "edge-ai",
    step: "03",
    title: "Edge AI Inference",
    domain: "Model Execution",
    location: "On-Device Model",
    description: "Evaluates the normalized crop image directly on localized compute without external cloud roundtrips.",
    engineeringRationale: "Guarantees evaluation even when rural telecom towers are unreachable or offline.",
  },
  {
    id: "detection",
    step: "04",
    title: "Pathogen Detection",
    domain: "Foliar Diagnostics",
    location: "On-Device Model",
    description: "Isolates symptomatic leaf discoloration and marks pathogen regions of interest.",
    engineeringRationale: "Distinguishes between healthy canopy chlorophyll and fungal / bacterial foliar lesions.",
  },
  {
    id: "alert",
    step: "05",
    title: "Direct Alert Dispatch",
    domain: "Actionable Notification",
    location: "Cellular Link",
    description: "Formulates a concise plain-text advisory dispatched over 2G/GSM cellular SMS.",
    engineeringRationale: "Reaches growers on standard mobile handsets with zero requirement for broadband data plans or complex apps.",
  },
];

export function EdgePipeline() {
  const [selectedStage, setSelectedStage] = useState<PipelineStage>(STAGES[2]); // Edge AI default
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-8">
      {/* Editorial Overview */}
      <div className="space-y-4 max-w-2xl text-text-secondary leading-relaxed text-sm sm:text-base">
        <p>
          Conventional precision agriculture solutions frequently depend on cloud computer vision
          backends, requiring high-bandwidth cellular links to stream images. In rural micro-plots
          and orchards, connectivity deserts cause these systems to fail during critical infection windows.
        </p>
        <p className="font-mono text-xs text-accent-cyan">
          {"//"} Design Principle: Shift computational intelligence directly to the physical field device.
        </p>
      </div>

      {/* Visual Pipeline Container */}
      <div className="w-full rounded-xl border border-border-subtle bg-[#06080e] p-6 sm:p-8 space-y-8 relative overflow-hidden shadow-2xl">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#103020_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-subtle/80 pb-4">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
              {"//"} ON-DEVICE COMPUTATION FLOW
            </span>
            <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface border border-border-subtle text-text-muted">
              Sequential Processing Chain
            </span>
          </div>

          {/* Horizontal / Stacked Pipeline Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {STAGES.map((stage, idx) => {
              const isSelected = selectedStage.id === stage.id;
              return (
                <motion.button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage)}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.4,
                    delay: shouldReduceMotion ? 0 : idx * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-emerald-400 flex flex-col justify-between min-h-[140px] ${
                    isSelected
                      ? "bg-surface-elevated border-emerald-400/80 shadow-lg shadow-emerald-500/10"
                      : "bg-surface-lowest/70 border-border-subtle hover:border-border-active"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="font-mono text-[10px] text-emerald-400 font-bold">
                        [{stage.step}] //
                      </span>
                      <span className="font-mono text-[9px] text-text-muted uppercase">
                        {stage.location}
                      </span>
                    </div>
                    <h4 className="font-sans text-sm font-semibold text-text-primary leading-snug">
                      {stage.title}
                    </h4>
                  </div>
                  <span className="font-mono text-[10px] text-text-muted mt-3 block border-t border-border-subtle/40 pt-2">
                    {stage.domain}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* SVG Connector Graphic */}
          <div className="hidden lg:flex justify-between items-center px-8">
            <svg
              className="w-full h-4 stroke-border-active overflow-visible"
              viewBox="0 0 800 16"
              fill="none"
              aria-hidden="true"
            >
              <motion.path
                d="M 10 8 L 790 8"
                stroke="rgba(16, 185, 129, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Stage Detail Inspector Panel */}
      <div className="rounded-xl border border-border-subtle bg-surface-lowest/40 p-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-3">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-emerald-400 font-semibold">{selectedStage.title}</span>
            <span className="text-text-muted">•</span>
            <span className="text-text-secondary">{selectedStage.domain}</span>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-surface border border-border-subtle text-text-muted">
            Host: {selectedStage.location}
          </span>
        </div>

        <p className="text-sm text-text-primary leading-relaxed">
          {selectedStage.description}
        </p>

        <p className="font-mono text-xs text-text-secondary pt-1 leading-relaxed">
          <span className="text-emerald-400 font-medium">Engineering Rationale:</span>{" "}
          {selectedStage.engineeringRationale}
        </p>
      </div>
    </div>
  );
}
