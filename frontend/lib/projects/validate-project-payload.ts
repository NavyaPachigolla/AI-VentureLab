import {
  INDUSTRIES,
  PROJECT_TYPES,
  RESEARCH_GOALS,
  USER_TYPES,
} from "@/components/projects/project-options";
import type { ProjectFormData } from "@/types/project";
import type { ProjectStage, ProjectType } from "@/types/project";

const PROJECT_STAGES: ProjectStage[] = [
  "idea",
  "problem-validated",
  "prototype",
  "mvp",
  "existing-product",
];

export type ProjectPayloadValidationResult =
  | { success: true; data: ProjectFormData }
  | { success: false; errors: Record<string, string> };

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}

export function validateProjectPayload(
  body: unknown
): ProjectPayloadValidationResult {
  const errors: Record<string, string> = {};

  if (!body || typeof body !== "object") {
    return { success: false, errors: { form: "Invalid request body." } };
  }

  const payload = body as Record<string, unknown>;

  const projectName = payload.projectName;
  const projectType = payload.projectType;
  const industry = payload.industry;
  const shortDescription = payload.shortDescription;
  const problemStatement = payload.problemStatement;
  const solutionIdea = payload.solutionIdea;
  const currentAlternative = payload.currentAlternative;
  const primaryTargetUsers = payload.primaryTargetUsers;
  const userTypes = payload.userTypes;
  const targetGeography = payload.targetGeography;
  const researchGoals = payload.researchGoals;
  const projectStage = payload.projectStage;
  const knownCompetitors = payload.knownCompetitors;
  const technologiesConsidered = payload.technologiesConsidered;
  const additionalNotes = payload.additionalNotes;

  if (!isNonEmptyString(projectName)) {
    errors.projectName = "Project name is required.";
  }

  if (
    typeof projectType !== "string" ||
    !PROJECT_TYPES.includes(projectType as ProjectType)
  ) {
    errors.projectType = "A valid project type is required.";
  }

  if (
    industry !== "" &&
    industry !== null &&
    industry !== undefined &&
    (typeof industry !== "string" ||
      !INDUSTRIES.includes(industry as (typeof INDUSTRIES)[number]))
  ) {
    errors.industry = "Industry must be a valid option.";
  }

  if (!isNonEmptyString(shortDescription)) {
    errors.shortDescription = "Short description is required.";
  } else if (shortDescription.length > 1000) {
    errors.shortDescription = "Short description must be 1000 characters or less.";
  }

  if (!isNonEmptyString(problemStatement)) {
    errors.problemStatement = "Problem statement is required.";
  } else if (problemStatement.length > 2000) {
    errors.problemStatement = "Problem statement must be 2000 characters or less.";
  }

  if (!isNonEmptyString(solutionIdea)) {
    errors.solutionIdea = "Solution idea is required.";
  } else if (solutionIdea.length > 2000) {
    errors.solutionIdea = "Solution idea must be 2000 characters or less.";
  }

  if (
    currentAlternative !== undefined &&
    currentAlternative !== null &&
    typeof currentAlternative !== "string"
  ) {
    errors.currentAlternative = "Current alternative must be a string.";
  }

  if (!isNonEmptyString(primaryTargetUsers)) {
    errors.primaryTargetUsers = "Primary target users are required.";
  }

  if (!isStringArray(userTypes)) {
    errors.userTypes = "User types must be an array of strings.";
  } else if (
    userTypes.some(
      (type) => !USER_TYPES.includes(type as (typeof USER_TYPES)[number])
    )
  ) {
    errors.userTypes = "User types contain invalid values.";
  }

  if (
    targetGeography !== undefined &&
    targetGeography !== null &&
    typeof targetGeography !== "string"
  ) {
    errors.targetGeography = "Target geography must be a string.";
  }

  if (!isStringArray(researchGoals) || researchGoals.length === 0) {
    errors.researchGoals = "Please select at least one research goal.";
  } else if (
    researchGoals.some(
      (goal) =>
        !RESEARCH_GOALS.some((option) => option.value === goal)
    )
  ) {
    errors.researchGoals = "Research goals contain invalid values.";
  }

  if (
    typeof projectStage !== "string" ||
    !PROJECT_STAGES.includes(projectStage as ProjectStage)
  ) {
    errors.projectStage = "A valid project stage is required.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  const validatedProjectName = projectName as string;
  const validatedProjectType = projectType as ProjectType;
  const validatedShortDescription = shortDescription as string;
  const validatedProblemStatement = problemStatement as string;
  const validatedSolutionIdea = solutionIdea as string;
  const validatedPrimaryTargetUsers = primaryTargetUsers as string;
  const validatedUserTypes = userTypes as ProjectFormData["userTypes"];
  const validatedResearchGoals = researchGoals as ProjectFormData["researchGoals"];
  const validatedProjectStage = projectStage as ProjectStage;

  return {
    success: true,
    data: {
      projectName: validatedProjectName.trim(),
      projectType: validatedProjectType,
      industry: (typeof industry === "string" ? industry : "") as ProjectFormData["industry"],
      shortDescription: validatedShortDescription.trim(),
      problemStatement: validatedProblemStatement.trim(),
      solutionIdea: validatedSolutionIdea.trim(),
      currentAlternative:
        typeof currentAlternative === "string" ? currentAlternative.trim() : "",
      primaryTargetUsers: validatedPrimaryTargetUsers.trim(),
      userTypes: validatedUserTypes,
      targetGeography:
        typeof targetGeography === "string" ? targetGeography.trim() : "",
      researchGoals: validatedResearchGoals,
      projectStage: validatedProjectStage,
      knownCompetitors:
        typeof knownCompetitors === "string" ? knownCompetitors.trim() : "",
      technologiesConsidered:
        typeof technologiesConsidered === "string"
          ? technologiesConsidered.trim()
          : "",
      additionalNotes:
        typeof additionalNotes === "string" ? additionalNotes.trim() : "",
    },
  };
}
