import Link from "next/link";
import { siteConfig } from "@/data/site";
import { HeroVisual } from "@/components/home/HeroVisual";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { EngineeringFocus } from "@/components/home/EngineeringFocus";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { SheshTeaser } from "@/components/home/SheshTeaser";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. HERO & INTENT (First Viewport Focus) */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-12 md:px-12 md:py-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Left Column: Identity, Intent & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Identity & Positioning Tag */}
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block">
                [ IDENTITY &amp; SYSTEMS ARCHITECTURE ]
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary uppercase">
                {siteConfig.name}
              </h1>
              <p className="font-mono text-xs text-text-secondary">
                {siteConfig.positioning}
              </p>
            </div>

            {/* Primary Editorial Statement */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.06]">
                BUILDING INTELLIGENT
                <br />
                DIGITAL SYSTEMS.
              </h2>
              <p className="text-base sm:text-lg text-text-secondary max-w-xl font-normal leading-relaxed">
                {siteConfig.bio}
              </p>
            </div>

            {/* Two Primary Actions Only */}
            <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href="#work"
                className="group px-6 py-3.5 rounded bg-text-primary text-canvas font-medium hover:bg-white/90 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>[ Explore Work ]</span>
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>
              <Link
                href="/shesh"
                className="group px-6 py-3.5 rounded border border-border-medium text-text-primary hover:border-accent-cyan hover:text-accent-cyan transition-all flex items-center gap-2"
              >
                <span>[ Enter SHESH ]</span>
                <span className="text-accent-cyan group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Restrained Abstract Topology Visual (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* 2. NARRATIVE STREAM (Max-w-7xl Container) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-6">
        {/* Selected Work */}
        <ProjectShowcase />

        {/* Engineering Focus */}
        <EngineeringFocus />

        {/* Experience Preview */}
        <ExperiencePreview />

        {/* SHESH Teaser */}
        <SheshTeaser />

        {/* Closing Contact */}
        <ContactSection />
      </div>
    </div>
  );
}
