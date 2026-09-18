import { SkillCategory } from "./types";

export const focusDomainsData: SkillCategory[] = [
  {
    index: "01",
    tag: "SOFTWARE",
    title: "Full-Stack & Cloud Systems",
    headline: "Full-Stack & Cloud Systems",
    summary:
      "Full-stack applications, robust backend APIs, relational and key-value databases, and scalable cloud infrastructure.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "REST APIs", "AWS S3", "Tailwind CSS"],
  },
  {
    index: "02",
    tag: "AI",
    title: "Intelligent Architectures",
    headline: "Intelligent Architectures",
    summary:
      "Computer vision pipelines, on-device edge inference, multi-agent coordination, and applied machine learning models.",
    skills: ["Edge AI", "Computer Vision", "Multi-Agent Systems", "Python", "PyTorch", "OpenCV"],
  },
  {
    index: "03",
    tag: "SYSTEMS",
    title: "Hardware & Physical Computing",
    headline: "Hardware & Physical Computing",
    summary:
      "Software interacting directly with real-world hardware, microcontrollers, environmental sensors, and robotic systems.",
    skills: ["ROS 2", "2D LiDAR", "ESP32", "Embedded Linux", "C++", "PID Control"],
  },
];

export interface DetailedSkillGroup {
  category: string;
  skills: string[];
}

export const detailedSkillsData: DetailedSkillGroup[] = [
  {
    category: "Languages",
    skills: ["C++", "Python", "TypeScript", "JavaScript", "SQL", "HTML / CSS"],
  },
  {
    category: "Software & Web Development",
    skills: ["React", "Next.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"],
  },
  {
    category: "Artificial Intelligence & Vision",
    skills: ["Edge AI Inference", "Computer Vision", "Multi-Agent Architectures", "PyTorch", "OpenCV"],
  },
  {
    category: "Systems & Embedded",
    skills: ["ROS 2", "2D LiDAR Mapping", "ESP32", "Embedded Linux", "PID Motor Control"],
  },
  {
    category: "Cloud & Developer Tooling",
    skills: ["AWS (S3)", "Git / GitHub", "Docker", "Postman", "CI/CD Workflows"],
  },
];
