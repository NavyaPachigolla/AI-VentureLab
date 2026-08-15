import { AiResearchStatus } from "@/components/dashboard/ai-research-status";
import type { Project } from "@/components/dashboard/dashboard-data";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { PlanCard } from "@/components/dashboard/plan-card";
import { QuickStart } from "@/components/dashboard/quick-start";
import { RecentProjects } from "@/components/dashboard/recent-projects";
import { ResearchActivity } from "@/components/dashboard/research-activity";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { ValidationOverview } from "@/components/dashboard/validation-overview";
import { listProjects } from "@/lib/projects/repository";

export default async function DashboardPage() {
  let projects: Project[] = [];

  try {
    projects = await listProjects();
  } catch {
    projects = [];
  }

  return (
    <DashboardShell title="Overview">
      <DashboardHeader />
      <QuickStart />
      <StatsGrid />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <RecentProjects projects={projects} />

        <div className="space-y-6">
          <ResearchActivity />
          <ValidationOverview />
          <AiResearchStatus />
          <PlanCard />
        </div>
      </div>
    </DashboardShell>
  );
}
