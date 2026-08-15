import type {
  FormStep,
  ProjectFormData,
  ProjectFormErrors,
} from "@/types/project";

export const initialProjectFormData: ProjectFormData = {
  projectName: "",
  projectType: "",
  industry: "",
  shortDescription: "",
  problemStatement: "",
  solutionIdea: "",
  currentAlternative: "",
  primaryTargetUsers: "",
  userTypes: [],
  targetGeography: "",
  researchGoals: [],
  projectStage: "idea",
  knownCompetitors: "",
  technologiesConsidered: "",
  additionalNotes: "",
};

function isBlank(value: string) {
  return value.trim().length === 0;
}

export function validateStep(
  step: FormStep,
  data: ProjectFormData
): ProjectFormErrors {
  const errors: ProjectFormErrors = {};

  if (step === 0) {
    if (isBlank(data.projectName)) {
      errors.projectName = "Project name is required.";
    }
    if (!data.projectType) {
      errors.projectType = "Project type is required.";
    }
    if (isBlank(data.shortDescription)) {
      errors.shortDescription = "Short description is required.";
    }
  }

  if (step === 1) {
    if (isBlank(data.problemStatement)) {
      errors.problemStatement = "Problem statement is required.";
    }
    if (isBlank(data.solutionIdea)) {
      errors.solutionIdea = "Solution idea is required.";
    }
  }

  if (step === 2) {
    if (isBlank(data.primaryTargetUsers)) {
      errors.primaryTargetUsers = "Primary target users are required.";
    }
  }

  if (step === 3) {
    if (data.researchGoals.length === 0) {
      errors.researchGoals = "Please select at least one research goal.";
    }
    if (!data.projectStage) {
      errors.projectStage = "Project stage is required.";
    }
  }

  return errors;
}

export function validateAll(data: ProjectFormData): ProjectFormErrors {
  return {
    ...validateStep(0, data),
    ...validateStep(1, data),
    ...validateStep(2, data),
    ...validateStep(3, data),
  };
}

export function hasErrors(errors: ProjectFormErrors) {
  return Object.keys(errors).length > 0;
}
