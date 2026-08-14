import { problems } from "@/components/landing/landing-data";
import { Section } from "@/components/landing/section";
import { SectionHeader } from "@/components/landing/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <Section id="problem">
      <SectionHeader
        eyebrow="The Problem"
        title="Great ideas fail before they are built."
        description="Most teams start building before they understand the market, the competition, or the real user problem."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {problems.map((problem) => {
          const Icon = problem.icon;
          return (
            <Card
              key={problem.title}
              className="border-border/70 bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <span className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="text-base">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
