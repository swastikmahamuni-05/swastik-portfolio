"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log client error in development
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-16 md:px-12 max-w-4xl mx-auto w-full text-center">
      <div className="space-y-6 max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border-subtle font-mono text-xs text-amber-400">
          <span>500 {"//"} SYSTEM EXCEPTION</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          Unexpected Error
        </h1>

        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
          An unexpected issue interrupted the view. The system recovered and you can reload the
          current state or return to the main overview.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded bg-accent-cyan text-canvas font-semibold uppercase tracking-wider hover:bg-accent-cyan-dim transition-colors cursor-pointer"
          >
            Retry View ↻
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary uppercase tracking-wider transition-colors"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
