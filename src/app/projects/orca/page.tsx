import React from "react";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { ProjectProgress } from "@/components/projects/ProjectProgress";
import { NextProject } from "@/components/projects/NextProject";
import { OceanField } from "@/components/projects/orca/OceanField";
import { InformationDomains } from "@/components/projects/orca/InformationDomains";
import { OrcaArchitecture } from "@/components/projects/orca/OrcaArchitecture";
import { DecisionFlow } from "@/components/projects/orca/DecisionFlow";
import { GeospatialExperience } from "@/components/projects/orca/GeospatialExperience";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "ORCA — Marine AI Decision Support Platform | Swastik Mahamuni",
  description:
    "An AI-assisted marine decision-support platform designed to synthesize environmental, fishing, safety and market information into a clearer decision-making experience.",
};

const PROGRESS_ITEMS = [
  { id: "problem", label: "Problem", index: "01" },
  { id: "domains", label: "Domains", index: "02" },
  { id: "architecture", label: "Architecture", index: "03" },
  { id: "decision-flow", label: "Decision Flow", index: "04" },
  { id: "geospatial", label: "Geospatial", index: "05" },
  { id: "connectivity", label: "Connectivity", index: "06" },
  { id: "technology", label: "Technology", index: "07" },
  { id: "contribution", label: "Contribution", index: "08" },
  { id: "status", label: "Status", index: "09" },
];

