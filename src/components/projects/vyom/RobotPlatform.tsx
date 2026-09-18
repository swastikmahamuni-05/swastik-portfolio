"use client";

import React from "react";

interface Subsystem {
  id: string;
  name: string;
  role: string;
  confirmedTech?: string;
  architectureNote: string;
}

const SUBSYSTEMS: Subsystem[] = [
  {
    id: "base",
    name: "Mobile Base",
    role: "Physical locomotion and structural load bearing",
    architectureNote:
      "Differential drive chassis engineered to accommodate industrial payloads across level factory floors.",
  },
  {
    id: "compute",
    name: "Onboard Compute",
    role: "Hierarchical split-processing architecture",
    confirmedTech: "NVIDIA Jetson + ESP32",
    architectureNote:
      "Separates high-level perception and path formulation from deterministic real-time motor actuation.",
  },
  {
    id: "perception",
    name: "Perception Suite",
    role: "Spatial boundary acquisition & visual feature tracking",
    confirmedTech: "2D LiDAR + Computer Vision",
    architectureNote:
      "Combines planar laser scanning for boundaries with optical cameras for entity and tag recognition.",
  },
  {
    id: "navigation",
    name: "Navigation Layer",
    role: "Occupancy mapping & motion planning",
    confirmedTech: "ROS 2 Middleware",
    architectureNote:
      "Coordinates coordinate transformations, occupancy grid mapping, and trajectory guidance.",
  },
  {
    id: "sensing",
    name: "Environmental Sensing",
    role: "Corridor climate and atmospheric monitoring",
    architectureNote:
      "Collects ambient industrial telemetry including temperature, particulate matter, and safety hazards.",
  },
  {
    id: "comm",
    name: "Inter-Process Bridge",
    role: "Low-latency communication substrate",
    confirmedTech: "UART / Serial Protocol",
    architectureNote:
      "Bridges ROS 2 navigation nodes on the compute accelerator to low-level microcontroller motor drivers.",
  },
  {
    id: "safety",
    name: "Safety-Oriented Systems",
    role: "Hardware and software failsafe interlocks",
    architectureNote:
      "Hardware emergency stop circuits, deceleration envelopes, and watchdogs ensuring safe aisle coexistence.",
  },
];

export function RobotPlatform() {
  return (
    <div className="space-y-6">
      {/* Target Payload Specification Banner */}
      <div className="p-6 rounded-2xl border border-accent-cyan/30 bg-[#090d18] relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
              {"//"} DESIGN ENVELOPE REQUIREMENT
            </span>
            <span className="font-mono text-xs text-accent-cyan block">
              TARGET PAYLOAD
            </span>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              150–200 KG
            </div>
          </div>
          <div className="max-w-md bg-[#05070d] border border-white/10 p-4 rounded-xl font-mono text-xs text-text-secondary space-y-1">
            <div className="text-accent-cyan font-semibold">
              SPECIFICATION CLASSIFICATION:
            </div>
            <p className="text-text-muted leading-relaxed">
              Target design specification for structural sizing and material transport capacity.
              Subject to physical prototype validation.
            </p>
          </div>
        </div>
      </div>

      {/* Platform Subsystems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SUBSYSTEMS.map((sub, idx) => (
          <div
            key={sub.id}
            className={`p-5 rounded-xl border border-border-subtle bg-surface-lowest/40 space-y-3 flex flex-col justify-between ${
              idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-text-muted mb-2">
                <span>SUBSYSTEM // 0{idx + 1}</span>
                {sub.confirmedTech && (
                  <span className="text-accent-cyan font-semibold">
                    {sub.confirmedTech}
                  </span>
                )}
              </div>
              <h4 className="font-mono text-base font-semibold text-text-primary">
                {sub.name}
              </h4>
              <p className="text-xs text-text-muted mt-1 leading-snug">
                {sub.role}
              </p>
            </div>

            <p className="text-xs text-text-secondary border-t border-white/5 pt-3 leading-relaxed">
              {sub.architectureNote}
            </p>
          </div>
        ))}
      </div>

      {/* Dual-Tier Compute Topology Breakdown */}
      <div className="p-6 rounded-2xl border border-border-subtle bg-surface-lowest/60 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-3">
          <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider">
            {"//"} DUAL-TIER COMPUTE ARCHITECTURE
          </span>
          <span className="font-mono text-xs text-text-muted">
            SEPARATION OF CONCERNS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* High-Level Tier */}
          <div className="space-y-2 border border-white/5 bg-[#05070d] p-4 rounded-xl">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-text-primary font-semibold">HIGH-LEVEL COMPUTE</span>
              <span className="px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan text-[10px]">
                NVIDIA JETSON
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Hosts asynchronous compute-intensive processes: 2D LiDAR point ingest, occupancy costmap
              generation, computer vision object classification, and global trajectory planning under ROS 2.
            </p>
          </div>

          {/* Real-Time Low-Level Tier */}
          <div className="space-y-2 border border-white/5 bg-[#05070d] p-4 rounded-xl">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-text-primary font-semibold">DETERMINISTIC CONTROL</span>
              <span className="px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan text-[10px]">
                ESP32 MICROCONTROLLER
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Executes time-critical low-latency loops: motor PID velocity control, quadrature wheel encoder
              tracking, emergency stop hardware monitoring, and deterministic fail-safe triggers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
