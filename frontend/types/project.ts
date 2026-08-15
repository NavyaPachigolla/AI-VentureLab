export type ProjectType =
  | "Startup"
  | "College Project"
  | "Hackathon Project"
  | "Research Project"
  | "Product Idea"
  | "Other";

export type Industry =
  | "Education"
  | "Healthcare"
  | "FinTech"
  | "E-commerce"
  | "Sustainability"
  | "Productivity"
  | "Developer Tools"
  | "AI / Machine Learning"
  | "Social Impact"
  | "Other";

export type UserType =
  | "Students"
  | "Researchers"
  | "Developers"
  | "Startups"
  | "Small Businesses"
  | "Enterprises"
  | "Consumers"
  | "Professionals"
  | "Other";

export type ResearchGoal =
  | "Existing Solutions"
  | "Competitors"
  | "User Pain Points"
  | "Market Opportunity"
  | "Innovation Opportunities"
  | "Technology Options"
  | "Research Papers"
  | "Open Source Projects"
  | "Business Model"
  | "MVP Planning";

export type ProjectStage =
  | "idea"
  | "problem-validated"
  | "prototype"
  | "mvp"
  | "existing-product";

export type ProjectFormData = {
  projectName: string;
  projectType: ProjectType | "";
  industry: Industry | "";
  shortDescription: string;
  problemStatement: string;
  solutionIdea: string;
  currentAlternative: string;
  primaryTargetUsers: string;
  userTypes: UserType[];
  targetGeography: string;
  researchGoals: ResearchGoal[];
  projectStage: ProjectStage;
  knownCompetitors: string;
  technologiesConsidered: string;
  additionalNotes: string;
};

export type ProjectFormErrors = Partial<
  Record<keyof ProjectFormData | "form", string>
>;

export type FormStep = 0 | 1 | 2 | 3 | 4;
