import { ArrowRight } from "lucide-react";

import { solutionFlow } from "@/components/landing/landing-data";
import { Section } from "@/components/landing/section";
import { SectionHeader } from "@/components/landing/section-header";

export function SolutionSection() {
  return (
    <Section id="solution" className="bg-muted/20">
      <SectionHeader
        eyebrow="The Solution"
        title="Your AI research team, in one workspace."
        description="AI VentureLab coordinates specialized agents instead of relying on one generic chatbot—so every stage of discovery stays focused and structured."
      />

      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max items-center gap-2 rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm sm:gap-3 sm:p-6">
          {solutionFlow.map((step, index) => (
            <div key={step} className="flex items-center gap-2 sm:gap-3">
              <div className="rounded-xl border border-border/70 bg-card px-3 py-2 text-sm font-medium shadow-sm sm:px-4 sm:py-3">
                {step}
              </div>
              {index < solutionFlow.length - 1 ? (
                <ArrowRight
                  className="size-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
