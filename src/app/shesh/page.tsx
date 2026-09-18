import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SheshHero } from "@/components/shesh/SheshHero";
import { SheshLogo } from "@/components/shesh/SheshLogo";
import { SheshEvolution } from "@/components/shesh/SheshEvolution";
import { SheshArchitecture } from "@/components/shesh/SheshArchitecture";
import { SheshSurfaces } from "@/components/shesh/SheshSurfaces";
import { SheshPersonality } from "@/components/shesh/SheshPersonality";
import { SheshFooter } from "@/components/shesh/SheshFooter";

export const metadata: Metadata = {
  title: "SHESH — Personal Multi-Agent AI Companion | Swastik Mahamuni",
  description:
    "An evolving personal AI companion designed to move from conversation toward context, agency and coordinated multi-agent intelligence.",
};

export default function SheshPage() {
  return (
    <main className="min-h-screen bg-[#08090D] text-text-primary px-6 pt-3 pb-16 md:px-12 md:pt-4 max-w-7xl mx-auto w-full space-y-8 md:space-y-12">
      {/* Streamlined Sub-Header */}
      <div className="flex items-center justify-between border-b border-border-subtle/60 pb-3 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <SheshLogo inline className="h-4 w-auto" />
          <span className="text-text-muted/60 text-[10px]">·</span>
          <span className="text-text-muted text-[11px] uppercase tracking-wider">
            ACTIVE DEVELOPMENT
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
          <a
            href="#evolution"
            className="text-text-muted hover:text-cyan-300 transition-colors hidden sm:inline-block"
          >
            Evolution
          </a>
          <a
            href="#architecture"
            className="text-text-muted hover:text-cyan-300 transition-colors hidden sm:inline-block"
          >
            Architecture
          </a>
          <Link
            href="/work"
            className="px-2.5 py-1 rounded bg-[#101218] border border-border-subtle text-text-secondary hover:text-text-primary hover:border-cyan-400/40 transition-colors text-[11px] inline-flex items-center gap-1"
          >
            <span>← EXIT</span>
          </Link>
        </div>
      </div>

      {/* 01. HERO EXPERIENCE WITH THE SHESH CORE */}
      <SheshHero />

      {/* 02. WHY SHESH? + FOUR EVOLUTIONARY HORIZONS */}
      <SheshEvolution />

      {/* 03. MULTI-AGENT CONCEPT & ORCHESTRATION TOPOLOGY */}
      <SheshArchitecture />

      {/* 04. CROSS-DEVICE VISION: ONE INTELLIGENCE, MULTIPLE SURFACES */}
      <SheshSurfaces />

      {/* 05. PERSONALITY NOT A PERSONA */}
      <SheshPersonality />

      {/* 06. BUILD STATUS & ECOSYSTEM EXIT POINTS */}
      <SheshFooter />
    </main>
  );
}
