# Swastik Mahamuni

**Software Engineering × Full-Stack Development × AI Engineering**

Personal portfolio website of Swastik Mahamuni, built to showcase selected software engineering, full-stack, AI, and systems projects.

[Live Website](https://swastikmahamuni.in)

---

## Overview

This repository contains the source code for my personal portfolio website. It presents selected projects, engineering experience, technical skills, achievements, and SHESH — an experimental personal multi-agent AI companion concept.

---

## Live Website

[swastikmahamuni.in](https://swastikmahamuni.in)

### Application Routes

| Route | Description |
| :--- | :--- |
| `/` | Portfolio overview, selected work preview, and technical focus |
| `/work` | Directory of engineering projects and case studies |
| `/projects/orca` | **ORCA** case study — Marine AI decision support platform |
| `/projects/aumbyte` | **AUMByte** case study — Edge AI crop disease detection system |
| `/projects/vyom` | **VYOM** case study — Autonomous industrial mobile robot |
| `/shesh` | **SHESH** concept experience and interactive visual system |
| `/about` | Technical background, philosophy, and engineering constellation |
| `/experience` | Operational logs, engineering timeline, and research milestones |
| `/achievements` | Validated accolades, competition awards, and credentials |
| `/contact` | Direct communication channels and links |

---

## Preview

The live portfolio preview will be added after the first production deployment.

---

## Selected Work

### ORCA — Marine AI Decision Support Platform
An AI-assisted marine decision-support concept designed to integrate weather, ocean conditions, fishing patterns, safety information, routing, and market information into a unified decision-support experience.

**Role:** Problem formulation, system architecture, and multi-agent workflow design.

### AUMByte — Edge AI Crop Disease Detection System
An edge-AI system designed for crop disease detection using local image acquisition/inference and SMS-based alerts.

**Role:** System architecture, edge AI inference, image acquisition, and alert workflow design.

**Achievement:** IEIL Winner.

### VYOM — Autonomous Industrial Mobile Robot
An autonomous industrial mobile robot concept for indoor factory and warehouse environments, combining navigation, perception, environmental monitoring, and safety systems.

**Role:** Systems architecture, compute hierarchy, perception architecture, and hardware/software integration.

**Achievement:** CRiEYA L3 Funding Stage.

### SHESH — Personal Multi-Agent AI Companion
An experimental, in-development AI companion concept exploring conversational intelligence, personality, agentic infrastructure, and future multi-agent interaction.

The visual system uses a custom procedural WebGL/GLSL visual system that responds to user interaction.

---

## Technology Stack

- **Framework:** Next.js (App Router)
- **Core Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Code Quality:** ESLint
- **Graphics:** WebGL / GLSL

---

## Project Structure

```
swastik-portfolio/
├── public/
│   └── images/
│       └── projects/
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   └── lib/
├── next.config.ts
├── tsconfig.json
└── package.json
```

- `src/app/` → application routes and page structure
- `src/components/` → reusable interface, project, motion and SHESH components
- `src/data/` → centralized portfolio content
- `src/lib/` → shared utilities
- `public/images/` → static project imagery

---

## Centralized Content

Portfolio details, project case studies, timelines, and technical skill matrices are centralized under `src/data/`:

- `site.ts`
- `projects.ts`
- `experience.ts`
- `achievements.ts`
- `education.ts`
- `skills.ts`
- `shesh.ts`

This structure allows portfolio content to be updated cleanly without scattering information across presentation components.

---

## Design Philosophy

The portfolio uses a dark, restrained interface combining editorial typography, technical interface accents, subtle motion, and an experimental visual language for SHESH.

---

## Local Development

```bash
git clone https://github.com/swastikmahamuni-05/swastik-portfolio.git
cd swastik-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Verification

```bash
npm run build
npm run typecheck
npm run lint
```

The current production build successfully generates 15 routes, and the typecheck and lint checks pass cleanly.

---

## Deployment

Deployment target: Vercel

Domain: swastikmahamuni.in

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
