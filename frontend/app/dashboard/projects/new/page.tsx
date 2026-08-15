import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ProjectForm } from "@/components/projects/project-form";

export default function NewProjectPage() {
  return (
    <DashboardShell title="New Analysis">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Start a New Analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            Tell AI VentureLab about your idea so you can research, validate,
            and plan it.
          </p>
        </div>

        <ProjectForm />
      </div>
    </DashboardShell>
  );
}
