import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CheckCircle2,
  Clock,
  FileText,
  FolderKanban,
  PlusCircle,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export type ProjectStatus = "Completed" | "Analyzing" | "Draft";

export type AgentStatus = "Completed" | "Analyzing" | "Queued";

export type DashboardStat = {
  label: string;
  value: string;
  trend?: string;
  icon: LucideIcon;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  validationScore: number | null;
  lastUpdated: string;
};

export type Activity = {
  id: string;
  description: string;
  timestamp: string;
  icon: LucideIcon;
};

export type ValidationMetric = {
  label: string;
  value: number;
};

export type ResearchAgent = {
  name: string;
  status: AgentStatus;
};

export const dashboardUser = {
  name: "Alex Johnson",
  plan: "Free Plan",
  greeting: "Good morning, Alex",
} as const;

export const dashboardStats: DashboardStat[] = [
  {
    label: "Projects Researched",
    value: "12",
    trend: "+2 this month",
    icon: FolderKanban,
  },
  {
    label: "Reports Generated",
    value: "8",
    trend: "+1 this week",
    icon: FileText,
  },
  {
    label: "Average Validation Score",
    value: "78%",
    trend: "Demo metric",
    icon: TrendingUp,
  },
  {
    label: "Research Hours Saved",
    value: "34h",
    trend: "Estimated demo",
    icon: Clock,
  },
];

export const recentProjects: Project[] = [
  {
    id: "campus-connect",
    name: "CampusConnect",
    description: "Student networking platform for university communities.",
    status: "Completed",
    validationScore: 82,
    lastUpdated: "2 hours ago",
  },
  {
    id: "ai-study-planner",
    name: "AI Study Planner",
    description: "Personalized study scheduling with AI recommendations.",
    status: "Analyzing",
    validationScore: 71,
    lastUpdated: "Yesterday",
  },
  {
    id: "local-business-copilot",
    name: "Local Business Copilot",
    description: "AI assistant for small business operations and marketing.",
    status: "Completed",
    validationScore: 88,
    lastUpdated: "2 days ago",
  },
  {
    id: "student-skill-matcher",
    name: "Student Skill Matcher",
    description: "Match students with projects based on skills and interests.",
    status: "Draft",
    validationScore: null,
    lastUpdated: "3 days ago",
  },
];

export const researchActivities: Activity[] = [
  {
    id: "activity-1",
    description: "Research completed for AI Study Planner",
    timestamp: "2 hours ago",
    icon: CheckCircle2,
  },
  {
    id: "activity-2",
    description: "Competitor analysis completed for CampusConnect",
    timestamp: "Yesterday",
    icon: Target,
  },
  {
    id: "activity-3",
    description: "New project created: Student Skill Matcher",
    timestamp: "2 days ago",
    icon: PlusCircle,
  },
  {
    id: "activity-4",
    description: "Validation report generated for Local Business Copilot",
    timestamp: "3 days ago",
    icon: FileText,
  },
];

export const validationMetrics: ValidationMetric[] = [
  { label: "Market Potential", value: 82 },
  { label: "Innovation", value: 74 },
  { label: "Competition Risk", value: 38 },
  { label: "Technical Feasibility", value: 89 },
];

export const researchAgents: ResearchAgent[] = [
  { name: "Research Agent", status: "Completed" },
  { name: "Competitor Agent", status: "Completed" },
  { name: "Market Agent", status: "Analyzing" },
  { name: "Innovation Agent", status: "Queued" },
  { name: "Technology Agent", status: "Queued" },
];

export const sidebarNavItems = [
  { label: "Overview", href: "/dashboard", icon: BarChart3, active: true },
  { label: "Projects", href: "#projects", icon: FolderKanban, active: false },
  {
    label: "New Analysis",
    href: "#new-analysis",
    icon: Sparkles,
    active: false,
  },
  { label: "Reports", href: "#reports", icon: FileText, active: false },
] as const;

export const sidebarSecondaryNav = [
  { label: "Settings", href: "#settings", icon: Settings },
] as const;
