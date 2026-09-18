"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SheshLogo } from "./SheshLogo";

interface SystemNode {
  id: string;
  name: string;
  category: "Orchestrator" | "Agent" | "Layer" | "Execution" | "Endpoint";
  shortRole: string;
  description: string;
  status: "Conceptual Architecture";
}

const SYSTEM_NODES: Record<string, SystemNode> = {
  orchestrator: {
    id: "orchestrator",
    name: "SHESH ORCHESTRATOR",
    category: "Orchestrator",
    shortRole: "Central decision loop & delegation",
    description:
      "Synthesizes high-level intent, determines which specialized agents are required, and coordinates concurrent execution loops.",
    status: "Conceptual Architecture",
  },
  research: {
    id: "research",
    name: "RESEARCH AGENT",
    category: "Agent",
    shortRole: "Information gathering & analysis",
    description:
      "Finds, analyzes and synthesizes information from documentation, search indices, and local knowledge bases.",
    status: "Conceptual Architecture",
  },
  tasks: {
    id: "tasks",
    name: "TASKS AGENT",
    category: "Agent",
    shortRole: "Workflow execution & planning",
    description:
      "Breaks broad user objectives into discrete, executable steps and tracks intermediate progress toward completion.",
    status: "Conceptual Architecture",
  },
  context: {
    id: "context",
    name: "CONTEXT AGENT",
    category: "Agent",
    shortRole: "State persistence & continuity",
    description:
      "Maintains relevant context across interactions, tracking working memory, user preferences, and session state.",
    status: "Conceptual Architecture",
  },
  knowledge: {
    id: "knowledge",
    name: "KNOWLEDGE LAYER",
    category: "Layer",
    shortRole: "Structured repositories & references",
    description:
      "Stores curated domain indices, project documentation, and factual knowledge graphs accessible to agents.",
    status: "Conceptual Architecture",
  },
  action: {
    id: "action",
    name: "ACTION ENGINE",
    category: "Layer",
    shortRole: "Execution pipeline & validation",
    description:
      "Manages verification gates, safety bounds, and step-by-step confirmation for active operations.",
    status: "Conceptual Architecture",
  },
  memory: {
    id: "memory",
    name: "UNIFIED MEMORY LAYER",
    category: "Layer",
    shortRole: "Long-term episodic continuity",
    description:
      "Preserves long-term episodic context, historical decisions, and preferences across sessions and devices.",
    status: "Conceptual Architecture",
  },
  tools: {
    id: "tools",
    name: "TOOLS & APIS",
    category: "Execution",
    shortRole: "External capabilities & integrations",
    description:
      "Connects intelligence with external capabilities—including code execution, terminal environments, and third-party APIs.",
    status: "Conceptual Architecture",
  },
  endpoints: {
    id: "endpoints",
    name: "USER / DEVICES",
    category: "Endpoint",
    shortRole: "Personal multi-surface touchpoints",
    description:
      "The physical interaction points across laptop, phone, terminal, and ambient surfaces where the user interacts with SHESH.",
    status: "Conceptual Architecture",
  },
};

