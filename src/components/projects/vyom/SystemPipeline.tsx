"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Stage {
  id: string;
  step: string;
  name: string;
  shortDesc: string;
  conceptualExplanation: string;
  input: string;
  output: string;
}

const PIPELINE_STAGES: Stage[] = [
  {
    id: "perception",
    step: "01",
    name: "PERCEPTION",
    shortDesc: "Environmental and spatial sensing",
    conceptualExplanation:
      "Understanding people, obstacles, tags and relevant environmental information through sensors and vision.",
    input: "Sensors & Optical Streams",
    output: "Spatial & Object Entities",
  },
  {
    id: "localization",
    step: "02",
    name: "LOCALIZATION",
    shortDesc: "Spatial pose within floor boundaries",
    conceptualExplanation:
      "Determining the robot's position within its operating environment.",
    input: "Spatial Returns & Odometry",
    output: "Operating Pose Estimation",
  },
  {
    id: "planning",
    step: "03",
    name: "PLANNING",
    shortDesc: "Path & trajectory formulation",
    conceptualExplanation:
      "Determining an appropriate path or movement strategy.",
    input: "Destination & Clearance Map",
    output: "Trajectory Waypoint Splines",
  },
  {
    id: "navigation",
    step: "04",
    name: "NAVIGATION",
    shortDesc: "Movement execution & response",
    conceptualExplanation:
      "Executing movement through the environment while responding to the surroundings.",
    input: "Planned Trajectory & Obstacles",
    output: "Target Velocity Demands",
  },
  {
    id: "action",
    step: "05",
    name: "ACTION",
    shortDesc: "Physical actuation & safety response",
    conceptualExplanation:
      "Carrying out the intended robot behavior.",
    input: "Actuation Demands & Interlocks",
    output: "Physical Drive Execution",
  },
];

export function SystemPipeline() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedStage, setSelectedStage] = useState<string>("perception");

  const current = PIPELINE_STAGES.find((s) => s.id === selectedStage) || PIPELINE_STAGES[0];

  return (
    <div className="space-y-6">
      {/* Overview Note */}
      <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
        The autonomy architecture of VYOM is conceived as an ordered progression from raw spatial
        intake through physical execution. Each stage isolates responsibilities to ensure predictable,
        safe operation within indoor industrial spaces.
      </p>

      {/* 5-Stage Pipeline Progression Bar (Desktop & Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {PIPELINE_STAGES.map((stage, idx) => {
          const isSelected = selectedStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              onMouseEnter={() => setSelectedStage(stage.id)}
              className={`relative text-left p-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-accent-cyan flex flex-col justify-between group ${
                isSelected
                  ? "bg-[#0b101d] border-accent-cyan/60 shadow-lg shadow-accent-cyan/5"
                  : "bg-surface-lowest/40 border-border-subtle hover:border-border-active hover:bg-surface-lowest/70"
              }`}
            >
              {/* Connector Arrow (Desktop only, except last) */}
              {idx < PIPELINE_STAGES.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-white/20 group-hover:text-accent-cyan/50 transition-colors pointer-events-none text-xs">
                  →
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[10px] tracking-wider uppercase ${
                      isSelected ? "text-accent-cyan font-semibold" : "text-text-muted"
                    }`}
                  >
                    STAGE // {stage.step}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isSelected ? "bg-accent-cyan shadow-[0_0_8px_#00e5ff]" : "bg-white/20"
                    }`}
                  />
                </div>

                <h4
                  className={`font-mono text-sm sm:text-base font-bold tracking-tight mb-1 transition-colors ${
                    isSelected ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                  }`}
                >
                  {stage.name}
                </h4>

                <p className="text-xs text-text-muted leading-snug line-clamp-2">
                  {stage.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>INSPECTION</span>
                <span className={isSelected ? "text-accent-cyan" : "text-text-muted"}>
                  {isSelected ? "● ACTIVE" : "○ SELECT"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Inspector Card for Active Stage */}
      <motion.div
        key={current.id}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="p-6 sm:p-8 rounded-2xl border border-accent-cyan/30 bg-[#090d18] relative overflow-hidden"
      >
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 px-2.5 py-1 rounded">
                STAGE {current.step} {"//"} CONCEPT LAYER
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
                {current.name}
              </h3>
            </div>
            <span className="font-mono text-xs text-text-muted">
              SYSTEM ARCHITECTURE STRATUM
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                {"//"} FACTUAL CONCEPT DEFINITION
              </span>
              <p className="text-base sm:text-lg text-text-primary font-medium leading-relaxed">
                “{current.conceptualExplanation}”
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Represents an isolated conceptual subsystem within the autonomous robotics hierarchy,
                establishing clean abstraction boundaries between sensory intake, analytical modeling,
                and physical motor torque.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#05070d] border border-white/10 rounded-xl p-4 space-y-3 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-text-muted text-[10px] uppercase tracking-wider block">
                  LAYER INPUT
                </span>
                <span className="text-accent-cyan font-medium block">
                  {current.input}
                </span>
              </div>
              <div className="border-t border-white/5 pt-2 space-y-1">
                <span className="text-text-muted text-[10px] uppercase tracking-wider block">
                  LAYER OUTPUT
                </span>
                <span className="text-text-primary font-medium block">
                  {current.output}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Strict Anti-Fabrication Architectural Boundary Note */}
      <div className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/40 font-mono text-xs text-text-muted flex items-start gap-3">
        <span className="text-accent-cyan font-bold">ℹ</span>
        <p className="leading-relaxed">
          <span className="text-text-secondary font-semibold">Architectural Boundary:</span> These
          represent fundamental conceptual system layers. In keeping with factual engineering rigor,
          they define functional requirements and subsystem boundaries rather than claiming specific
          unverified planner or benchmark implementations.
        </p>
      </div>
    </div>
  );
}
