import Link from "next/link";

import { Section } from "@/components/landing/section";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <Section id="start-research" className="pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary via-primary to-sky-700 px-6 py-14 text-center text-primary-foreground shadow-2xl shadow-primary/20 sm:px-10 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]"
        />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Have an idea? Let&apos;s find out if it&apos;s worth building.
          </h2>
          <p className="mt-4 text-base text-primary-foreground/85 sm:text-lg">
            Research it. Validate it. Improve it. Plan it.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
              render={<Link href="#start-research" />}
            >
              Start Your Research
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
