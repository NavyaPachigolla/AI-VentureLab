import {
  Bot,
  Brain,
  LineChart,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";

import { heroAgents } from "@/components/landing/landing-data";
import { Section } from "@/components/landing/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const agentIcons = [Brain, Search, Target, LineChart, Sparkles];

const statusStyles = {
  active: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  analyzing: "bg-sky-500/15 text-sky-700 dark:text-sky-400",
  ready: "bg-muted text-muted-foreground",
};

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:mx-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-sky-500/10 blur-2xl"
      />
      <Card className="relative overflow-hidden border-border/60 bg-card/80 shadow-2xl shadow-primary/5 backdrop-blur">
        <CardContent className="space-y-4 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">AI Research Team</p>
              <p className="text-xs text-muted-foreground">
                Collaborative agents in progress
              </p>
            </div>
            <Badge variant="secondary" className="gap-1">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
              Live
            </Badge>
          </div>

          <div className="grid gap-3">
            {heroAgents.map((agent, index) => {
              const Icon = agentIcons[index] ?? Bot;
              return (
                <div
                  key={agent.name}
                  className={cn(
                    "flex items-center justify-between rounded-xl border border-border/60 bg-background/70 p-3 transition-transform duration-300 hover:-translate-y-0.5",
                    index % 2 === 0 && "animate-fade-in-up"
                  )}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{agent.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Specialized analysis
                      </p>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-2 py-1 text-[10px] font-medium uppercase tracking-wide",
                      statusStyles[agent.status]
                    )}
                  >
                    {agent.status}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl border border-dashed border-border/70 bg-muted/30 p-4">
            <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>Research progress</span>
              <span>68%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-primary to-sky-500" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(120,120,120,0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]"
      />

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-5">
            Multi-Agent Startup Research Platform
          </Badge>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Turn Your Idea Into a Validated Product
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            AI VentureLab uses collaborative AI agents to research, validate,
            analyze, and plan your next startup or project.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="#start-research" />}>
              Start Research
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="#example-report" />}
            >
              Explore Demo
            </Button>
          </div>
        </div>

        <HeroVisual />
      </div>
    </Section>
  );
}
