import { agents } from "@/components/landing/landing-data";
import { Section } from "@/components/landing/section";
import { SectionHeader } from "@/components/landing/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const statusLabels = {
  active: "Active",
  analyzing: "Analyzing",
  ready: "Ready",
} as const;

const statusVariants = {
  active: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  analyzing: "bg-sky-500/15 text-sky-700 dark:text-sky-400",
  ready: "bg-muted text-muted-foreground",
};

export function AgentsSection() {
  return (
    <Section id="ai-agents" className="bg-muted/20">
      <SectionHeader
        eyebrow="Multi-Agent AI"
        title="Not one AI. An entire AI team."
        description="AI VentureLab uses specialized AI agents with separate responsibilities—each contributing focused insight to your product research and planning workflow."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {agents.map((agent) => {
          const Icon = agent.icon;
          return (
            <Card
              key={agent.name}
              className="border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <Badge
                    variant="secondary"
                    className={cn("text-[10px] uppercase", statusVariants[agent.status])}
                  >
                    {agent.status === "active" ? (
                      <span className="mr-1 inline-block size-1.5 animate-pulse rounded-full bg-current" />
                    ) : null}
                    {statusLabels[agent.status]}
                  </Badge>
                </div>
                <CardTitle className="text-base leading-snug">{agent.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {agent.role}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
