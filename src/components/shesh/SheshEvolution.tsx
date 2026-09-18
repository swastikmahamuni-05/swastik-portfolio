"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { sheshData } from "@/data/shesh";
import { SheshLogo } from "./SheshLogo";

const LEVELS = sheshData.evolutionLevels;

export function SheshEvolution() {
  const shouldReduceMotion = useReducedMotion();
  const [activeLevelIdx, setActiveLevelIdx] = useState<number>(0);

  const active = LEVELS[activeLevelIdx];

  return (
    <section id="evolution" className="py-16 sm:py-24 border-t border-border-subtle">
      {/* 1. WHY SHESH? Statement Block */}
      <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 uppercase tracking-widest">
          <span>{"//"} WHY</span>
          <SheshLogo inline className="h-3.5 w-auto" />
          <span>?</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary leading-snug">
          “<SheshLogo inline className="h-7 sm:h-8 lg:h-9 w-auto inline-block align-baseline mr-2" /> is an exploration into persistent conversational intelligence—combining contextual dialogue, longitudinal memory, and coordinated agency.”
        </h2>
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed pt-2">
          Most conversational tools remain transient: each session starts from zero, agency is limited
          to generating text, and intelligence is confined to a single browser window. SHESH is
          architected around conversational intelligence as the foundational interface, evolving through
          four intentional stages toward proactive, coordinated agency.
        </p>
      </div>

      {/* 2. CURRENT VS VISION COMPARISON */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="p-6 rounded-2xl border border-border-subtle bg-[#101218] space-y-3">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-cyan-300 font-bold uppercase tracking-wider">
              CURRENT FOCUS
            </span>
            <span className="px-2 py-0.5 rounded bg-[#171A22] border border-border-subtle text-text-secondary text-[10px]">
              LEVEL 01 BASELINE
            </span>
          </div>
          <h4 className="font-mono text-base font-semibold text-text-primary">
            Conversational Concept &amp; Portfolio Experience
          </h4>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Focused on architectural formulation, conversational prototypes, and the foundational
            design philosophy of what a personal multi-agent companion must look, feel, and behave like.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-cyan-500/30 bg-[#0c101a] space-y-3">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-cyan-400 font-bold uppercase tracking-wider">
              LONG-TERM VISION
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px]">
              LEVELS 03 &amp; 04
            </span>
          </div>
          <h4 className="font-mono text-base font-semibold text-text-primary">
            Agentic Execution &amp; Distributed Multi-Agent Fabric
          </h4>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            An ambient intelligence coordinating specialized agents across local devices, services,
            and persistent memory to execute real-world tasks on behalf of the user.
          </p>
        </div>
      </div>

      {/* 3. THE FOUR EVOLUTIONARY LEVELS */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono text-xs text-text-muted uppercase tracking-wider">
            <span>{"//"} THE EVOLUTION OF</span>
            <SheshLogo inline className="h-3.5 w-auto" />
          </div>
          <span className="font-mono text-xs text-text-muted">
            PROGRESSION: LEVEL 01 → LEVEL 04
          </span>
        </div>

        {/* Connected Progression Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {LEVELS.map((lvl, idx) => {
            const isSelected = activeLevelIdx === idx;
            const isCurrent = lvl.classification === "CURRENT STATUS";

            return (
              <button
                key={lvl.level}
                onClick={() => setActiveLevelIdx(idx)}
                onMouseEnter={() => setActiveLevelIdx(idx)}
                className={`relative p-5 rounded-2xl border text-left transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-cyan-400 flex flex-col justify-between group ${
                  isSelected
                    ? "bg-[#0c101d] border-cyan-400/60 shadow-lg shadow-cyan-400/5"
                    : "bg-[#101218] border-border-subtle hover:border-border-active hover:bg-[#131620]"
                }`}
              >
                {/* Visual progression indicator between cards */}
                {idx < LEVELS.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-white/20 group-hover:text-cyan-400/60 transition-colors pointer-events-none font-mono text-xs">
                    →
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] mb-3">
                    <span
                      className={`font-semibold tracking-wider ${
                        isSelected ? "text-cyan-300" : "text-text-muted"
                      }`}
                    >
                      LEVEL // {lvl.level}
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider ${
                        isCurrent
                          ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                          : "bg-[#171A22] text-text-muted border border-border-subtle"
                      }`}
                    >
                      {isCurrent ? "CURRENT" : "VISION"}
                    </span>
                  </div>

                  <h3
                    className={`font-mono text-base font-bold tracking-tight mb-1 transition-colors ${
                      isSelected ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                    }`}
                  >
                    {lvl.name}
                  </h3>

                  <p className="font-mono text-xs text-text-muted mb-2">
                    {lvl.horizon}
                  </p>

                  <p className="text-xs text-text-secondary leading-snug line-clamp-2">
                    {lvl.shortSummary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-text-muted">
                  <span>TIER {lvl.level}</span>
                  <span className={isSelected ? "text-cyan-300 font-semibold" : "text-text-muted"}>
                    {isSelected ? "● INSPECTING" : "○ SELECT"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Selected Level */}
        <motion.div
          key={active.level}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-[#090d18] relative overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 rounded">
                HORIZON {active.level} {"//"} {active.name}
              </span>
              <span className="font-mono text-xs text-text-muted uppercase">
                {active.horizon}
              </span>
            </div>
            <span
              className={`font-mono text-xs px-2.5 py-0.5 rounded ${
                active.classification === "CURRENT STATUS"
                  ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 font-semibold"
                  : "text-text-muted bg-[#171A22] border border-border-subtle"
              }`}
            >
              {active.classification}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                {"//"} ARCHITECTURAL DEFINITION
              </span>
              <p className="text-base sm:text-lg font-medium text-text-primary leading-relaxed">
                “{active.description}”
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                {active.relationship}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#05070c] border border-white/10 p-4 rounded-xl space-y-2 font-mono text-xs">
              <div className="text-cyan-300 font-semibold text-[11px] uppercase tracking-wider">
                CAPABILITY SCOPE
              </div>
              <p className="text-text-secondary leading-relaxed">
                {active.capabilityScope}
              </p>
              <div className="pt-2 border-t border-white/5 text-[10px] text-text-muted">
                {active.classification === "CURRENT STATUS"
                  ? "✓ Actively prototyped within current architecture"
                  : "○ Future design target — not yet implemented"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
