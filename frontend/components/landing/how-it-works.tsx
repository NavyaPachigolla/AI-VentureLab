import { howItWorksSteps } from "@/components/landing/landing-data";
import { Section } from "@/components/landing/section";
import { SectionHeader } from "@/components/landing/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeader
        eyebrow="How It Works"
        title="From idea to blueprint in four focused steps."
        description="A clear workflow that turns early concepts into structured research, validation, and planning."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {howItWorksSteps.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.step}
              className="border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    {item.step}
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