export default function OrcaPage() {
  const project = projectsData.find((p) => p.slug === "orca")!;

  return (
    <main className="min-h-screen px-6 py-8 md:px-12 md:py-12 lg:py-16 max-w-7xl mx-auto w-full">
      {/* Floating Desktop Section Progress Tracker */}
      <ProjectProgress items={PROGRESS_ITEMS} />

      {/* 01 HERO SECTION */}
      <ProjectHero
        index={project.index}
        title={project.title}
        subtitle={project.subtitle}
        description={project.summary}
        domain={project.domain}
        status={project.status}
        accolade={project.accolade}
        metadataList={[
          "Marine AI",
          "Decision Support",
          "Multi-Agent Systems",
          "Geospatial Systems",
          "Information Architecture",
        ]}
        visualComponent={<OceanField />}
      />

      {/* 02 THE PROBLEM */}
      <ProjectSection
        id="problem"
        index="01"
        title="The Marine Information Gap"
        subtitle="Navigating fragmented conditions with disconnected data"
        badge="Problem Definition"
      >
        <div className="space-y-6 text-sm sm:text-base text-text-secondary leading-relaxed">
          <p>
            Offshore marine operations are inherently high-consequence environments where decisions
            rely on understanding rapidly changing meteorological, oceanographic, and bathymetric
            variables.
          </p>
          <p>
            In coastal and small-to-medium fishing fleets, skippers must mentally reconcile multiple
            independent, conflicting data channels while underway: general weather forecasts, wave
            swell patterns, satellite sea surface temperature maps, hazard notices, and fluctuating
            port landing prices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <span className="font-mono text-xs text-accent-cyan font-semibold block">
                01 // Cognitive Overload
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Reconciling up to 8 separate information streams in high-stress offshore conditions
                creates severe decision latency and fatigue.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <span className="font-mono text-xs text-accent-cyan font-semibold block">
                02 // Disconnected Context
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Ocean temperatures are rarely mapped alongside local bathymetry or real-time swell
                vectors, obscuring critical safety and habitat intersections.
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 03 INFORMATION DOMAINS */}
      <ProjectSection
        id="domains"
        index="02"
        title="Ingested Information Domains"
        subtitle="Structuring heterogeneous marine signals into unified models"
        badge="Data Domains"
      >
        <InformationDomains />
      </ProjectSection>

      {/* 04 MULTI-AGENT ARCHITECTURE */}
      <ProjectSection
        id="architecture"
        index="03"
        title="Multi-Agent System Topology"
        subtitle="Specialized analysis agents feeding a central synthesis layer"
        badge="Designed Architecture"
      >
        <OrcaArchitecture />
      </ProjectSection>

      {/* 05 DECISION FLOW */}
      <ProjectSection
        id="decision-flow"
        index="04"
        title="Decision Support Workflow"
        subtitle="From raw inputs to transparent, human-validated advisories"
        badge="Workflow"
      >
        <DecisionFlow />
      </ProjectSection>

      {/* 06 GEOSPATIAL EXPERIENCE */}
      <ProjectSection
        id="geospatial"
        index="05"
        title="Geospatial Interaction"
        subtitle="High-contrast visualization designed for maritime clarity"
        badge="Interface Prototype"
      >
        <GeospatialExperience />
      </ProjectSection>

      {/* 07 LOW CONNECTIVITY DESIGN */}
      <ProjectSection
        id="connectivity"
        index="06"
        title="Low-Connectivity Architectural Design"
        subtitle="Engineered with intermittent coastal connectivity in mind"
        badge="Proposed Concept"
      >
        <div className="space-y-6 text-sm sm:text-base text-text-secondary leading-relaxed">
          <div className="p-4 rounded-lg bg-surface-elevated/30 border border-border-subtle/80 flex items-start gap-3">
            <span className="font-mono text-xs text-accent-cyan mt-0.5">[ PROPOSED ]</span>
            <p className="text-xs sm:text-sm text-text-secondary">
              The low-connectivity architecture represents a conceptual design approach for future
              field validation rather than a currently deployed offline runtime.
            </p>
          </div>

          <p>
            Offshore marine zones frequently suffer from severe signal attenuation and intermittent
            cellular coverage. The ORCA architecture was conceptualized to address these constraints
            through deliberate state caching and compact synchronization payloads:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg border border-border-subtle bg-surface-lowest/40 space-y-1.5">
              <span className="font-mono text-xs text-text-primary font-semibold block">
                Pre-Voyage Ingestion
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Caching high-resolution bathymetric vectors and multi-day meteorological models prior to
                harbor departure while high-speed shore networks are accessible.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface-lowest/40 space-y-1.5">
              <span className="font-mono text-xs text-text-primary font-semibold block">
                Lightweight Delta Sync
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Structuring emergency and squall updates into minimal-byte telemetry packets capable of
                transmitting over fringe 2G/GSM or low-bandwidth links.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface-lowest/40 space-y-1.5">
              <span className="font-mono text-xs text-text-primary font-semibold block">
                Local State Preservation
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Maintaining navigational waypoints and cached hazard boundaries locally in browser
                memory without dependency on continuous server heartbeat connections.
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 08 TECHNOLOGY STACK */}
      <ProjectSection
        id="technology"
        index="07"
        title="Layered Technology Stack"
        subtitle="Purpose-fit architecture for intelligence and spatial visualization"
        badge="System Stack"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Tier 1: Interface */}
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-4">
              <div className="border-b border-border-subtle pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan block">
                  [01] // TIER
                </span>
                <h4 className="text-sm font-bold text-text-primary">Interface</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                High-contrast spatial frontend optimized for offshore readability and responsive layout.
              </p>
            </div>

            {/* Tier 2: Application */}
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-4">
              <div className="border-b border-border-subtle pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan block">
                  [02] // TIER
                </span>
                <h4 className="text-sm font-bold text-text-primary">Application</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "FastAPI"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                High-throughput async REST endpoints coordinating agent execution and data dispatch.
              </p>
            </div>

            {/* Tier 3: Intelligence */}
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-4">
              <div className="border-b border-border-subtle pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan block">
                  [03] // TIER
                </span>
                <h4 className="text-sm font-bold text-text-primary">Intelligence</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Multi-Agent Architecture", "LLM APIs"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Specialized heuristic and model-assisted agent nodes decomposing complex maritime feeds.
              </p>
            </div>

            {/* Tier 4: Geospatial & Data */}
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-4">
              <div className="border-b border-border-subtle pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan block">
                  [04] // TIER
                </span>
                <h4 className="text-sm font-bold text-text-primary">Geospatial / Data</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["PostgreSQL", "PostGIS", "MapLibre / Mapbox"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Spatial querying of bathymetric contours, marine exclusion boundaries, and harbor vectors.
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 09 MY CONTRIBUTION */}
      <ProjectSection
        id="contribution"
        index="08"
        title="Personal Contribution &amp; Engineering Role"
        subtitle="Distinct ownership areas across system design, AI logic, and product UX"
        badge="Engineering Role"
      >
        <div className="space-y-6">
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            As the lead technical architect on the ORCA concept during the Smart India Hackathon
            initiative, my responsibilities spanned end-to-end architecture definition, multi-agent
            workflow decomposition, and interface interaction design:
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent-cyan font-semibold">01 // System Architecture</span>
                <span className="text-text-muted">[ Architecture Design ]</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed">
                Architected the modular multi-agent software framework, defining decoupled boundaries
                between specialized intake agents, the synthesis engine, and frontend clients.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent-cyan font-semibold">02 // AI Workflow Decomposition</span>
                <span className="text-text-muted">[ Agent Logic ]</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed">
                Designed the multi-factor evaluation pipeline, establishing strict prioritization rules
                where maritime safety guardrails deterministically override commercial catch opportunities.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent-cyan font-semibold">03 // Product &amp; UX Interaction</span>
                <span className="text-text-muted">[ Design &amp; Frontend ]</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed">
                Designed the high-contrast cartographic interface, ensuring critical hazard alerts and
                waypoint advisories remain instantly legible on low-brightness vessel displays.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent-cyan font-semibold">04 // Geospatial Data Strategy</span>
                <span className="text-text-muted">[ Spatial Strategy ]</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed">
                Researched and integrated public oceanographic data standards (MODIS radiometry,
                bathymetric contour models) into unified coordinate representations.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent-cyan font-semibold">05 // Prototype Prototyping &amp; Defense</span>
                <span className="text-text-muted">[ Prototyping ]</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed">
                Built interactive frontend demonstrations and technical defense documentation for the
                Smart India Hackathon prototyping evaluation stage.
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 10 PROJECT STATUS & OUTCOME */}
      <ProjectSection
        id="status"
        index="09"
        title="Project Lifecycle &amp; Current Status"
        subtitle="Factual position within project development"
        badge="Status Verification"
      >
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border-subtle bg-surface-lowest/60 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-4">
              <div className="flex items-center gap-2.5 font-mono text-xs">
                <span className="text-accent-cyan font-semibold">LIFECYCLE STATE:</span>
                <span className="px-2.5 py-1 rounded bg-surface border border-border-subtle text-text-primary">
                  [ DESIGNED / PROTOTYPED ]
                </span>
              </div>
              <span className="font-mono text-xs text-text-muted">
                Smart India Hackathon Initiative
              </span>
            </div>

            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>
                ORCA was created and developed as an engineering solution architecture and interactive
                prototype direction during Smart India Hackathon problem exploration.
              </p>
              <p>
                It validated the feasibility of unifying heterogeneous oceanographic and commercial
                streams into a coherent decision-support interface. It is maintained as an
                architectural blueprint and concept prototype, and is not currently deployed as an
                active commercial service.
              </p>
            </div>

            {/* Lifecycle Stages Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 rounded border border-border-subtle bg-surface space-y-1">
                <span className="font-mono text-[10px] text-accent-cyan block">PHASE 01</span>
                <span className="text-xs font-semibold text-text-primary block">Problem Scope</span>
                <span className="font-mono text-[10px] text-text-muted">Completed</span>
              </div>
              <div className="p-3 rounded border border-border-subtle bg-surface space-y-1">
                <span className="font-mono text-[10px] text-accent-cyan block">PHASE 02</span>
                <span className="text-xs font-semibold text-text-primary block">Architecture</span>
                <span className="font-mono text-[10px] text-text-muted">Designed</span>
              </div>
              <div className="p-3 rounded border border-border-subtle bg-surface space-y-1">
                <span className="font-mono text-[10px] text-accent-cyan block">PHASE 03</span>
                <span className="text-xs font-semibold text-text-primary block">UI Prototype</span>
                <span className="font-mono text-[10px] text-text-muted">Prototyped</span>
              </div>
              <div className="p-3 rounded border border-border-subtle bg-surface space-y-1 opacity-60">
                <span className="font-mono text-[10px] text-text-muted block">PHASE 04</span>
                <span className="text-xs font-semibold text-text-primary block">Sea Trials</span>
                <span className="font-mono text-[10px] text-text-muted">Not Commenced</span>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 11 NEXT PROJECT HANDOFF */}
      <NextProject
        slug="aumbyte"
        title="AUMByte"
        subtitle="Edge AI Crop Disease Detection System"
        domain="Edge AI & Computer Vision"
      />
    </main>
  );
}
