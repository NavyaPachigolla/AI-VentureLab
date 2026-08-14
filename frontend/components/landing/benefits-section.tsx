import { benefits } from "@/components/landing/landing-data";
import { Section } from "@/components/landing/section";
import { SectionHeader } from "@/components/landing/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BenefitsSection() {
  return (
    <Section id="benefits">
      <SectionHeader
        eyebrow="Benefits"
        title="From idea to execution plan."
        description="Move faster with structured research, clearer validation, and a practical path toward your first release."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <Card
              key={benefit.title}
              className="border-border/70 bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <span className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="text-base">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
