export type FactualStatus =
  | "Implemented"
  | "Designed"
  | "Prototyped"
  | "In Incubation";

export interface NavItem {
  name: string;
  href: string;
  index: string;
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  shortTitle: string;
  fullTitle: string;
  positioning: string;
  bio: string;
  location: string;
  university: string;
  domain: string;
  copyrightYear: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  navigation: NavItem[];
}

export interface ProjectModule {
  name: string;
  description: string;
  status: FactualStatus | "Proposed";
}

export interface ProjectData {
  id: string;
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  domain: string;
  category: "All" | "AI" | "Systems" | "Full-Stack";
  summary: string;
  status: FactualStatus;
  accolade?: string;
  image: string;
  technologies: {
    category: string;
    items: string[];
  }[];
  keyTechList: string[];
  problem: {
    title: string;
    description: string;
    points: string[];
  };
  architecture: {
    overview: string;
    modules: ProjectModule[];
  };
  contribution: string[];
  outcome?: string;
  verificationNotes?: string;
  targetBenchmarks?: {
    label: string;
    value: string;
    isTargetBenchmark: boolean;
  }[];
  links?: {
    github?: string;
    live?: string;
  };
  nextProject?: {
    slug: string;
    title: string;
    subtitle: string;
  };
}

export interface ExperienceRecord {
  id: string;
  role: string;
  organization: string;
  department?: string;
  timeline: string;
  type: "Enterprise Software" | "Organizational Leadership";
  summary: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface AchievementRecord {
  id: string;
  index: string;
  title: string;
  organization: string;
  timeline: string;
  category: "National Competition" | "Incubation Funding" | "Academic Standing" | "National Hackathon";
  summary: string;
  evidence: string;
  projectSlug?: string;
}

export interface EducationRecord {
  degree: string;
  field: string;
  institution: string;
  location: string;
  timeline: string;
  cgpa: string;
  honors?: string;
  relevantCoursework: string[];
}

export interface SkillCategory {
  title: string;
  index: string;
  tag: string;
  headline: string;
  summary: string;
  skills: string[];
}

export interface SheshEvolutionLevel {
  level: string;
  name: string;
  horizon: string;
  classification: "CURRENT STATUS" | "INTENDED ROADMAP";
  shortSummary: string;
  description: string;
  capabilityScope: string;
  relationship: string;
}

export interface SheshAgentRole {
  role: string;
  function: string;
  description: string;
  modelType: string;
}

export interface SheshSurface {
  surface: string;
  role: string;
  interactionModel: string;
}

export interface SheshConfig {
  title: string;
  subtitle: string;
  statusLabel: string;
  positioningQuote: string;
  heroDescription: string;
  vision: {
    headline: string;
    principles: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  evolutionLevels: SheshEvolutionLevel[];
  agentRoles: SheshAgentRole[];
  surfaces: SheshSurface[];
  personalityTraits: {
    trait: string;
    description: string;
  }[];
}
