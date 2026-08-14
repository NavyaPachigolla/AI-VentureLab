import { AiResearchStatus } from "@/components/dashboard/ai-research-status";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { PlanCard } from "@/components/dashboard/plan-card";
import { QuickStart } from "@/components/dashboard/quick-start";
import { RecentProjects } from "@/components/dashboard/recent-projects";
import { ResearchActivity } from "@/components/dashboard/research-activity";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { ValidationOverview } from "@/components/dashboard/validation-overview";

export default function DashboardPage() {
  return (
    <DashboardShell title="Overview">
      <DashboardHeader />
      <QuickStart />
      <StatsGrid />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <RecentProjects />

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
