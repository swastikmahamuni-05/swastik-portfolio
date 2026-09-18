"use client";

import React, { useState } from "react";

export function VyomHeroVisual() {
  const [activeTarget, setActiveTarget] = useState<string | null>(null);
  return (
    <div className="relative w-full rounded-2xl border border-border-subtle bg-[#080a11] p-4 sm:p-6 overflow-hidden shadow-2xl">
      {/* Top HUD Status Row */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-accent-cyan">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
          </span>
          <span className="tracking-wider uppercase text-[11px] sm:text-xs">
            SPATIAL TOPOLOGY // 2D LIDAR OCCUPANCY
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-text-muted text-[11px]">
          <span>GRID: 0.5M RESOLUTION</span>
          <span className="text-white/20">|</span>
          <span className="text-accent-cyan-dim">CHASSIS: DIFFERENTIAL DRIVE</span>
        </div>
      </div>

      {/* Main Vector Visualization Container */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] bg-[#05070c] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">
        <svg
          className="w-full h-full text-accent-cyan select-none"
          viewBox="0 0 720 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Engineering Grid Pattern */}
            <pattern
              id="vyom-grid"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.06"
                strokeWidth="0.75"
              />
            </pattern>

            {/* LiDAR Radar Sweep Gradient */}
            <radialGradient id="lidarBeamHero" cx="32%" cy="66%" r="60%">
              <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#00e5ff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
            </radialGradient>

            {/* Waypoint Glow */}
            <radialGradient id="waypointGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Grid */}
          <rect width="720" height="450" fill="url(#vyom-grid)" />

          {/* Warehouse Structural Boundaries (Aisle Racks) */}
          <g fill="#0e1322" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.2">
            {/* Storage Rack West */}
            <rect x="40" y="40" width="100" height="370" rx="3" />
            {/* Storage Rack East */}
            <rect x="580" y="40" width="100" height="370" rx="3" />
            {/* Central Storage Island North */}
            <rect x="220" y="40" width="280" height="60" rx="3" strokeDasharray="6 3" />
            {/* Intermediate Partition */}
            <rect x="260" y="160" width="200" height="36" rx="2" strokeOpacity="0.15" />
          </g>

          {/* Rack Structural Telemetry Labels */}
          <text
            x="52"
            y="75"
            fill="#5a687f"
            fontFamily="monospace"
            fontSize="9"
            letterSpacing="1.5"
          >
            RACK_A // STORAGE
          </text>
          <text
            x="592"
            y="75"
            fill="#5a687f"
            fontFamily="monospace"
            fontSize="9"
            letterSpacing="1.5"
          >
            RACK_B // SORTING
          </text>
          <text
            x="235"
            y="75"
            fill="#5a687f"
            fontFamily="monospace"
            fontSize="8.5"
            letterSpacing="1"
          >
            INBOUND_STAGING_AREA
          </text>

          {/* 270° Polar LiDAR Perception Sweep Field */}
          <path
            d="M 230 300 L 90 190 A 210 210 0 1 1 420 350 Z"
            fill="url(#lidarBeamHero)"
          />

          {/* Polar Range Arc Rings centered at Robot */}
          <circle
            cx="230"
            cy="300"
            r="160"
            stroke="#00e5ff"
            strokeDasharray="3 5"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
          <circle
            cx="230"
            cy="300"
            r="95"
            stroke="#00e5ff"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
          <circle
            cx="230"
            cy="300"
            r="35"
            stroke="#00e5ff"
            strokeOpacity="0.3"
            strokeWidth="1"
          />

          {/* LiDAR Point Cloud Clusters along Obstacles */}
          <g fill="#9cf0ff" opacity="0.6">
            <circle cx="140" cy="210" r="1.5" />
            <circle cx="140" cy="230" r="1.5" />
            <circle cx="140" cy="255" r="1.5" />
            <circle cx="140" cy="285" r="1.5" />
            <circle cx="140" cy="315" r="1.5" />
            <circle cx="580" cy="270" r="1.5" />
            <circle cx="580" cy="300" r="1.5" />
            <circle cx="580" cy="330" r="1.5" />
            <circle cx="260" cy="196" r="1.5" />
            <circle cx="300" cy="196" r="1.5" />
            <circle cx="380" cy="196" r="1.5" />
            <circle cx="460" cy="196" r="1.5" />
          </g>

          {/* Dynamic Obstacle: Human Pedestrian Detection & Safety Zone */}
          <g
            className="cursor-pointer transition-opacity hover:opacity-100"
            onMouseEnter={() => setActiveTarget("human")}
            onMouseLeave={() => setActiveTarget(null)}
          >
            {/* Safety Radius Ring */}
            <circle
              cx="380"
              cy="230"
              r="36"
              fill="#f87171"
              fillOpacity="0.08"
              stroke="#f87171"
              strokeDasharray="4 3"
              strokeWidth="1.2"
            />
            {/* Person Icon / Center Marker */}
            <rect
              x="372"
              y="222"
              width="16"
              height="16"
              rx="2"
              fill="#f87171"
              fillOpacity="0.75"
            />
            <text
              x="385"
              y="212"
              fill="#f87171"
              fontFamily="monospace"
              fontSize="9"
              fontWeight="600"
              letterSpacing="0.5"
            >
              HUMAN PROXIMITY [2.0M ZONE]
            </text>
          </g>

          {/* Dynamic Obstacle: Forklift Crossing Warning */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setActiveTarget("forklift")}
            onMouseLeave={() => setActiveTarget(null)}
          >
            <rect
              x="180"
              y="125"
              width="40"
              height="24"
              rx="2"
              fill="#c084fc"
              fillOpacity="0.15"
              stroke="#c084fc"
              strokeWidth="1"
            />
            <text
              x="180"
              y="118"
              fill="#c084fc"
              fontFamily="monospace"
              fontSize="8"
              letterSpacing="0.5"
            >
              FORKLIFT_03
            </text>
          </g>

          {/* Planned Trajectory Path Spline */}
          <path
            d="M 230 300 Q 280 300 310 265 T 410 170 T 510 125"
            fill="none"
            stroke="#00e5ff"
            strokeDasharray="7 4"
            strokeLinecap="round"
            strokeWidth="2.5"
          />

          {/* Destination Waypoint Node */}
          <g transform="translate(510, 125)">
            <circle cx="0" cy="0" r="22" fill="url(#waypointGlow)" />
            <circle
              cx="0"
              cy="0"
              r="14"
              fill="#00e5ff"
              fillOpacity="0.12"
              stroke="#00e5ff"
              strokeWidth="1.5"
            />
            <circle cx="0" cy="0" r="4" fill="#00e5ff" />
            <line
              x1="-18"
              y1="0"
              x2="18"
              y2="0"
              stroke="#00e5ff"
              strokeDasharray="2 2"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="-18"
              x2="0"
              y2="18"
              stroke="#00e5ff"
              strokeDasharray="2 2"
              strokeWidth="1"
            />
            <text
              x="22"
              y="4"
              fill="#00e5ff"
              fontFamily="monospace"
              fontSize="9"
              fontWeight="600"
              letterSpacing="0.5"
            >
              [DEST: BAY_08 // INBOUND]
            </text>
          </g>

          {/* Robot Pose Silhouette (AMR Chassis) */}
          <g transform="translate(230, 300) rotate(-65)">
            {/* Main Chassis Base */}
            <rect
              x="-18"
              y="-26"
              width="36"
              height="52"
              rx="4"
              fill="#080c16"
              stroke="#00e5ff"
              strokeWidth="2"
            />
            {/* Inner Mechanical Envelope */}
            <rect
              x="-13"
              y="-20"
              width="26"
              height="40"
              rx="2"
              fill="#101827"
              stroke="#00e5ff"
              strokeOpacity="0.4"
              strokeWidth="1"
            />
            {/* Left Drive Wheel */}
            <rect x="-22" y="-12" width="4" height="14" rx="1" fill="#00e5ff" />
            {/* Right Drive Wheel */}
            <rect x="18" y="-12" width="4" height="14" rx="1" fill="#00e5ff" />
            {/* Forward Heading Vector */}
            <polygon points="0,-18 5,-8 -5,-8" fill="#00e5ff" />
            {/* Center Perception Pivot (LiDAR Mount Point) */}
            <circle cx="0" cy="0" r="4" fill="#ffffff" />
            <circle
              cx="0"
              cy="0"
              r="7"
              stroke="#00e5ff"
              strokeWidth="1"
              strokeOpacity="0.7"
            />
          </g>

          {/* Corner Registration Crosshairs */}
          <g stroke="#3a4860" strokeWidth="1">
            <path d="M 12 8 L 12 16 M 8 12 L 16 12" />
            <path d="M 708 8 L 708 16 M 704 12 L 712 12" />
            <path d="M 12 438 L 12 446 M 8 442 L 16 442" />
            <path d="M 708 438 L 708 446 M 704 442 L 712 442" />
          </g>
        </svg>

        {/* Minimal Engineering Overlay */}
        <div className="absolute bottom-3 left-3 bg-[#060810]/90 backdrop-blur-md px-3 py-2 rounded border border-white/10 font-mono text-[10px] text-text-muted space-y-0.5 pointer-events-none">
          <div className="text-accent-cyan font-semibold">
            ROBOT_POSE {"//"} 2D TOPOLOGY
          </div>
          <div>CORRIDOR: AISLE_02 · HEADING: 115°</div>
          <div className="text-text-secondary">
            MODE: {activeTarget ? `OBSTACLE AVOIDANCE [${activeTarget.toUpperCase()}]` : "AUTONOMOUS WAYPOINT TRACKING"}
          </div>
        </div>

        {/* Legend / Key Overlay */}
        <div className="hidden sm:block absolute top-3 right-3 bg-[#060810]/90 backdrop-blur-md px-3 py-2 rounded border border-white/10 font-mono text-[10px] text-text-muted space-y-1 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-1 bg-accent-cyan inline-block rounded-sm"></span>
            <span>PLANNED TRAJECTORY</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full border border-[#f87171] inline-block"></span>
            <span>SAFETY PERIMETER</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-cyan inline-block rounded-full"></span>
            <span>INBOUND WAYPOINT</span>
          </div>
        </div>
      </div>

      {/* Caption & Factual Note */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-3 pt-3 border-t border-white/5 text-[11px] font-mono text-text-muted">
        <span>ABSTRACT SPATIAL PERCEPTION &amp; OCCUPANCY TOPOLOGY</span>
        <span className="text-text-secondary">
          CONCEPTUAL INDUSTRIAL AMR SIMULATION · NOT A LIVE DASHBOARD
        </span>
      </div>
    </div>
  );
}
