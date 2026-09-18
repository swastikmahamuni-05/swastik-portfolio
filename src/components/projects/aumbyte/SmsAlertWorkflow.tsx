"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function SmsAlertWorkflow() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-8">
      {/* Narrative Framing */}
      <div className="space-y-4 max-w-2xl text-text-secondary leading-relaxed text-sm sm:text-base">
        <p>
          Agricultural micro-plots and orchards frequently exist in fringe reception areas where
          heavy cloud apps and video feeds are unusable. AUMByte was designed to reduce dependence
          on continuous broadband internet connectivity by isolating the heavy vision computation
          locally and using SMS as a lightweight alert vector.
        </p>
        <p className="font-mono text-xs text-text-muted">
          {"//"} Plain-text SMS operates over minimal cellular signal thresholds, enabling automated alerts without smartphone prerequisites.
        </p>
      </div>

      {/* Grid: Workflow Sequence + Conceptual SMS Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: 4-Step Chain (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-1">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-emerald-400 font-semibold">01 // On-Device Evaluation</span>
              <span className="text-text-muted">Local Silicon</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Model runs directly on local edge hardware immediately following camera trigger,
              eliminating external transmission dependencies.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-1">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-emerald-400 font-semibold">02 // Payload Serialization</span>
              <span className="text-text-muted">Microcontroller Bridge</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Detection classification is compressed into a compact, plain-text advisory payload
              formatted for standard cellular modems.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-1">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-emerald-400 font-semibold">03 // Cellular Modem Transmission</span>
              <span className="text-text-muted">GSM / AT Commands</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Dispatched through embedded cellular hardware using standard serial AT command
              handshakes over available base station links.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-1">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-emerald-400 font-semibold">04 // Direct Grower Receipt</span>
              <span className="text-text-muted">Universal Reach</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Delivered directly to the grower&apos;s handset as a standard text message, functioning
              equally well on basic feature phones.
            </p>
          </div>
        </div>

        {/* Right: Conceptual SMS Interface Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-border-subtle bg-[#080d09] p-6 space-y-4 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-border-subtle/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs text-text-primary font-semibold">
                CELLULAR SMS ADVISORY
              </span>
            </div>
            <span className="font-mono text-[10px] text-text-muted uppercase">
              PLAIN TEXT
            </span>
          </div>

          {/* SMS Message Bubble */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-4 rounded-xl bg-surface-elevated/90 border border-emerald-500/30 space-y-2.5"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-emerald-400/90 border-b border-border-subtle/40 pb-1.5">
              <span>SENDER: AUMBYTE ADVISORY</span>
              <span>PRIORITY: ALERT</span>
            </div>

            <p className="font-sans text-xs text-text-primary leading-relaxed">
              &ldquo;AUMByte Advisory: Foliar inspection in Plot B indicates localized Cercospora
              leaf spot symptoms on upper canopy foliage. Recommend visual confirmation and targeted
              intervention before next irrigation cycle.&rdquo;
            </p>

            <div className="font-mono text-[10px] text-text-muted pt-1 flex items-center justify-between">
              <span>DELIVERY: CELLULAR SMS</span>
              <span>STATUS: DELIVERED</span>
            </div>
          </motion.div>

          <div className="text-center font-mono text-[10px] text-text-muted border-t border-border-subtle/60 pt-3">
            [ CONCEPTUAL ADVISORY MESSAGE · NO PII / NO FAKE PHONES ]
          </div>
        </div>
      </div>
    </div>
  );
}
