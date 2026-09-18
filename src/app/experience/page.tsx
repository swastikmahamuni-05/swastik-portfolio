import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { experienceData } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience — Swastik Mahamuni",
  description:
    "Professional engineering internship at Vishay Components India and student technical leadership at Vidyut Veda.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12 md:py-20 max-w-5xl mx-auto w-full space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan block">
          EXPERIENCE // PROFESSIONAL &amp; LEADERSHIP
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
          Practical Engineering &amp; Coordination
        </h1>
        <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
          Hands-on software development in enterprise manufacturing environments paired with
          technical coordination and student engineering leadership.
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-8 pt-4 border-t border-border-subtle">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="p-6 sm:p-8 rounded-2xl border border-border-subtle bg-surface space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-4">
              <div>
                <span className="font-mono text-xs text-accent-cyan block mb-1 uppercase tracking-wider">
                  {exp.type}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
                  {exp.organization}
                </h2>
                <p className="text-sm font-medium text-text-secondary">
                  {exp.role} {exp.department ? `· ${exp.department}` : ""}
                </p>
              </div>
              <span className="font-mono text-xs text-text-muted bg-surface-elevated px-3 py-1 rounded border border-border-subtle self-start sm:self-auto">
                {exp.timeline}
              </span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed">
              <p>{exp.summary}</p>

              <div className="space-y-2 pt-2">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                  KEY RESPONSIBILITIES &amp; OUTCOMES:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-lg border border-border-subtle bg-surface-lowest space-y-1"
                    >
                      <span className="font-mono text-accent-cyan font-semibold block text-xs">
                        0{idx + 1} {"//"}
                      </span>
                      <span className="text-text-muted">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="pt-3 border-t border-border-subtle flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-text-muted uppercase tracking-wider mr-2">
                    TECHNOLOGIES:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-surface-elevated font-mono text-[11px] text-text-secondary border border-border-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
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
          href="/achievements"
          className="text-text-secondary hover:text-accent-cyan transition-colors"
        >
          View Achievements →
        </Link>
      </section>
    </main>
  );
}
