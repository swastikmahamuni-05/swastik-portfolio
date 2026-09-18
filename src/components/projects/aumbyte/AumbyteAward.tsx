"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function AumbyteAward() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 sm:p-10 rounded-2xl border border-emerald-500/30 bg-surface-lowest/60 relative overflow-hidden shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="uppercase tracking-wider font-semibold">
              COMPETITION VALIDATION // NATIONAL RECOGNITION
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            1st Place Winner — Indian Electronics &amp; Innovation League (IEIL)
          </h3>

          <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
            Awarded first prize at the national IEIL competition for demonstrating a working
            embedded prototype capable of on-device foliage diagnostics and automated SMS dispatch,
            proving the viability of offline edge AI in connectivity-constrained agricultural environments.
          </p>
        </div>

        <div className="self-start md:self-center font-mono text-center p-4 rounded-xl border border-border-subtle bg-surface-elevated/70 min-w-[140px]">
          <span className="text-xs text-text-muted block uppercase">Standing</span>
          <span className="text-2xl font-bold text-emerald-400 block mt-0.5">1st Place</span>
          <span className="text-[10px] text-text-muted block mt-1">IEIL National</span>
        </div>
      </div>
    </motion.div>
  );
}
