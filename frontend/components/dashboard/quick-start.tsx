import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function QuickStart() {
  return (
    <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-sky-500/5 shadow-sm">
      <CardHeader className="gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Sparkles className="size-4" aria-hidden="true" />
            </span>
            <CardTitle className="text-xl">
              Ready to validate your next idea?
            </CardTitle>
          </div>
          <CardDescription className="max-w-2xl text-base">
            Start a new research analysis and let AI VentureLab investigate the
            opportunity.
          </CardDescription>
        </div>
        <Button type="button" className="shrink-0">
          Start New Analysis
        </Button>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-muted-foreground">
          Demo UI only — project creation will be available in a future phase.
        </p>
      </CardContent>
    </Card>
  );
}
