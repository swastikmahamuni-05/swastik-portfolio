"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface NextProjectProps {
  slug: string;
  title: string;
  subtitle: string;
  domain: string;
  prevProject?: {
    title: string;
    href: string;
  };
  customNextHref?: string;
}

export function NextProject({
  slug,
  title,
  subtitle,
  domain,
  prevProject,
  customNextHref,
}: NextProjectProps) {
  const shouldReduceMotion = useReducedMotion();
  const nextTarget = customNextHref || `/projects/${slug}`;

  return (
    <section className="py-24 sm:py-32">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-border-subtle bg-surface-lowest/50 p-8 sm:p-12 lg:p-16 relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs text-accent-cyan uppercase tracking-widest block">
              {"//"} NEXT SYSTEM CASE STUDY
            </span>
            <div className="space-y-1">
              <span className="font-mono text-xs text-text-muted">{domain}</span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
                {title}
              </h3>
              <p className="font-mono text-sm sm:text-base text-text-secondary">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {prevProject && (
              <Link
                href={prevProject.href}
                className="px-6 py-3.5 rounded-lg border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary hover:border-border-active font-mono text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-1 focus:ring-accent-cyan"
              >
                <span>← {prevProject.title}</span>
              </Link>
            )}

            <Link
              href={nextTarget}
              className="px-6 py-3.5 rounded-lg bg-accent-cyan text-canvas font-mono text-xs font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 hover:bg-accent-cyan-dim transition-colors shadow-lg shadow-accent-cyan/10 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-canvas"
            >
              <span>Explore {title}</span>
              <span>→</span>
            </Link>

            <Link
              href="/work"
              className="px-6 py-3.5 rounded-lg border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary hover:border-border-active font-mono text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-1 focus:ring-accent-cyan"
            >
              <span>Work Directory</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
