"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectData } from "@/data/projects";
import { ProjectStatusBadge, TechBadge } from "@/components/ui/TechBadge";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 24 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View case study for ${project.title}: ${project.subtitle}`}
        className="block rounded-xl border border-border-subtle bg-surface-lowest/40 hover:bg-surface-lowest/80 hover:border-border-active transition-all duration-300 p-6 sm:p-8 lg:p-10 overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:ring-offset-2 focus:ring-offset-canvas"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative, Metadata & Scope (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Header Meta: Index, Domain, Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="text-accent-cyan font-semibold">
                    {project.index} {"//"}
                  </span>
                  <span className="text-text-muted">{project.domain}</span>
                </div>
                <ProjectStatusBadge status={project.status} />
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
                {project.title}
              </h2>
              <p className="font-mono text-xs sm:text-sm text-text-secondary mt-1.5 tracking-wide">
                {project.subtitle}
              </p>

              {/* Accolade Banner (if present) */}
              {project.accolade && (
                <div className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] text-accent-cyan-dim bg-surface-elevated/80 px-2.5 py-1 rounded border border-border-subtle">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/80" />
                  <span>{project.accolade}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
              {project.summary}
            </p>

            {/* Tech Stack Badges & CTA */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle/60">
              <div className="flex flex-wrap items-center gap-2">
                {project.keyTechList.map((tech: string) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>

              <div className="font-mono text-xs text-text-primary group-hover:text-accent-cyan inline-flex items-center gap-1.5 transition-colors duration-200">
                <span className="font-semibold tracking-wider uppercase">
                  Case Study
                </span>
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dominant Interface Visual Preview (5 cols) */}
          <div className="lg:col-span-5 relative w-full aspect-[16/10] rounded-lg bg-[#08090f] border border-border-subtle overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={`${project.title} interface preview`}
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-[1.015] transition-transform duration-500 ease-out"
              priority={false}
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
