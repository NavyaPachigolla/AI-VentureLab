import type { Project } from "@/components/dashboard/dashboard-data";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  mapFormDataToProjectInsert,
  mapProjectRecordToDashboardProject,
} from "@/lib/projects/map-project";
import type { ProjectFormData } from "@/types/project";
import type { ProjectRecord } from "@/types/database";

export async function listProjects(limit = 20): Promise<Project[]> {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("updated_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return (data as ProjectRecord[]).map(mapProjectRecordToDashboardProject);
}

export async function createProject(
  formData: ProjectFormData
): Promise<ProjectRecord> {
  const supabase = createServerSupabaseClient();
  const insertPayload = mapFormDataToProjectInsert(formData);

  const { data, error } = await supabase
    .from("projects")
    .insert(insertPayload)
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as ProjectRecord;
}
