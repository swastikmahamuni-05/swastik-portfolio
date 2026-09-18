import { SheshConfig } from "./types";

export const sheshData: SheshConfig = {
  title: "SHESH",
  subtitle: "A Personal Multi-Agent AI Companion",
  statusLabel: "ACTIVE DEVELOPMENT // RESEARCH CONCEPT",
  positioningQuote: "An exploration into personal AI companions—anchored by contextual memory and multi-agent coordination.",
  heroDescription:
    "An evolving exploration into personal companion architecture—investigating how natural conversation can expand into contextual memory, specialized sub-agents, and cross-device workflows.",
  vision: {
    headline: "Architectural Foundations of a Personal Companion",
    principles: [
      {
        number: "01",
        title: "Contextual Continuity",
        description:
          "Intelligence requires longitudinal context. SHESH retains memory across interactions, linking prior tasks to current problem spaces without forcing the user to repeat prerequisites.",
      },
      {
        number: "02",
        title: "Specialized Delegation",
        description:
          "Rather than relying on an monolithic model to handle every domain, SHESH routes intent through specialized functional sub-agents optimized for code synthesis, research, or system execution.",
      },
      {
        number: "03",
        title: "Human-Aligned Autonomy",
        description:
          "Autonomous workflows are anchored by explicit verification boundaries. High-impact operations require deterministic confirmation before action execution.",
      },
    ],
  },
  evolutionLevels: [
    {
      level: "01",
      name: "CONVERSATIONAL CORE",
      horizon: "Conversational Intelligence (Active)",
      classification: "CURRENT STATUS",
      shortSummary: "Core conversational intelligence and dialogue understanding.",
      description:
        "SHESH is anchored in natural language comprehension, contextual dialogue flow, and focused conversational reasoning tuned for engineering collaboration.",
      capabilityScope: "Reactive natural language dialogue, contextual synthesis, and intent classification.",
      relationship: "The foundational conversational intelligence core that powers all higher tiers of personality and agency.",
    },
    {
      level: "02",
      name: "PERSONALITY",
      horizon: "Context + Behavior",
      classification: "INTENDED ROADMAP",
      shortSummary: "Contextual behavior and communication style.",
      description:
        "SHESH develops a consistent personality, collaborative communication style, and deeper understanding of personal context across sessions.",
      capabilityScope: "Context continuity, preferred tone, and persistent preferences.",
      relationship: "Builds upon Level 01 conversation by adding longitudinal continuity.",
    },
    {
      level: "03",
      name: "AGENCY",
      horizon: "Task-Oriented Intelligence",
      classification: "INTENDED ROADMAP",
      shortSummary: "Structured task execution through agentic workflows.",
      description:
        "SHESH moves from merely answering questions toward executing multi-step objectives through deterministic agentic workflows and tool use.",
      capabilityScope: "Goal decomposition, tool invocation, and verification loops.",
      relationship: "Transforms passive conversational responses into active operational workflows.",
    },
    {
      level: "04",
      name: "COLLECTIVE INTELLIGENCE",
      horizon: "Multi-Agent Infrastructure",
      classification: "INTENDED ROADMAP",
      shortSummary: "Multi-agent coordination across devices and services.",
      description:
        "A distributed system of specialized agents working harmoniously across tools, cloud endpoints, and connected personal devices.",
      capabilityScope: "Distributed agent orchestration, parallel tasks, cross-device sync.",
      relationship: "The terminal architecture: an ambient companion operating across all surfaces.",
    },
  ],
  agentRoles: [
    {
      role: "Context Router",
      function: "Intent & Scope Classification",
      description:
        "Analyzes natural language prompts, evaluates required context, and routes work to the appropriate functional agent.",
      modelType: "Low-Latency Classification Model",
    },
    {
      role: "Knowledge Synthesizer",
      function: "Semantic Memory Retrieval",
      description:
        "Indexes personal notes, code repositories, and past conversations to retrieve relevant context on demand.",
      modelType: "Vector Retrieval & Embeddings",
    },
    {
      role: "Task Decomposition Agent",
      function: "Plan Generation",
      description:
        "Breaks complex multi-step objectives down into atomic, executable tool calls with explicit validation gates.",
      modelType: "High-Reasoning Foundation Model",
    },
    {
      role: "Action Execution Engine",
      function: "Deterministic Tool Execution",
      description:
        "Executes system commands, file edits, API requests, and hardware triggers within sandboxed environments.",
      modelType: "Deterministic Execution Layer",
    },
    {
      role: "Verification Loop",
      function: "Result Validation",
      description:
        "Verifies output correctness against success criteria before concluding a task, triggering self-correction if required.",
      modelType: "Evaluation & Critique Agent",
    },
  ],
  surfaces: [
    {
      surface: "Developer IDE",
      role: "In-Editor Pair Programmer",
      interactionModel: "Inline completions, refactoring diagnostics, and automated unit test authoring.",
    },
    {
      surface: "Terminal & CLI",
      role: "System Automation",
      interactionModel: "Shell command generation, build pipeline monitoring, and server diagnostics.",
    },
    {
      surface: "Web & Browser",
      role: "Research & Synthesis",
      interactionModel: "Documentation summarization, paper extraction, and cross-tab reference coordination.",
    },
    {
      surface: "Physical Edge",
      role: "Ambient Companion",
      interactionModel: "Voice-activated alerts, hardware status monitoring, and localized device control.",
    },
  ],
  personalityTraits: [
    {
      trait: "Rigorous yet Restrained",
      description: "Prefers concise, accurate engineering clarity over conversational filler.",
    },
    {
      trait: "Longitudinal Context",
      description: "Remembers past decisions and architectural patterns without requiring constant re-prompting.",
    },
    {
      trait: "Proactive Verification",
      description: "Confirms assumptions and validates outputs before committing destructive operations.",
    },
  ],
};
