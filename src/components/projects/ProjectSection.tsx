"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ProjectSectionProps {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}

export function ProjectSection({
  id,
  index,
  title,
  subtitle,
  badge,
  children,
  className = "",
}: ProjectSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={`py-20 sm:py-28 border-b border-border-subtle scroll-mt-24 ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Editorial Header Column (4 cols) */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
            <span className="text-accent-cyan font-semibold">[{index}] //</span>
            <span className="uppercase tracking-widest">SECTION</span>
            {badge && (
              <span className="ml-auto text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-surface-elevated text-text-secondary border border-border-subtle">
                {badge}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            {title}
          </h2>

          {subtitle && (
            <p className="font-mono text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Content Stream (8 cols) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-8 space-y-8"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
