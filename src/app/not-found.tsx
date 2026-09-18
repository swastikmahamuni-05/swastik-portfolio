import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Route Not Found",
  description: "The requested route does not exist in this system.",
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-16 md:px-12 max-w-4xl mx-auto w-full text-center">
      <div className="space-y-6 max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border-subtle font-mono text-xs text-accent-cyan">
          <span>404 {"//"} UNKNOWN ROUTE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          Route Not Found
        </h1>

        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
          The path you requested is not part of this portfolio system. Return to the home overview or
          browse the engineering directory.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
          <Link
            href="/"
            className="px-5 py-2.5 rounded bg-accent-cyan text-canvas font-semibold uppercase tracking-wider hover:bg-accent-cyan-dim transition-colors"
          >
            ← Return to Home
          </Link>
          <Link
            href="/work"
            className="px-5 py-2.5 rounded border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary uppercase tracking-wider transition-colors"
          >
            Work Directory →
          </Link>
        </div>
      </div>
    </main>
  );
}
