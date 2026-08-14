import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  Code2,
  FileText,
  GitBranch,
  Globe2,
  Lightbulb,
  LineChart,
  Map,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "AI Agents", href: "#ai-agents" },
  { label: "Features", href: "#features" },
  { label: "Example Report", href: "#example-report" },
  { label: "FAQ", href: "#faq" },
] as const;

export const footerLinks = {
  product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "AI Agents", href: "#ai-agents" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export const trustPillars = [
  "Research",
  "Validation",
  "Strategy",
  "Technology Planning",
] as const;

export const problems = [
  {
    icon: Search,
    title: "Unclear uniqueness",
    description:
      "Teams struggle to know whether their idea already exists in the market.",
  },
  {
    icon: Globe2,
    title: "Scattered research",
    description:
      "Insights are spread across search engines, forums, papers, and repositories.",
  },
  {
    icon: BarChart3,
    title: "Slow competitor analysis",
    description:
      "Mapping competitors and positioning can take hours before any building begins.",
  },
  {
    icon: Users,
    title: "Hidden pain points",
    description:
      "Real user frustrations are difficult to identify without structured research.",
  },
  {
    icon: BookOpen,
    title: "Repetitive student projects",
    description:
      "Students often rebuild ideas that have already been explored many times.",
  },
  {
    icon: Target,
    title: "Unvalidated assumptions",
    description:
      "Founders move forward without testing whether the opportunity is worth pursuing.",
  },
  {
    icon: GitBranch,
    title: "Disconnected planning",
    description:
      "Technical planning often happens separately from market and user research.",
  },
] as const;

export const solutionFlow = [
  "Idea",
  "Research",
  "Competition",
  "Pain Points",
  "Innovation",
  "Validation",
  "Strategy",
  "Technology",
  "MVP",
] as const;

export const howItWorksSteps = [
  {
    step: "01",
    icon: Lightbulb,
    title: "Enter Your Idea",
    description:
      "Describe your concept, audience, and goals in a structured workspace.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "AI Research Begins",
    description:
      "Specialized agents start gathering context across products, papers, and markets.",
  },
  {
    step: "03",
    icon: Bot,
    title: "Agents Analyze",
    description:
      "Each agent contributes focused insights instead of one generic response.",
  },
  {
    step: "04",
    icon: FileText,
    title: "Get Your Product Blueprint",
    description:
      "Receive a clear validation summary, strategy direction, and MVP roadmap.",
  },
] as const;

export type AgentStatus = "active" | "ready" | "analyzing";

export type AgentCard = {
  name: string;
  role: string;
  icon: LucideIcon;
  status: AgentStatus;
};

export const agents: AgentCard[] = [
  {
    name: "Idea Understanding Agent",
    role: "Clarifies scope, audience, and problem framing.",
    icon: Lightbulb,
    status: "active",
  },
  {
    name: "Research Agent",
    role: "Surfaces relevant products, papers, and market signals.",
    icon: Search,
    status: "analyzing",
  },
  {
    name: "Competitor Intelligence Agent",
    role: "Maps alternatives, positioning, and differentiation gaps.",
    icon: Target,
    status: "ready",
  },
  {
    name: "User Pain Point Agent",
    role: "Identifies frustrations, unmet needs, and user workflows.",
    icon: Users,
    status: "analyzing",
  },
  {
    name: "Innovation Agent",
    role: "Highlights opportunities to improve or reinvent the idea.",
    icon: Sparkles,
    status: "ready",
  },
  {
    name: "Market Validation Agent",
    role: "Evaluates demand signals and viability indicators.",
    icon: TrendingUp,
    status: "active",
  },
  {
    name: "Business Strategy Agent",
    role: "Shapes positioning, monetization, and go-to-market angles.",
    icon: LineChart,
    status: "ready",
  },
  {
    name: "Technology Advisor Agent",
    role: "Recommends architecture, stack, and implementation paths.",
    icon: Code2,
    status: "analyzing",
  },
  {
    name: "MVP Planner Agent",
    role: "Prioritizes features into a practical first release.",
    icon: Map,
    status: "ready",
  },
  {
    name: "Documentation Agent",
    role: "Organizes findings into clear, shareable documentation.",
    icon: FileText,
    status: "ready",
  },
  {
    name: "UI/UX Agent",
    role: "Suggests user flows, screens, and experience direction.",
    icon: Palette,
    status: "active",
  },
  {
    name: "AI Code Assistant",
    role: "Supports implementation planning with technical guidance.",
    icon: Brain,
    status: "ready",
  },
];

export const heroAgents = [
  { name: "Idea Agent", status: "active" as const },
  { name: "Research Agent", status: "analyzing" as const },
  { name: "Competitor Agent", status: "ready" as const },
  { name: "Market Agent", status: "analyzing" as const },
  { name: "Innovation Agent", status: "active" as const },
];

export const features = [
  {
    icon: Lightbulb,
    title: "Idea Refinement",
    description: "Sharpen your concept with structured framing and context.",
  },
  {
    icon: Search,
    title: "Existing Solution Research",
    description: "Discover whether similar products or projects already exist.",
  },
  {
    icon: GitBranch,
    title: "GitHub Research",
    description: "Explore open-source projects and implementation patterns.",
  },
  {
    icon: BookOpen,
    title: "Research Paper Discovery",
    description: "Find academic work related to your idea and domain.",
  },
  {
    icon: Target,
    title: "Competitor Intelligence",
    description: "Compare alternatives, strengths, and market positioning.",
  },
  {
    icon: Users,
    title: "Pain Point Analysis",
    description: "Understand user frustrations and unmet needs.",
  },
  {
    icon: Sparkles,
    title: "Innovation Opportunities",
    description: "Identify ways to differentiate and improve your concept.",
  },
  {
    icon: ShieldCheck,
    title: "Market Validation",
    description: "Review demand signals and viability indicators.",
  },
  {
    icon: Code2,
    title: "Technology Recommendations",
    description: "Get practical stack and architecture suggestions.",
  },
  {
    icon: Map,
    title: "MVP Roadmap",
    description: "Prioritize the first version with a focused plan.",
  },
  {
    icon: LineChart,
    title: "Business Strategy",
    description: "Explore positioning, audience, and growth direction.",
  },
  {
    icon: FileText,
    title: "Professional Reports",
    description: "Present findings in a polished, decision-ready format.",
  },
] as const;

export const reportScores = [
  { label: "Validation Score", value: 82, tone: "text-emerald-600 dark:text-emerald-400" },
  { label: "Innovation Score", value: 76, tone: "text-sky-600 dark:text-sky-400" },
  { label: "Startup Potential", value: 88, tone: "text-violet-600 dark:text-violet-400" },
  { label: "Risk Score", value: 34, tone: "text-amber-600 dark:text-amber-400" },
] as const;

export const reportSections = [
  {
    title: "Similar Products",
    items: ["StudyFlow AI", "Campus Project Hub", "IdeaValidate Pro"],
  },
  {
    title: "Competitor Analysis",
    items: ["Feature overlap mapped", "Pricing models compared", "Positioning gaps identified"],
  },
  {
    title: "Market Gap",
    items: ["Underserved student founders", "Limited multi-agent research tools"],
  },
  {
    title: "Unique Features",
    items: ["Agent collaboration view", "Evidence-linked insights", "MVP planning layer"],
  },
  {
    title: "Recommended Technology",
    items: ["Next.js frontend", "Python agent orchestration", "PostgreSQL data layer"],
  },
  {
    title: "MVP Roadmap",
    items: ["Phase 1: Idea intake", "Phase 2: Research report", "Phase 3: MVP planner"],
  },
] as const;

export const benefits = [
  {
    icon: Zap,
    title: "Research faster",
    description: "Move from scattered notes to structured insight in one workspace.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce repetitive project ideas",
    description: "Identify overlap early and focus on more distinctive concepts.",
  },
  {
    icon: TrendingUp,
    title: "Discover market gaps",
    description: "Spot underserved opportunities before committing to build.",
  },
  {
    icon: Target,
    title: "Understand competitors",
    description: "See how alternatives position themselves and where you can differ.",
  },
  {
    icon: Users,
    title: "Identify user problems",
    description: "Ground your idea in real frustrations and workflows.",
  },
  {
    icon: Map,
    title: "Plan an MVP",
    description: "Translate research into a practical first version.",
  },
  {
    icon: Code2,
    title: "Choose technologies",
    description: "Align technical decisions with product and market context.",
  },
  {
    icon: FileText,
    title: "Create professional documentation",
    description: "Share findings in a format suitable for teams and mentors.",
  },
] as const;

export const targetUsers = [
  { title: "Students", description: "Explore stronger, more original project ideas." },
  { title: "Hackathon Participants", description: "Validate concepts quickly before build week." },
  { title: "Researchers", description: "Connect ideas to existing work and market context." },
  { title: "Startup Founders", description: "Pressure-test assumptions before investing time." },
  { title: "Entrepreneurs", description: "Turn concepts into clearer go-to-market direction." },
  { title: "Developers", description: "Bridge product thinking with technical planning." },
  { title: "Product Managers", description: "Structure discovery around users and competition." },
  { title: "Universities", description: "Support innovation programs with guided research." },
  { title: "Innovation Labs", description: "Evaluate ideas with a repeatable research workflow." },
] as const;

export const faqItems = [
  {
    question: "What is AI VentureLab?",
    answer:
      "AI VentureLab is a multi-agent platform designed to help you research, validate, and plan startup or project ideas in one workspace.",
  },
  {
    question: "How does the multi-agent system work?",
    answer:
      "Instead of relying on one generic assistant, AI VentureLab coordinates specialized agents—each focused on research, competition, validation, strategy, or planning—and combines their outputs into a structured product blueprint.",
  },
  {
    question: "Is AI VentureLab a chatbot?",
    answer:
      "No. It is a research and planning workspace powered by collaborative AI agents, not a simple chat interface.",
  },
  {
    question: "Who can use AI VentureLab?",
    answer:
      "Students, founders, developers, product managers, researchers, universities, and innovation teams can use it to explore and validate ideas.",
  },
  {
    question: "Can students use it for project ideas?",
    answer:
      "Yes. It is designed to help students refine project concepts, check for overlap, and plan more distinctive submissions.",
  },
  {
    question: "Does it research existing solutions?",
    answer:
      "Yes. The platform is designed to surface existing products, repositories, papers, and market signals related to your idea.",
  },
  {
    question: "Will the research results be evidence-based?",
    answer:
      "The goal is to organize findings with supporting context and references where available, so you can review the reasoning behind each insight.",
  },
  {
    question: "Is the MVP free?",
    answer:
      "The MVP is being designed around free and free-tier resources where practical.",
  },
] as const;
