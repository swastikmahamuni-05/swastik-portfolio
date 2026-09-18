import { ExperienceRecord } from "./types";

export const experienceData: ExperienceRecord[] = [
  {
    id: "vishay",
    role: "Web Developer Intern",
    organization: "Vishay Components India Pvt. Ltd.",
    timeline: "Oct 2025 — Present",
    type: "Enterprise Software",
    summary:
      "Engineered an enterprise Visitor Management System (VMS) to replace manual sign-in logbooks with secure, audited digital check-ins and real-time host coordination across industrial facility gates.",
    responsibilities: [
      "Architected multi-tier responsive user interfaces with administrative and security guard consoles.",
      "Implemented role-based access control (RBAC) and host approval/rejection notification workflows.",
      "Engineered dynamic encrypted QR pass issuance with automated email dispatch to scheduled visitors.",
      "Integrated secure AWS S3 cloud vaults for encrypted visitor documentation and compliance logging.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS S3", "REST APIs", "Tailwind CSS"],
  },
  {
    id: "vidyut-veda",
    role: "Secretary",
    organization: "Vidyut Veda",
    department: "Department of Electronics & Computer Engineering, MIT ADT University",
    timeline: "Jul 2025 — Present",
    type: "Organizational Leadership",
    summary:
      "Leading technical initiatives, departmental hackathons, and systems laboratories as Executive Secretary for the student council.",
    responsibilities: [
      "Coordinating hands-on engineering workshops and systems laboratories for over 200 student peers.",
      "Organizing department-wide hackathons, competitive coding benchmarks, and robotics demonstrations.",
      "Managing cross-functional student teams and establishing structured technical documentation standards.",
    ],
    technologies: ["Technical Leadership", "Event Coordination", "Workshop Instruction", "Team Mentorship"],
  },
];
