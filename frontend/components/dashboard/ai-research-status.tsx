import type { AgentStatus } from "@/components/dashboard/dashboard-data";
import { researchAgents } from "@/components/dashboard/dashboard-data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const statusStyles: Record<AgentStatus, string> = {
  Completed: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  Analyzing: "bg-sky-500/15 text-sky-700 dark:text-sky-400",
  Queued: "bg-muted text-muted-foreground",
};

export function AiResearchStatus() {
  return (
    <Card className="border-border/70">
      <CardHeader>
        <CardTitle className="text-base">AI Research Team</CardTitle>
        <CardDescription>
          Mock agent statuses for dashboard preview.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {researchAgents.map((agent) => (
          <div
            key={agent.name}
            className="flex items-center justify-between gap-3 rounded-lg border border-border/60 bg-background/70 px-3 py-2.5"
          >
            <div className="flex items-center gap-2">
              {agent.status === "Analyzing" ? (
                <span
                  className="size-2 animate-pulse rounded-full bg-sky-500"
                  aria-hidden="true"
                />
              ) : null}
              <span className="text-sm font-medium">{agent.name}</span>
            </div>
            <Badge
              variant="secondary"
              className={cn("text-[10px] uppercase", statusStyles[agent.status])}
            >
              {agent.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
