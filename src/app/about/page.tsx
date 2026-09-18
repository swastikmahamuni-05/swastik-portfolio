import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { educationData } from "@/data/education";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: siteConfig.bio,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12 md:py-20 max-w-5xl mx-auto w-full space-y-16">
      {/* 1. Header & Lead */}
      <section className="space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan block">
          ABOUT // {siteConfig.name.toUpperCase()}
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-tight">
          Software, systems, and practical intelligence.
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed pt-2">
          I am a software engineer and AI builder focused on creating reliable digital systems,
          applied computer vision pipelines, and software architectures that solve tangible,
          real-world problems.
        </p>
      </section>

      {/* 2. Narrative: Background */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-border-subtle items-start">
        <div className="md:col-span-4 space-y-2">
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
            01 // BACKGROUND
          </span>
          <h2 className="text-xl font-bold text-text-primary">
            Engineering from the Silicon to the Cloud
          </h2>
        </div>

        <div className="md:col-span-8 space-y-4 text-text-secondary leading-relaxed text-sm sm:text-base">
          <p>
            Currently pursuing my {educationData.degree} in {educationData.field} at {educationData.institution} in {educationData.location}, my foundation sits at the intersection of computational logic and
            physical constraints. Understanding both hardware principles and modern software stacks
            gives me a grounded perspective: software is never just abstract code—it runs on silicon,
            interacts with networks, and impacts people.
          </p>
          <p>
            Whether architecting an offline-first computer vision prototype that detects plant
            diseases in rural telecom deserts, or designing marine decision-support platforms that
            synthesize oceanographic data streams, I enjoy projects where clean engineering makes
            ambiguous information actionable.
          </p>
        </div>
      </section>

      {/* 3. Core Focus Areas */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-border-subtle items-start">
        <div className="md:col-span-4 space-y-2">
          <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block">
            02 // PROFICIENCIES
          </span>
          <h2 className="text-xl font-bold text-text-primary">
            Core Engineering Domains
          </h2>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-border-subtle bg-surface space-y-2">
            <span className="font-mono text-xs text-accent-cyan font-semibold block">
              Software &amp; Full-Stack Systems
            </span>
            <p className="text-xs text-text-secondary leading-relaxed">
              Developing performant, type-safe web applications, scalable REST/RPC services, and
              responsive interfaces with React, Next.js, TypeScript, and modern backend architectures.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-border-subtle bg-surface space-y-2">
            <span className="font-mono text-xs text-accent-cyan font-semibold block">
              Applied AI &amp; Vision
            </span>
            <p className="text-xs text-text-secondary leading-relaxed">
              Formulating computer vision pipelines, localized edge inference, and multi-agent
              coordination loops that operate deterministically under compute and connectivity constraints.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-border-subtle bg-surface space-y-2">
            <span className="font-mono text-xs text-accent-cyan font-semibold block">
              Systems &amp; Architecture
            </span>
            <p className="text-xs text-text-secondary leading-relaxed">
              Structuring distributed data flows, separating concerns between high-level reasoning
              and low-latency drivers, and designing clean APIs for complex domain workflows.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-border-subtle bg-surface space-y-2">
            <span className="font-mono text-xs text-accent-cyan font-semibold block">
              Physical &amp; Embedded Context
            </span>
            <p className="text-xs text-text-secondary leading-relaxed">
              Hands-on familiarity with microcontrollers (ESP32), sensor ingestion (LiDAR, camera feeds),
              serial protocols, and ROS 2 middleware to bridge software with physical systems.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Academic Foundation & Standing */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-border-subtle items-start">
        <div className="md:col-span-4 space-y-2">
          <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
            03 // EDUCATION
          </span>
          <h2 className="text-xl font-bold text-text-primary">
            Academic Foundation
          </h2>
        </div>

        <div className="md:col-span-8 p-6 rounded-2xl border border-border-subtle bg-surface space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-3">
            <div>
              <h3 className="text-base font-semibold text-text-primary">
                {educationData.degree} in {educationData.field}
              </h3>
              <p className="font-mono text-xs text-text-muted">
                {educationData.institution}, {educationData.location} · {educationData.timeline}
              </p>
            </div>
            <div className="font-mono text-xs text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2.5 py-1 rounded">
              CGPA: {educationData.cgpa}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Rigorous coursework across computer architecture, data structures &amp; algorithms,
            microcontrollers, digital electronics, communication networks, and software systems.
          </p>
        </div>
      </section>

      {/* 5. Navigation & Contact Links */}
      <section className="pt-8 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-4">
          <Link
            href="/work"
            className="px-5 py-2.5 rounded bg-accent-cyan text-canvas font-semibold uppercase tracking-wider hover:bg-accent-cyan-dim transition-colors"
          >
            Explore Projects →
          </Link>
          <Link
            href="/experience"
            className="px-5 py-2.5 rounded border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary uppercase tracking-wider transition-colors"
          >
            Experience
          </Link>
        </div>

        <Link
          href="/contact"
          className="text-text-secondary hover:text-accent-cyan transition-colors"
        >
          Get in touch →
        </Link>
      </section>
    </main>
  );
}
