import { trustPillars } from "@/components/landing/landing-data";
import { Section } from "@/components/landing/section";

export function TrustSection() {
  return (
    <Section className="border-y border-border/60 bg-muted/20 py-12 sm:py-14">
      <div className="text-center">
        <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          One workspace for the full journey
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {trustPillars.map((pillar, index) => (
            <div key={pillar} className="flex items-center gap-3">
              <span className="rounded-full border border-border/70 bg-background px-4 py-2 text-sm font-medium shadow-sm">
                {pillar}
              </span>
              {index < trustPillars.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="hidden text-muted-foreground sm:inline"
                >
                  +
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