export function SheshArchitecture() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNodeKey, setActiveNodeKey] = useState<string>("orchestrator");

  const activeNode = SYSTEM_NODES[activeNodeKey] || SYSTEM_NODES.orchestrator;

  return (
    <section id="architecture" className="py-16 sm:py-24 border-t border-border-subtle">
      <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
        <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest block">
          {"//"} THE SYSTEM
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
          Multi-Agent Orchestration Topology
        </h2>
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
          Rather than relying on a single monolithic prompt, the SHESH architecture decouples
          intelligence into an orchestrator coordinating specialized domain agents, persistent memory,
          and sandboxed execution tools.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Diagrammatic Tree (7 cols) */}
        <div className="lg:col-span-7 bg-[#08090D] border border-border-subtle rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
          {/* Subtle graph background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(103,232,249,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(103,232,249,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* 1. Orchestrator Apex */}
          <div className="flex justify-center relative z-10">
            <button
              onClick={() => setActiveNodeKey("orchestrator")}
              onMouseEnter={() => setActiveNodeKey("orchestrator")}
              className={`w-full max-w-sm p-4 rounded-xl border text-center transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                activeNodeKey === "orchestrator"
                  ? "bg-[#0f1422] border-cyan-400 text-text-primary shadow-lg shadow-cyan-400/10"
                  : "bg-[#101218] border-border-subtle text-text-secondary hover:border-cyan-400/40 hover:text-text-primary"
              }`}
            >
              <div className="font-mono text-[10px] text-cyan-300 tracking-wider uppercase mb-1">
                [ APEX ORCHESTRATOR ]
              </div>
              <h4 className="font-mono text-base font-bold text-text-primary flex items-center justify-center gap-1.5">
                <SheshLogo inline className="h-4 w-auto" />
                <span>ORCHESTRATOR</span>
              </h4>
              <p className="text-xs text-text-muted mt-1">
                Intent decomposition &amp; dynamic routing
              </p>
            </button>
          </div>

          {/* Connector Down to Triad */}
          <div className="flex justify-center text-cyan-400/40 font-mono text-xs select-none">
            │
          </div>

          {/* 2. Specialized Agents Layer */}
          <div className="space-y-2 relative z-10">
            <div className="text-center font-mono text-[10px] text-text-muted uppercase tracking-wider">
              SPECIALIZED AGENTIC POOLS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { key: "research", label: "RESEARCH", desc: "Synthesis & lookups" },
                { key: "tasks", label: "TASKS", desc: "Goal decomposition" },
                { key: "context", label: "CONTEXT", desc: "State persistence" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveNodeKey(item.key)}
                  onMouseEnter={() => setActiveNodeKey(item.key)}
                  className={`p-3 rounded-xl border text-center transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                    activeNodeKey === item.key
                      ? "bg-[#0f1422] border-cyan-400 text-text-primary shadow-md shadow-cyan-400/10"
                      : "bg-[#101218] border-border-subtle text-text-secondary hover:border-cyan-400/40 hover:text-text-primary"
                  }`}
                >
                  <div className="font-mono text-[10px] text-cyan-300 mb-0.5">
                    {"//"} AGENT
                  </div>
                  <h5 className="font-mono text-xs sm:text-sm font-bold">
                    {item.label}
                  </h5>
                  <p className="text-[11px] text-text-muted mt-1 leading-snug">
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Connectors Down to Substrates */}
          <div className="grid grid-cols-3 text-center text-cyan-400/40 font-mono text-xs select-none">
            <div>↓</div>
            <div>↓</div>
            <div>↓</div>
          </div>

          {/* 3. Substrates (Knowledge / Action / Memory) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
            {[
              { key: "knowledge", label: "KNOWLEDGE", desc: "Curated indices" },
              { key: "action", label: "ACTION", desc: "Validation loops" },
              { key: "memory", label: "MEMORY", desc: "Long-term graphs" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveNodeKey(item.key)}
                onMouseEnter={() => setActiveNodeKey(item.key)}
                className={`p-3 rounded-xl border text-center transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                  activeNodeKey === item.key
                    ? "bg-[#0f1422] border-cyan-400 text-text-primary shadow-md shadow-cyan-400/10"
                    : "bg-[#101218] border-border-subtle text-text-secondary hover:border-cyan-400/40 hover:text-text-primary"
                }`}
              >
                <div className="font-mono text-[10px] text-violet-300 mb-0.5">
                  {"//"} CORE LAYER
                </div>
                <h5 className="font-mono text-xs sm:text-sm font-bold">
                  {item.label}
                </h5>
                <p className="text-[11px] text-text-muted mt-1 leading-snug">
                  {item.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Connector Down to Tools */}
          <div className="flex justify-center text-cyan-400/40 font-mono text-xs select-none">
            ↓
          </div>

          {/* 4. Tools & APIs */}
          <div className="flex justify-center relative z-10">
            <button
              onClick={() => setActiveNodeKey("tools")}
              onMouseEnter={() => setActiveNodeKey("tools")}
              className={`w-full max-w-sm p-3.5 rounded-xl border text-center transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                activeNodeKey === "tools"
                  ? "bg-[#0f1422] border-cyan-400 text-text-primary shadow-md shadow-cyan-400/10"
                  : "bg-[#101218] border-border-subtle text-text-secondary hover:border-cyan-400/40 hover:text-text-primary"
              }`}
            >
              <div className="font-mono text-[10px] text-cyan-300 mb-0.5">
                {"//"} EXECUTION INTERFACE
              </div>
              <h5 className="font-mono text-sm font-bold">TOOLS &amp; EXTERNAL APIS</h5>
              <p className="text-xs text-text-muted mt-0.5">
                Sandboxed file I/O, terminal dispatch, web connectivity
              </p>
            </button>
          </div>

          {/* Connector Down to Endpoints */}
          <div className="flex justify-center text-cyan-400/40 font-mono text-xs select-none">
            ↓
          </div>

          {/* 5. User / Devices */}
          <div className="flex justify-center relative z-10">
            <button
              onClick={() => setActiveNodeKey("endpoints")}
              onMouseEnter={() => setActiveNodeKey("endpoints")}
              className={`w-full max-w-sm p-3 rounded-xl border text-center transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                activeNodeKey === "endpoints"
                  ? "bg-[#0f1422] border-cyan-400 text-text-primary shadow-md shadow-cyan-400/10"
                  : "bg-[#101218] border-border-subtle text-text-secondary hover:border-cyan-400/40 hover:text-text-primary"
              }`}
            >
              <h5 className="font-mono text-xs font-semibold text-text-muted uppercase tracking-wider">
                USER / MULTI-SURFACE CLIENTS
              </h5>
            </button>
          </div>
        </div>

        {/* Right: Selected Node Inspector Card (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <motion.div
            key={activeNode.id}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-[#090d18] space-y-4 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs text-cyan-300 uppercase tracking-wider">
                {activeNode.category}
              </span>
              <span className="font-mono text-[10px] text-text-muted bg-[#101218] px-2 py-0.5 rounded border border-border-subtle">
                {activeNode.status}
              </span>
            </div>

            <div>
              <h4 className="font-mono text-xl sm:text-2xl font-bold text-text-primary">
                {activeNode.name}
              </h4>
              <p className="font-mono text-xs text-text-muted mt-1">
                {activeNode.shortRole}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/5">
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block">
                FUNCTIONAL RESPONSIBILITY
              </span>
              <p className="text-sm text-text-secondary leading-relaxed">
                {activeNode.description}
              </p>
            </div>

            <div className="bg-[#05070c] border border-white/10 p-4 rounded-xl font-mono text-xs text-text-muted space-y-1">
              <span className="text-cyan-300 font-semibold text-[10px] uppercase tracking-wider block">
                TOPOLOGY GUARANTEE
              </span>
              <p className="text-[11px] leading-relaxed">
                Deterministic separation of concerns ensures that specialized agents do not execute
                uncontrolled actions without orchestrator validation.
              </p>
            </div>
          </motion.div>

          <div className="p-4 rounded-xl border border-border-subtle bg-[#101218] font-mono text-xs text-text-muted flex items-start gap-3">
            <span className="text-cyan-400 font-bold">ℹ</span>
            <p className="leading-relaxed">
              <span className="text-text-secondary font-semibold">Conceptual Architecture:</span> The
              diagram above specifies the planned multi-agent decomposition. In adherence to factual
              engineering rigor, it does not imply that all specialized agent pools are currently live or
              actively deployed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
