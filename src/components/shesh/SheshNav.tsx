"use client";

import React from "react";
import Link from "next/link";

export function SheshNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#08090D]/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
        {/* Left: Brand / System Identity */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <Link
            href="/shesh"
            className="font-mono text-sm font-bold tracking-wider text-text-primary hover:text-cyan-300 transition-colors uppercase"
          >
            SHESH
          </Link>
          <span className="text-text-muted font-mono text-xs hidden sm:inline-block">
            {"//"} PERSONAL AI COMPANION
          </span>
        </div>

        {/* Center / Right: Nav anchors & Exit */}
        <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs">
          <a
            href="#evolution"
            className="text-text-muted hover:text-text-primary transition-colors hidden md:inline-block uppercase tracking-wider text-[11px]"
          >
            Evolution
          </a>
          <a
            href="#architecture"
            className="text-text-muted hover:text-text-primary transition-colors hidden md:inline-block uppercase tracking-wider text-[11px]"
          >
            Architecture
          </a>

          <Link
            href="/work"
            className="px-3.5 py-1.5 rounded-lg border border-border-subtle bg-[#101218] text-text-secondary hover:text-text-primary hover:border-cyan-400/40 transition-colors uppercase tracking-wider text-[11px] inline-flex items-center gap-1.5"
          >
            <span>← EXIT SHESH</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
