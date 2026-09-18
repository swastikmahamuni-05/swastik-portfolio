import Link from "next/link";
import { sheshData } from "@/data/shesh";

export function SheshTeaser() {
  return (
    <section className="py-24 border-t border-border-subtle relative overflow-hidden">
      {/* Dimensional Ambient Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-gradient-to-r from-accent-cyan/8 via-accent-violet/12 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative rounded-2xl border border-border-subtle bg-gradient-to-b from-surface-elevated/60 to-surface-lowest/80 p-8 sm:p-14 overflow-hidden backdrop-blur-sm">
        {/* Datum Marker */}
        <div className="flex items-center justify-between font-mono text-xs text-text-muted pb-8 border-b border-border-subtle/50 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-accent-violet font-semibold tracking-widest uppercase text-[11px]">
              {sheshData.statusLabel}
            </span>
          </div>
          <span>[ 04 // SHESH ]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-text-primary uppercase">
              {sheshData.title}
            </h2>
            <p className="text-lg sm:text-xl font-medium text-accent-violet tracking-wide">
              {sheshData.subtitle}
            </p>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl pt-2">
              “{sheshData.positioningQuote}”
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/shesh"
              className="group px-7 py-4 rounded-lg bg-surface-highest border border-accent-violet/40 text-text-primary hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 font-mono text-xs flex items-center gap-3 shadow-lg shadow-black/40"
            >
              <span className="tracking-wider">[ Explore SHESH ]</span>
              <span className="text-accent-cyan group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
