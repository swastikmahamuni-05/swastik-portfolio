import React from "react";
import type { Metadata } from "next";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { ProjectProgress } from "@/components/projects/ProjectProgress";
import { NextProject } from "@/components/projects/NextProject";
import { VyomHeroVisual } from "@/components/projects/vyom/VyomHeroVisual";
import { SystemPipeline } from "@/components/projects/vyom/SystemPipeline";
import { PerceptionTargets } from "@/components/projects/vyom/PerceptionTargets";
import { RobotPlatform } from "@/components/projects/vyom/RobotPlatform";
import { SafetyEnvironment } from "@/components/projects/vyom/SafetyEnvironment";
import { IndustrialEnvironment } from "@/components/projects/vyom/IndustrialEnvironment";
import { NodalSystem } from "@/components/projects/vyom/NodalSystem";
import { DockingAndControl } from "@/components/projects/vyom/DockingAndControl";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "VYOM — Autonomous Industrial Mobile Robot | Swastik Mahamuni",
  description:
    "An autonomous mobile robot concept designed for indoor industrial environments such as warehouses and factories, combining navigation, computer vision, environmental monitoring, and safety-oriented capabilities.",
};

const PROGRESS_ITEMS = [
  { id: "environment", label: "The Environment", index: "01" },
  { id: "concept", label: "System Concept", index: "02" },
  { id: "perception", label: "Perception", index: "03" },
  { id: "platform", label: "The Platform", index: "04" },
  { id: "safety", label: "Safety & Environment", index: "05" },
  { id: "industrial", label: "Industrial Floor", index: "06" },
  { id: "nodal", label: "Nodal System", index: "07" },
  { id: "docking", label: "Docking & Control", index: "08" },
  { id: "technology", label: "Technology", index: "09" },
  { id: "contribution", label: "Contribution", index: "10" },
  { id: "development", label: "Development", index: "11" },
  { id: "status", label: "Status", index: "12" },
];

import { projectsData } from "@/data/projects";

