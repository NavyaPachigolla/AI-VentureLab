import type { Project } from "@/components/dashboard/dashboard-data";
import { EmptyState } from "@/components/dashboard/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProjectStatus = Project["status"];

function StatusBadge({ status }: { status: ProjectStatus }) {
  const variants: Record<ProjectStatus, string> = {
    Completed:
      "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
    Analyzing: "bg-sky-500/15 text-sky-700 dark:text-sky-400",
    Draft: "bg-muted text-muted-foreground",
  };

  return (
    <Badge variant="secondary" className={cn(variants[status])}>
      {status}
    </Badge>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <tr className="border-b border-border/60 last:border-0">
      <td className="px-4 py-4 align-top">
        <div>
          <p className="font-medium">{project.name}</p>
          <p className="mt-1 max-w-md text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>
      </td>
      <td className="px-4 py-4 align-top">
        <StatusBadge status={project.status} />
      </td>
      <td className="px-4 py-4 align-top">
        {project.validationScore !== null ? (
          <span className="font-medium">{project.validationScore}%</span>
        ) : (
          <span className="text-muted-foreground">—</span>
        )}
      </td>
      <td className="px-4 py-4 align-top text-sm text-muted-foreground">
        {project.lastUpdated}
      </td>
      <td className="px-4 py-4 align-top">
        <Button type="button" variant="outline" size="sm">
          View Report
        </Button>
      </td>
    </tr>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-border/70">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base">{project.name}</CardTitle>
          <StatusBadge status={project.status} />
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Validation</span>
          <span className="font-medium">
            {project.validationScore !== null
              ? `${project.validationScore}%`
              : "—"}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Last updated</span>
          <span>{project.lastUpdated}</span>
        </div>
        <Button type="button" variant="outline" size="sm" className="w-full">
          View Report
        </Button>
      </CardContent>
    </Card>
  );
}

type RecentProjectsProps = {
  projects: Project[];
};

export function RecentProjects({ projects }: RecentProjectsProps) {
  if (projects.length === 0) {
    return (
      <section aria-labelledby="recent-projects-heading">
        <div className="mb-4">
          <h2
            id="recent-projects-heading"
            className="text-lg font-semibold tracking-tight"
          >
            Recent Projects
          </h2>
          <p className="text-sm text-muted-foreground">
            Saved projects from your research workspace.
          </p>
        </div>
        <EmptyState />
      </section>
    );
  }

  return (
    <section aria-labelledby="recent-projects-heading">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2
            id="recent-projects-heading"
            className="text-lg font-semibold tracking-tight"
          >
            Recent Projects
          </h2>
          <p className="text-sm text-muted-foreground">
            Saved projects from your research workspace.
          </p>
        </div>
      </div>

      <Card className="hidden border-border/70 md:block">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-border/60 bg-muted/20">
                <tr>
                  <th className="px-4 py-3 font-medium">Project</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Validation</th>
                  <th className="px-4 py-3 font-medium">Last Updated</th>
                  <th className="px-4 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <ProjectRow key={project.id} project={project} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:hidden">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
