"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectStatusBadge, TechBadge } from "@/components/ui/TechBadge";
import { ProjectStatus } from "@/data/projects";

interface ProjectHeroProps {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  domain: string;
  status: ProjectStatus;
  accolade?: string;
  metadataList: string[];
  visualComponent: React.ReactNode;
}

export function ProjectHero({
  index,
  title,
  subtitle,
  description,
  domain,
  status,
  accolade,
  metadataList,
  visualComponent,
}: ProjectHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-6 pb-20 sm:pb-28 border-b border-border-subtle overflow-hidden">
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between gap-4 mb-12 sm:mb-16">
        <Link
          href="/work"
          className="group font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-accent-cyan rounded px-1.5 py-1"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          <span>All Work</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-text-muted">
            [{index}] // CASE STUDY
          </span>
        </div>
      </div>

      {/* Main Hero Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Narrative & Scope (6 cols) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-8"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-accent-cyan font-semibold tracking-wider">
                {domain}
              </span>
              <span className="text-border-active">•</span>
              <ProjectStatusBadge status={status} />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
              {title}
            </h1>
            <p className="font-mono text-sm sm:text-base text-text-secondary tracking-wide">
              {subtitle}
            </p>

            {accolade && (
              <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan-dim bg-surface-elevated px-3 py-1.5 rounded border border-border-subtle">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                <span>{accolade}</span>
              </div>
            )}
          </div>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl font-normal">
            {description}
          </p>

          {/* Metadata Categories / Tags */}
          <div className="pt-6 border-t border-border-subtle/80 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted block">
              Core Competencies &amp; Focus
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {metadataList.map((meta) => (
                <TechBadge key={meta} label={meta} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Visual Frame (6 cols) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] rounded-xl bg-[#06080e] border border-border-subtle overflow-hidden shadow-2xl"
        >
          {visualComponent}
        </motion.div>
      </div>
    </section>
  );
}
