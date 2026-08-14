import { targetUsers } from "@/components/landing/landing-data";
import { Section } from "@/components/landing/section";
import { SectionHeader } from "@/components/landing/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const accentClasses = [
  "from-primary/10 to-transparent",
  "from-sky-500/10 to-transparent",
  "from-violet-500/10 to-transparent",
  "from-emerald-500/10 to-transparent",
  "from-amber-500/10 to-transparent",
  "from-rose-500/10 to-transparent",
  "from-cyan-500/10 to-transparent",
  "from-indigo-500/10 to-transparent",
  "from-orange-500/10 to-transparent",
];

export function TargetUsers() {
  return (
    <Section id="target-users" className="bg-muted/20">
      <SectionHeader
        eyebrow="Target Users"
        title="Built for builders, founders, and innovation teams."
        description="Whether you are validating a hackathon idea or planning a startup, AI VentureLab is designed to support structured discovery."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {targetUsers.map((user, index) => (
          <Card
            key={user.title}
            className="overflow-hidden border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
          >
            <div
              aria-hidden="true"
              className={cn(
                "h-1.5 bg-gradient-to-r",
                accentClasses[index % accentClasses.length]
              )}
            />
            <CardHeader>
              <CardTitle className="text-lg">{user.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {user.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
