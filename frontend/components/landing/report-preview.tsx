import { reportScores, reportSections } from "@/components/landing/landing-data";
import { Section } from "@/components/landing/section";
import { SectionHeader } from "@/components/landing/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ReportPreview() {
  return (
    <Section id="example-report" className="bg-muted/20">
      <SectionHeader
        eyebrow="Example Report"
        title="See what your product blueprint could look like."
        description="A visual preview of the future AI VentureLab report experience. All data shown below is mock demo content."
      />

      <div className="overflow-hidden rounded-3xl border border-border/70 bg-background shadow-2xl shadow-primary/5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-card/80 px-5 py-4 sm:px-6">
          <div>
            <p className="text-sm font-medium">Campus Study Planner</p>
            <p className="text-xs text-muted-foreground">
              Example analysis report • Demo data only
            </p>
          </div>
          <Badge variant="secondary">Preview</Badge>
        </div>

        <div className="space-y-6 p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {reportScores.map((score) => (
              <Card key={score.label} className="border-border/70 bg-card/90">
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground">{score.label}</p>
                  <p className={`mt-2 text-3xl font-semibold ${score.tone}`}>
                    {score.value}
                    <span className="text-base font-normal text-muted-foreground">
                      /100
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reportSections.map((section) => (
              <Card key={section.title} className="border-border/70 bg-card/80">
                <CardHeader>
                  <CardTitle className="text-base">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border/60 bg-background/70 px-3 py-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
