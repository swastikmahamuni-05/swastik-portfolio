import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { achievementsData } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Achievements — Swastik Mahamuni",
  description:
    "Verified academic standing, competitive hackathon wins, and incubation funding milestones.",
};

export function AchievementsPage() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12 md:py-20 max-w-5xl mx-auto w-full space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan block">
          ACHIEVEMENTS // RECOGNITION
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
          Evidence &amp; Milestones
        </h1>
        <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
          Demonstrated engineering output across competitive technical leagues, incubation grant
          benchmarks, and academic standing.
        </p>
      </section>

      {/* Achievements List */}
      <section className="space-y-6 pt-4 border-t border-border-subtle">
        {achievementsData.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-8 rounded-2xl border border-border-subtle bg-surface space-y-4 hover:border-border-active transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-3">
              <span className="font-mono text-xs text-accent-cyan font-semibold">
                [{item.index}] // {item.category.toUpperCase()}
              </span>
              {item.projectSlug && (
                <Link
                  href={`/projects/${item.projectSlug}`}
                  className="font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors"
                >
                  Explore Project →
                </Link>
              )}
            </div>

            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
                {item.title}
              </h2>
              <p className="font-mono text-xs text-text-muted">
                {item.organization} · {item.timeline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {item.summary}
            </p>

            <div className="pt-2 border-t border-white/5 font-mono text-xs text-text-muted">
              <span className="text-text-secondary font-semibold">Verification Basis: </span>
              {item.evidence}
            </div>
          </div>
        ))}
      </section>

      {/* Navigation Footer */}
      <section className="pt-8 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/work"
          className="px-5 py-2.5 rounded bg-accent-cyan text-canvas font-semibold uppercase tracking-wider hover:bg-accent-cyan-dim transition-colors"
        >
          View Case Studies →
        </Link>
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

export default AchievementsPage;
