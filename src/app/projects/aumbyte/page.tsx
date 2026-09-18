import React from "react";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { ProjectProgress } from "@/components/projects/ProjectProgress";
import { NextProject } from "@/components/projects/NextProject";
import { AumbyteHeroVisual } from "@/components/projects/aumbyte/AumbyteHeroVisual";
import { EdgePipeline } from "@/components/projects/aumbyte/EdgePipeline";
import { VisionAnalysis } from "@/components/projects/aumbyte/VisionAnalysis";
import { SmsAlertWorkflow } from "@/components/projects/aumbyte/SmsAlertWorkflow";
import { PhysicalSystem } from "@/components/projects/aumbyte/PhysicalSystem";
import { AumbyteAward } from "@/components/projects/aumbyte/AumbyteAward";
import { TechBadge } from "@/components/ui/TechBadge";


export const metadata: Metadata = {
  title: "AUMByte — Edge AI Crop Disease Detection System | Swastik Mahamuni",
  description:
    "An edge AI system designed to detect crop disease from captured leaf images while reducing dependence on continuous internet connectivity in smallholder agricultural plots.",
};

const PROGRESS_ITEMS = [
  { id: "problem", label: "Problem", index: "01" },
  { id: "pipeline", label: "Pipeline", index: "02" },
  { id: "inference", label: "Edge Inference", index: "03" },
  { id: "connectivity", label: "Connectivity", index: "04" },
  { id: "sms-protocol", label: "SMS Protocol", index: "05" },
  { id: "hardware", label: "Hardware", index: "06" },
  { id: "technology", label: "Technology", index: "07" },
  { id: "contribution", label: "Contribution", index: "08" },
  { id: "award", label: "Recognition", index: "09" },
  { id: "status", label: "Status", index: "10" },
];

