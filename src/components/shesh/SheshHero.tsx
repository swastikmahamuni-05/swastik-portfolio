"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { sheshData } from "@/data/shesh";
import { SheshLogo } from "./SheshLogo";
import { SheshCore } from "./SheshCore";

interface SheshHeroProps {
  onEnterClick?: () => void;
  onExploreClick?: () => void;
}

export function SheshHero({ onEnterClick, onExploreClick }: SheshHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-2 pb-8 lg:pb-12 overflow-hidden">
      {/* Atmospheric Energy Aura in Background */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[480px] bg-gradient-to-b from-cyan-500/10 via-violet-500/5 to-transparent blur-3xl opacity-50" />

      {/* Title & Editorial Statements */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-6 sm:mb-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center py-1"
        >
          <h1 className="sr-only">{sheshData.title}</h1>
          <SheshLogo className="max-w-[320px] sm:max-w-[420px] lg:max-w-[480px]" />
        </motion.div>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs sm:text-sm tracking-[0.25em] text-cyan-300 uppercase font-semibold"
        >
          {sheshData.subtitle}
        </motion.p>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed"
        >
          {sheshData.heroDescription}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-2 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => onEnterClick ? onEnterClick() : handleScrollTo("evolution")}
            className="px-6 py-3 rounded-lg bg-cyan-400 text-[#08090D] font-mono text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-2 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#08090D]"
          >
            <span>ENTER SHESH</span>
            <span>↓</span>
          </button>

          <button
            onClick={() => onExploreClick ? onExploreClick() : handleScrollTo("architecture")}
            className="px-6 py-3 rounded-lg border border-border-subtle bg-[#101218] text-text-secondary hover:text-text-primary hover:border-cyan-400/40 font-mono text-xs tracking-wider uppercase inline-flex items-center gap-2 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400"
          >
            <span>EXPLORE THE SYSTEM</span>
            <span>→</span>
          </button>
        </motion.div>
      </div>

      {/* Dominant Visual: THE SHESH CORE */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="w-full max-w-4xl mx-auto"
      >
        <SheshCore />
      </motion.div>
    </section>
  );
}
