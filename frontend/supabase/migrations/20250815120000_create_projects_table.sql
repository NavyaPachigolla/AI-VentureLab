-- AI VentureLab: projects table (Phase 5)
-- Stores project briefs submitted through the Phase 4 creation workflow.

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NULL,
  project_name TEXT NOT NULL,
  project_type TEXT NOT NULL,
  industry TEXT NULL,
  short_description TEXT NOT NULL,
  problem_statement TEXT NOT NULL,
  solution_idea TEXT NOT NULL,
  current_alternative TEXT NULL,
  primary_target_users TEXT NOT NULL,
  user_types TEXT[] NOT NULL DEFAULT '{}',
  target_geography TEXT NULL,
  research_goals TEXT[] NOT NULL DEFAULT '{}',
  project_stage TEXT NOT NULL,
  known_competitors TEXT NULL,
  technologies_considered TEXT NULL,
  additional_notes TEXT NULL,
  status TEXT NOT NULL DEFAULT 'Draft',
  validation_score INTEGER NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT projects_status_check CHECK (
    status IN ('Draft', 'Analyzing', 'Completed')
  ),
  CONSTRAINT projects_validation_score_check CHECK (
    validation_score IS NULL OR (validation_score >= 0 AND validation_score <= 100)
  )
);

COMMENT ON TABLE public.projects IS 'Project briefs for AI VentureLab research workflows.';
COMMENT ON COLUMN public.projects.user_id IS 'Reserved for Phase 6 authentication (auth.users.id).';

CREATE INDEX IF NOT EXISTS projects_created_at_idx
  ON public.projects (created_at DESC);

CREATE INDEX IF NOT EXISTS projects_updated_at_idx
  ON public.projects (updated_at DESC);

CREATE INDEX IF NOT EXISTS projects_status_idx
  ON public.projects (status);

CREATE INDEX IF NOT EXISTS projects_project_stage_idx
  ON public.projects (project_stage);

CREATE INDEX IF NOT EXISTS projects_user_id_idx
  ON public.projects (user_id);

CREATE OR REPLACE FUNCTION public.set_projects_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS projects_set_updated_at ON public.projects;

CREATE TRIGGER projects_set_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.set_projects_updated_at();

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Phase 5 security note:
-- Per-user RLS (auth.uid() = user_id) requires authentication (Phase 6).
-- Until then, direct table access via the publishable key is blocked below.
-- Server Route Handlers use the same anon/publishable role, so interim policies
-- are required for persistence during the no-auth phase.
-- REPLACE these policies in Phase 6 with user-scoped access controls.

CREATE POLICY "projects_insert_interim_phase5"
  ON public.projects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (user_id IS NULL);

CREATE POLICY "projects_select_interim_phase5"
  ON public.projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- No UPDATE/DELETE policies until authentication and ownership rules exist.
