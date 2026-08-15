import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Box,
  Building2,
  Code2,
  FlaskConical,
  GitBranch,
  GraduationCap,
  Layers,
  Lightbulb,
  LineChart,
  Package,
  Rocket,
  Search,
  Sparkles,
  Target,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

import type {
  Industry,
  ProjectStage,
  ProjectType,
  ResearchGoal,
  UserType,
} from "@/types/project";

export const PROJECT_TYPES: ProjectType[] = [
  "Startup",
  "College Project",
  "Hackathon Project",
  "Research Project",
  "Product Idea",
  "Other",
];

export const INDUSTRIES: Industry[] = [
  "Education",
  "Healthcare",
  "FinTech",
  "E-commerce",
  "Sustainability",
  "Productivity",
  "Developer Tools",
  "AI / Machine Learning",
  "Social Impact",
  "Other",
];

export const USER_TYPES: UserType[] = [
  "Students",
  "Researchers",
  "Developers",
  "Startups",
  "Small Businesses",
  "Enterprises",
  "Consumers",
  "Professionals",
  "Other",
];

export const RESEARCH_GOALS: {
  value: ResearchGoal;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    value: "Existing Solutions",
    description: "Find products or projects solving similar problems.",
    icon: Search,
  },
  {
    value: "Competitors",
    description: "Map alternatives and positioning.",
    icon: Target,
  },
  {
    value: "User Pain Points",
    description: "Understand frustrations and unmet needs.",
    icon: Users,
  },
  {
    value: "Market Opportunity",
    description: "Assess demand and opportunity signals.",
    icon: LineChart,
  },
  {
    value: "Innovation Opportunities",
    description: "Identify ways to differentiate.",
    icon: Sparkles,
  },
  {
    value: "Technology Options",
    description: "Explore stack and architecture choices.",
    icon: Code2,
  },
  {
    value: "Research Papers",
    description: "Discover relevant academic work.",
    icon: BookOpen,
  },
  {
    value: "Open Source Projects",
    description: "Review repositories and implementations.",
    icon: GitBranch,
  },
  {
    value: "Business Model",
    description: "Explore monetization and go-to-market.",
    icon: Building2,
  },
  {
    value: "MVP Planning",
    description: "Define a focused first release.",
    icon: Rocket,
  },
];

export const PROJECT_STAGES: {
  value: ProjectStage;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    value: "idea",
    title: "Idea",
    description: "Early concept still being shaped.",
    icon: Lightbulb,
  },
  {
    value: "problem-validated",
    title: "Problem Validated",
    description: "The problem is understood and confirmed.",
    icon: Target,
  },
  {
    value: "prototype",
    title: "Prototype",
    description: "Early prototype or proof of concept exists.",
    icon: Wrench,
  },
  {
    value: "mvp",
    title: "MVP",
    description: "Minimum viable product in progress or launched.",
    icon: Package,
  },
  {
    value: "existing-product",
    title: "Existing Product",
    description: "Live product seeking expansion or repositioning.",
    icon: Layers,
  },
];

export const FORM_STEPS = [
  { id: 0, label: "Idea" },
  { id: 1, label: "Problem" },
  { id: 2, label: "Users" },
  { id: 3, label: "Research" },
  { id: 4, label: "Review" },
] as const;

export const CHAR_LIMITS = {
  shortDescription: 1000,
  problemStatement: 2000,
  solutionIdea: 2000,
  currentAlternative: 1500,
  primaryTargetUsers: 500,
  knownCompetitors: 1500,
  technologiesConsidered: 1500,
  additionalNotes: 2000,
} as const;

export const PROJECT_TYPE_ICONS: Record<ProjectType, LucideIcon> = {
  Startup: Rocket,
  "College Project": GraduationCap,
  "Hackathon Project": Trophy,
  "Research Project": FlaskConical,
  "Product Idea": Lightbulb,
  Other: Box,
};
