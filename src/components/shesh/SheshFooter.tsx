"use client";

import React from "react";
import Link from "next/link";
import { SheshLogo } from "./SheshLogo";

const EXIT_POINTS = [
  {
    name: "WORK DIRECTORY",
    href: "/work",
    description: "Explore engineering projects, case studies, and systems.",
    tag: "01 // SYSTEMS",
  },
  {
    name: "ABOUT SWASTIK",
    href: "/about",
    description: "Background, technical philosophy, and engineering domains.",
    tag: "02 // PROFILE",
  },
  {
    name: "EXPERIENCE",
    href: "/experience",
    description: "Engineering timeline, hardware-software milestones, and awards.",
    tag: "03 // TIMELINE",
  },
  {
    name: "CONTACT",
    href: "/contact",
    description: "Get in touch for software engineering, robotics, and AI opportunities.",
    tag: "04 // CONNECT",
  },
];

export function SheshFooter() {
  return (
    <footer className="pt-16 sm:pt-24 pb-12 border-t border-border-subtle space-y-16">
      {/* 1. BUILD STATUS BLOCK */}
      <div className="p-8 rounded-3xl border border-cyan-500/20 bg-[#090c15] relative overflow-hidden text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101218] border border-border-subtle font-mono text-xs text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <SheshLogo inline className="h-3.5 w-auto" />
          <span className="text-text-muted">{"//"}</span>
          <span className="uppercase tracking-wider text-[11px]">CONVERSATIONAL INTELLIGENCE IN DEVELOPMENT</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          “An evolving exploration of personal conversational intelligence, contextual memory, and agentic workflows.”
        </h3>

        <p className="text-xs sm:text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
          SHESH is actively being formulated as a personal companion architecture. In adherence to
          rigorous engineering integrity, it is presented as a developing system concept rather than a
          commercialized or fully autonomous deployment.
        </p>
      </div>

      {/* 2. SHESH IS PART OF THE SYSTEM (EXIT POINTS) */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest">
            {"//"} ECOSYSTEM CONTINUITY
          </span>
          <span className="font-mono text-xs text-text-muted">
            RETURN TO PORTFOLIO
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary flex items-center flex-wrap gap-2.5">
            <SheshLogo inline className="h-6 sm:h-7 w-auto" />
            <span>is Part of the System.</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
            Connected to Swastik Mahamuni&apos;s broader body of work across robotics, edge computer vision,
            marine AI, and full-stack software systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {EXIT_POINTS.map((pt) => (
            <Link
              key={pt.name}
              href={pt.href}
              className="p-5 rounded-2xl border border-border-subtle bg-[#101218] hover:border-cyan-400/50 hover:bg-[#131622] transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-text-muted block mb-2">
                  {pt.tag}
                </span>
                <h4 className="font-mono text-base font-bold text-text-primary group-hover:text-cyan-300 transition-colors">
                  {pt.name}
                </h4>
                <p className="text-xs text-text-muted mt-1 leading-snug">
                  {pt.description}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between font-mono text-xs text-text-secondary group-hover:text-cyan-300">
                <span>Navigate</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. UNDERSTATED FOOTER BAR */}
      <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <SheshLogo inline className="h-3 w-auto" />
          <span>RESEARCH PREVIEW {"//"} SWASTIK MAHAMUNI</span>
        </div>
        <div>
          <span>PUNE, INDIA · SOFTWARE × AI</span>
        </div>
      </div>
    </footer>
  );
}
