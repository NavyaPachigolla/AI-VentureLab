import type { Project } from "@/components/dashboard/dashboard-data";
import type { ProjectFormData } from "@/types/project";
import type { ProjectInsert, ProjectRecord } from "@/types/database";

export function formatRelativeUpdatedAt(isoDate: string): string {
  const updatedAt = new Date(isoDate);
  const now = new Date();
  const diffMs = now.getTime() - updatedAt.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes === 1 ? "" : "s"} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;

  return updatedAt.toLocaleDateString();
}

export function mapProjectRecordToDashboardProject(
  record: ProjectRecord
): Project {
  return {
    id: record.id,
    name: record.project_name,
    description: record.short_description,
    status: record.status,
    validationScore: record.validation_score,
    lastUpdated: formatRelativeUpdatedAt(record.updated_at),
  };
}

export function mapFormDataToProjectInsert(
  data: ProjectFormData
): ProjectInsert {
  return {
    project_name: data.projectName,
    project_type: data.projectType,
    industry: data.industry || null,
    short_description: data.shortDescription,
    problem_statement: data.problemStatement,
    solution_idea: data.solutionIdea,
    current_alternative: data.currentAlternative || null,
    primary_target_users: data.primaryTargetUsers,
    user_types: data.userTypes,
    target_geography: data.targetGeography || null,
    research_goals: data.researchGoals,
    project_stage: data.projectStage,
    known_competitors: data.knownCompetitors || null,
    technologies_considered: data.technologiesConsidered || null,
    additional_notes: data.additionalNotes || null,
    status: "Draft",
    validation_score: null,
    user_id: null,
  };
}