export default function AumbytePage() {
  const project = projectsData.find((p) => p.slug === "aumbyte")!;

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
          "Edge AI",
          "Computer Vision",
          "Agricultural Tech",
          "Embedded Systems",
          "Cellular SMS",
        ]}
        visualComponent={<AumbyteHeroVisual />}
      />

      {/* 02 THE PROBLEM */}
      <ProjectSection
        id="problem"
        index="01"
        title="The Agricultural Connectivity Gap"
        subtitle="Timely foliar diagnosis constrained by rural telecom deserts"
        badge="Problem Definition"
      >
        <div className="space-y-6 text-sm sm:text-base text-text-secondary leading-relaxed">
          <p>
            Early visual identification of plant pathogens is critical to containing crop diseases
            before localized foliar infections devastate entire yields. However, smallholder farms,
            orchards, and rural micro-plots frequently exist in connectivity deserts with intermittent
            or absent broadband.
          </p>
          <p>
            Standard precision agriculture platforms rely on sending raw images to cloud-hosted
            machine learning endpoints. In rural agricultural settings, this dependency creates a
            brittle point of failure: when connectivity drops, diagnostic capabilities halt entirely.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <span className="font-mono text-xs text-emerald-400 font-semibold block">
                01 // Cloud Dependency Fragility
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Rural 2G/3G networks struggle to transmit high-resolution camera images offsite,
                introducing delays or complete upload timeouts during critical inspection windows.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <span className="font-mono text-xs text-emerald-400 font-semibold block">
                02 // Adoption Friction
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Solutions requiring complex smartphone apps, account logins, and constant data plans
                create significant operational barriers for smallholder growers.
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 03 MOVE INTELLIGENCE CLOSER TO THE FIELD */}
      <ProjectSection
        id="pipeline"
        index="02"
        title="Moving Intelligence to the Field"
        subtitle="Camera acquisition to automated alert execution chain"
        badge="Core Pipeline"
      >
        <EdgePipeline />
      </ProjectSection>

      {/* 04 EDGE AI CONCEPT */}
      <ProjectSection
        id="edge-ai"
        index="03"
        title="Edge-First Computation Topology"
        subtitle="Localized inference over remote cloud roundtrips"
        badge="Edge AI Architecture"
      >
        <div className="space-y-6 text-sm sm:text-base text-text-secondary leading-relaxed">
          <p>
            AUMByte was architected around the core engineering hypothesis that agricultural intelligence
            must operate reliably at the point of capture. Instead of treating field hardware as a dumb
            camera streaming frames across the internet, the local edge unit houses the trained
            detection model directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg border border-border-subtle bg-surface-lowest/40 space-y-1.5">
              <span className="font-mono text-xs text-text-primary font-semibold block">
                Zero Cloud Dependency
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Leaf evaluation occurs locally in device memory, unaffected by external server outages,
                API rate limits, or network downtime.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface-lowest/40 space-y-1.5">
              <span className="font-mono text-xs text-text-primary font-semibold block">
                Immediate Local Feedback
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Processing occurs in real time at the plant canopy level, removing roundtrip network
                latency from the diagnostic cycle.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border-subtle bg-surface-lowest/40 space-y-1.5">
              <span className="font-mono text-xs text-text-primary font-semibold block">
                Minimal Energy Overhead
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Evaluating a frame locally consumes far less power than maintaining continuous high-bandwidth
                wireless video transmitters in the field.
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 05 COMPUTER VISION & FOLIAGE ANALYSIS */}
      <ProjectSection
        id="vision"
        index="04"
        title="Computer Vision Foliage Inspection"
        subtitle="Canopy viewfinder framing and symptom region localization"
        badge="Vision System"
      >
        <VisionAnalysis />
      </ProjectSection>

      {/* 06 OFFLINE & LOW CONNECTIVITY (SMS ALERT) */}
      <ProjectSection
        id="connectivity"
        index="05"
        title="Offline Resilience &amp; Cellular SMS"
        subtitle="Lightweight advisory channel engineered for universal access"
        badge="Alert Channel"
      >
        <SmsAlertWorkflow />
      </ProjectSection>

      {/* 07 PHYSICAL SYSTEM */}
      <ProjectSection
        id="hardware"
        index="06"
        title="Physical Hardware Integration"
        subtitle="Coupling optical sensors, edge compute, and cellular modems"
        badge="Embedded Hardware"
      >
        <PhysicalSystem />
      </ProjectSection>

      {/* 08 TECHNOLOGY STACK */}
      <ProjectSection
        id="technology"
        index="07"
        title="Engineered Technology Stack"
        subtitle="Strictly verified technologies utilized in the AUMByte prototype"
        badge="Verified Stack"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Vision */}
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-3">
              <div className="border-b border-border-subtle pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 block">
                  [01] // DOMAIN
                </span>
                <h4 className="text-sm font-bold text-text-primary">Vision</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Computer Vision", "YOLO"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Optical frame processing and foliar symptom bounding.
              </p>
            </div>

            {/* Edge */}
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-3">
              <div className="border-b border-border-subtle pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 block">
                  [02] // DOMAIN
                </span>
                <h4 className="text-sm font-bold text-text-primary">Edge AI</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Edge AI", "Local Inference"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                On-device model evaluation bypassing external cloud dependencies.
              </p>
            </div>

            {/* Hardware */}
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-3">
              <div className="border-b border-border-subtle pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 block">
                  [03] // DOMAIN
                </span>
                <h4 className="text-sm font-bold text-text-primary">Hardware</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["ESP32", "Camera Unit"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Microcontroller coordination, image acquisition, and peripheral control.
              </p>
            </div>

            {/* Communication & Language */}
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-3">
              <div className="border-b border-border-subtle pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 block">
                  [04] // DOMAIN
                </span>
                <h4 className="text-sm font-bold text-text-primary">Comms &amp; Core</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["SMS Alerts", "Python"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Serial AT-command cellular alert dispatch and core scripting runtime.
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
        subtitle="Direct technical ownership across architecture, vision, and hardware integration"
        badge="Engineering Role"
      >
        <div className="space-y-6">
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            As the technical lead on the AUMByte project, my contributions spanned system
            architecture definition, computer vision prototyping, and physical embedded integration:
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-emerald-400 font-semibold">01 // System Architecture</span>
                <span className="text-text-muted">[ Architecture Design ]</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed">
                Designed the overall edge-first architectural topology, establishing the decoupled
                interfaces between camera intake, local inference compute, and modem notification.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-emerald-400 font-semibold">02 // Computer Vision Workflow</span>
                <span className="text-text-muted">[ Vision Engineering ]</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed">
                Developed the camera-to-inference pipeline, calibrating region-of-interest extraction
                and foliar symptom bounding for variable field lighting conditions.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-emerald-400 font-semibold">03 // Edge Hardware Integration</span>
                <span className="text-text-muted">[ Embedded Systems ]</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed">
                Contributed to interfacing the optical camera sensor, local compute module, and ESP32
                microcontroller to enable cohesive on-device triggering.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-emerald-400 font-semibold">04 // Alert Workflow &amp; Modem Logic</span>
                <span className="text-text-muted">[ Cellular Alerting ]</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed">
                Engineered the inference-to-SMS alert sequence, implementing serial AT command routines
                to format and transmit concise diagnostic advisories over cellular networks.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-emerald-400 font-semibold">05 // Field Prototype Demonstration</span>
                <span className="text-text-muted">[ Competition Defense ]</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed">
                Assembled the integrated working prototype unit and delivered the live technical defense
                at the Indian Electronics &amp; Innovation League (IEIL).
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 10 AWARD RECOGNITION */}
      <ProjectSection
        id="award"
        index="09"
        title="Competition Validation"
        subtitle="National recognition at the Indian Electronics &amp; Innovation League"
        badge="Achievement"
      >
        <AumbyteAward />
      </ProjectSection>

      {/* 11 PROJECT STATUS */}
      <ProjectSection
        id="status"
        index="10"
        title="Current Project Status"
        subtitle="Factual position within the engineering lifecycle"
        badge="Status Verification"
      >
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border-subtle bg-surface-lowest/60 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-4">
              <div className="flex items-center gap-2.5 font-mono text-xs">
                <span className="text-emerald-400 font-semibold">LIFECYCLE STATE:</span>
                <span className="px-2.5 py-1 rounded bg-surface border border-border-subtle text-text-primary">
                  [ PROTOTYPED ]
                </span>
              </div>
              <span className="font-mono text-xs text-text-muted">
                Field Prototype Stage
              </span>
            </div>

            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>
                AUMByte was successfully prototyped and validated at the competition level, confirming
                the feasibility of offline edge foliage classification and automatic cellular SMS alert
                dispatch.
              </p>
              <p>
                The project remains a working hardware-software prototype. It is not currently deployed
                commercially, nor operates as an active large-scale farm network.
              </p>
            </div>

            {/* Lifecycle Stages Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 rounded border border-border-subtle bg-surface space-y-1">
                <span className="font-mono text-[10px] text-emerald-400 block">STAGE 01</span>
                <span className="text-xs font-semibold text-text-primary block">Concept Formulation</span>
                <span className="font-mono text-[10px] text-text-muted">Completed</span>
              </div>
              <div className="p-3 rounded border border-border-subtle bg-surface space-y-1">
                <span className="font-mono text-[10px] text-emerald-400 block">STAGE 02</span>
                <span className="text-xs font-semibold text-text-primary block">Vision Prototype</span>
                <span className="font-mono text-[10px] text-text-muted">Validated</span>
              </div>
              <div className="p-3 rounded border border-border-subtle bg-surface space-y-1">
                <span className="font-mono text-[10px] text-emerald-400 block">STAGE 03</span>
                <span className="text-xs font-semibold text-text-primary block">Hardware Integration</span>
                <span className="font-mono text-[10px] text-text-muted">Prototyped (IEIL)</span>
              </div>
              <div className="p-3 rounded border border-border-subtle bg-surface space-y-1 opacity-60">
                <span className="font-mono text-[10px] text-text-muted block">STAGE 04</span>
                <span className="text-xs font-semibold text-text-primary block">Commercial Scale</span>
                <span className="font-mono text-[10px] text-text-muted">Not Commenced</span>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 12 NEXT PROJECT HANDOFF */}
      <NextProject
        slug="vyom"
        title="VYOM"
        subtitle="Autonomous Industrial Mobile Robot"
        domain="Robotics & Embedded Systems"
      />
    </main>
  );
}