export default function VyomPage() {
  const project = projectsData.find((p) => p.slug === "vyom")!;

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
          "INDUSTRIAL ROBOTICS",
          "AUTONOMOUS NAVIGATION",
          "COMPUTER VISION",
          "ENVIRONMENTAL MONITORING",
        ]}
        visualComponent={<VyomHeroVisual />}
      />

      {/* 02 THE ENVIRONMENT (PROBLEM) */}
      <ProjectSection
        id="environment"
        index="01"
        title="The Environment"
        subtitle="Operational requirements within structured indoor industrial facilities"
        badge="Operating Domain"
      >
        <div className="space-y-6 text-sm sm:text-base text-text-secondary leading-relaxed">
          <p>
            Indoor industrial environments such as warehouses, manufacturing plants, and logistics
            distribution hubs present structured yet dynamic operating conditions. Moving materials
            reliably through these spaces requires autonomous platforms engineered around five core
            spatial capabilities:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <span className="font-mono text-xs text-accent-cyan font-semibold block">
                01 // Structured Navigation
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Traversing rectilinear warehouse aisles and shared corridors reliably while
                maintaining continuous spatial alignment.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <span className="font-mono text-xs text-accent-cyan font-semibold block">
                02 // Obstacle &amp; Personnel Detection
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Identifying moving factory operators, material handling equipment, and stationary
                pallets to avoid collisions.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <span className="font-mono text-xs text-accent-cyan font-semibold block">
                03 // Visual Information Understanding
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Extracting meaningful visual context from the surroundings, including optical fiducial
                tags for docking and terminal handling.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <span className="font-mono text-xs text-accent-cyan font-semibold block">
                04 // Environmental Monitoring
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Tracking atmospheric metrics, air quality, and hazardous thermal shifts across enclosed
                plant sectors.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2 sm:col-span-2 lg:col-span-2">
              <span className="font-mono text-xs text-accent-cyan font-semibold block">
                05 // Safety-Oriented Behaviors
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Operating with deterministic fail-safe mechanisms, dynamic deceleration zones, and
                emergency stop interlocks to ensure safe coexistence with facility personnel.
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 03 SYSTEM CONCEPT */}
      <ProjectSection
        id="concept"
        index="02"
        title="System Concept"
        subtitle="Ordered progression from sensory perception to physical action"
        badge="Architecture Pipeline"
      >
        <SystemPipeline />
      </ProjectSection>

      {/* 04 PERCEPTION */}
      <ProjectSection
        id="perception"
        index="03"
        title="Perception"
        subtitle="Spatial observation and multi-target entity categorization"
        badge="Sensory Awareness"
      >
        <PerceptionTargets />
      </ProjectSection>

      {/* 05 THE PLATFORM */}
      <ProjectSection
        id="platform"
        index="04"
        title="The Platform"
        subtitle="Subsystem integration and dual-tier compute topology"
        badge="Hardware Architecture"
      >
        <RobotPlatform />
      </ProjectSection>

      {/* 06 SAFETY & ENVIRONMENT */}
      <ProjectSection
        id="safety"
        index="05"
        title="Safety &amp; Environment"
        subtitle="Atmospheric monitoring and thermal hazard detection capabilities"
        badge="Safety Systems"
      >
        <SafetyEnvironment />
      </ProjectSection>

      {/* 07 INDUSTRIAL ENVIRONMENT */}
      <ProjectSection
        id="industrial"
        index="06"
        title="Industrial Environment"
        subtitle="Structured indoor facility layout, transit corridors, and zoning"
        badge="Spatial Topology"
      >
        <IndustrialEnvironment />
      </ProjectSection>

      {/* 08 NODAL SYSTEM */}
      <ProjectSection
        id="nodal"
        index="07"
        title="Nodal System"
        subtitle="Distributed stationary checkpoint beacons for localized sensing"
        badge="Facility Infrastructure"
      >
        <NodalSystem />
      </ProjectSection>

      {/* 09 DOCKING & CONTROL */}
      <ProjectSection
        id="docking"
        index="08"
        title="Docking &amp; Control"
        subtitle="Terminal replenishment lifecycle and operator interaction modes"
        badge="Operational Lifecycle"
      >
        <DockingAndControl />
      </ProjectSection>

      {/* 10 TECHNOLOGY STACK */}
      <ProjectSection
        id="technology"
        index="09"
        title="Technology Stack"
        subtitle="Verified technologies associated with the VYOM platform"
        badge="Technologies"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-3">
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block">
                01 // COMPUTE
              </span>
              <h4 className="font-mono text-sm font-semibold text-text-primary">
                NVIDIA Jetson
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Hosts high-level perception, vision models, occupancy costmaps, and navigation node coordination.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <TechBadge label="NVIDIA Jetson" variant="accent" />
              </div>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-3">
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block">
                02 // ROBOTICS
              </span>
              <h4 className="font-mono text-sm font-semibold text-text-primary">
                ROS 2 Middleware
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Pub/sub messaging substrate connecting sensor feeds, coordinate transforms, and velocity commands.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <TechBadge label="ROS 2" variant="accent" />
              </div>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-3">
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block">
                03 // MICROCONTROLLER
              </span>
              <h4 className="font-mono text-sm font-semibold text-text-primary">
                ESP32 Controller
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Dedicated deterministic execution of motor PID loops, wheel encoders, and hardware e-stop triggers.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <TechBadge label="ESP32" variant="accent" />
              </div>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-3">
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider block">
                04 // PERCEPTION
              </span>
              <h4 className="font-mono text-sm font-semibold text-text-primary">
                LiDAR &amp; Vision
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Planar laser scanning for geometric boundaries paired with camera streams for visual classification.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <TechBadge label="2D LiDAR" variant="accent" />
                <TechBadge label="Computer Vision" variant="accent" />
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 11 MY CONTRIBUTION */}
      <ProjectSection
        id="contribution"
        index="10"
        title="My Contribution"
        subtitle="Individual engineering responsibilities and system development scope"
        badge="Engineering Scope"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
                <span>01 //</span>
                <span className="font-semibold text-text-primary uppercase">
                  SYSTEM ARCHITECTURE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Defined the overall system structure and interaction between mobility, perception, compute,
                sensing and software layers.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
                <span>02 //</span>
                <span className="font-semibold text-text-primary uppercase">
                  TECHNOLOGY SELECTION
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Worked on selecting and evaluating technologies for compute, navigation, perception and
                system integration.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
                <span>03 //</span>
                <span className="font-semibold text-text-primary uppercase">
                  AI + PERCEPTION
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Contributed to the computer-vision and sensing architecture for people, obstacle, fire and
                smoke detection.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
                <span>04 //</span>
                <span className="font-semibold text-text-primary uppercase">
                  SYSTEM INTEGRATION
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Worked across hardware and software boundaries to define how the robotic platform, compute
                and sensing subsystems interact.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border-subtle bg-surface-lowest/50 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
              <span>05 //</span>
              <span className="font-semibold text-text-primary uppercase">
                TECHNICAL DOCUMENTATION
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Contributed to architecture, system specifications, component selection and engineering
              documentation, supporting project maturation for the CRiEYA incubation benchmark.
            </p>
          </div>
        </div>
      </ProjectSection>

      {/* 12 PROJECT DEVELOPMENT */}
      <ProjectSection
        id="development"
        index="11"
        title="Project Development"
        subtitle="Ordered technical progression from initial formulation to hardware development"
        badge="Engineering Stages"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/40 space-y-2">
              <div className="font-mono text-[10px] text-accent-cyan">PROGRESSION // 01</div>
              <h5 className="font-mono text-sm font-bold text-text-primary">
                SYSTEM CONCEPT
              </h5>
              <p className="text-xs text-text-muted leading-relaxed">
                Formulating functional requirements for autonomous material transport in indoor facilities.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/40 space-y-2">
              <div className="font-mono text-[10px] text-accent-cyan">PROGRESSION // 02</div>
              <h5 className="font-mono text-sm font-bold text-text-primary">
                ARCHITECTURE
              </h5>
              <p className="text-xs text-text-muted leading-relaxed">
                Structuring the dual-tier compute split between high-level Jetson and real-time ESP32.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/40 space-y-2">
              <div className="font-mono text-[10px] text-accent-cyan">PROGRESSION // 03</div>
              <h5 className="font-mono text-sm font-bold text-text-primary">
                TECHNOLOGY SELECTION
              </h5>
              <p className="text-xs text-text-muted leading-relaxed">
                Evaluating LiDAR sensors, vision compute units, motor controllers, and middleware standards.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border-subtle bg-surface-lowest/40 space-y-2">
              <div className="font-mono text-[10px] text-accent-cyan">PROGRESSION // 04</div>
              <h5 className="font-mono text-sm font-bold text-text-primary">
                PROTOTYPE / DEVELOPMENT
              </h5>
              <p className="text-xs text-text-muted leading-relaxed">
                Advancing the system into hardware fabrication and prototype development stage.
              </p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 13 CURRENT STATUS */}
      <ProjectSection
        id="status"
        index="12"
        title="Current Status"
        subtitle="Factual position within the engineering lifecycle"
        badge="Status Verification"
      >
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border-subtle bg-surface-lowest/60 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-4">
              <div className="flex items-center gap-2.5 font-mono text-xs">
                <span className="text-accent-cyan font-semibold">LIFECYCLE STATE:</span>
                <span className="px-2.5 py-1 rounded bg-surface border border-border-subtle text-text-primary">
                  [ IN INCUBATION ]
                </span>
                <span className="px-2.5 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
                  CRiEYA L3 Funding Stage
                </span>
              </div>
              <span className="font-mono text-xs text-text-muted">
                Concept / Development Stage
              </span>
            </div>

            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>
                VYOM is being developed as an industrial autonomous mobile robot concept, with ongoing
                work around system architecture, perception, navigation and platform integration.
              </p>
              <p>
                Selected for the <strong className="text-text-primary">CRiEYA L3 Funding Stage</strong>,
                the project is focused on physical hardware sizing, sensor validation, and software architecture
                maturation. It is not commercially deployed or industrially validated at scale.
              </p>
            </div>

            {/* Lifecycle Stages Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 rounded border border-border-subtle bg-surface space-y-1">
                <span className="font-mono text-[10px] text-accent-cyan block">STAGE 01</span>
                <span className="text-xs font-semibold text-text-primary block">System Concept</span>
                <span className="font-mono text-[10px] text-text-muted">Defined</span>
              </div>
              <div className="p-3 rounded border border-border-subtle bg-surface space-y-1">
                <span className="font-mono text-[10px] text-accent-cyan block">STAGE 02</span>
                <span className="text-xs font-semibold text-text-primary block">Architecture</span>
                <span className="font-mono text-[10px] text-text-muted">Designed</span>
              </div>
              <div className="p-3 rounded border border-border-subtle bg-surface-lowest space-y-1 border-accent-cyan/40 bg-accent-cyan/5">
                <span className="font-mono text-[10px] text-accent-cyan block">STAGE 03</span>
                <span className="text-xs font-semibold text-text-primary block">Incubation &amp; Build</span>
                <span className="font-mono text-[10px] text-accent-cyan font-semibold">Active (CRiEYA L3)</span>
              </div>
              <div className="p-3 rounded border border-border-subtle bg-surface space-y-1 opacity-50">
                <span className="font-mono text-[10px] text-text-muted block">STAGE 04</span>
                <span className="text-xs font-semibold text-text-primary block">Commercial Scale</span>
                <span className="font-mono text-[10px] text-text-muted">Not Commenced</span>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* 14 NEXT PROJECT HANDOFF */}
      <NextProject
        slug="shesh"
        title="SHESH"
        subtitle="Personal Multi-Agent AI Companion Concept"
        domain="Multi-Agent AI & System Orchestration"
        customNextHref="/shesh"
        prevProject={{
          title: "AUMBYTE",
          href: "/projects/aumbyte",
        }}
      />
    </main>
  );
}
