import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { WorkDirectory } from "@/components/projects/WorkDirectory";

export const metadata: Metadata = {
  title: "Work — Selected Systems | Swastik Mahamuni",
  description:
    "A collection of software, AI and engineering systems designed, built and explored by Swastik Mahamuni.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12 md:py-20 lg:py-24 max-w-7xl mx-auto w-full space-y-16">
      {/* Top Header & Breadcrumb */}
      <div className="space-y-6 border-b border-border-subtle pb-12">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
            [01] // WORK
          </span>
          <Link
            href="/"
            className="group font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors inline-flex items-center gap-1.5"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Home</span>
          </Link>
        </div>

        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
            Selected Systems
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            A collection of software, AI and engineering systems I&apos;ve designed, built and explored.
          </p>
        </div>
      </div>

      {/* Directory of Projects */}
      <WorkDirectory projects={projectsData} />

      {/* Engineering Philosophy Note */}
      <div className="pt-8 border-t border-border-subtle/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          <span>Factual states: [Implemented] [Prototyped] [Designed] [In Incubation]</span>
        </div>
        <Link
          href="/contact"
          className="text-text-secondary hover:text-accent-cyan transition-colors inline-flex items-center gap-1"
        >
          <span>Initiate technical discussion</span>
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}
