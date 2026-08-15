import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectSuccessProps = {
  projectName: string;
  onCreateAnother: () => void;
};

export function ProjectSuccess({
  projectName,
  onCreateAnother,
}: ProjectSuccessProps) {
  return (
    <Card className="mx-auto max-w-2xl border-border/70 text-center">
      <CardHeader className="items-center">
        <span className="mb-2 flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <CardTitle className="text-2xl">
          Your project is ready for research.
        </CardTitle>
        <CardDescription className="max-w-lg text-base">
          AI VentureLab will use your project brief to organize the research
          workflow.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-xl border border-border/70 bg-muted/20 px-4 py-3 text-sm">
          <p className="font-medium">{projectName}</p>
          <p className="mt-2 text-muted-foreground">
            Your project brief has been saved. Research automation will be
            connected in a future phase.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button render={<Link href="/dashboard" />}>Back to Dashboard</Button>
          <Button
            variant="outline"
            render={
              <Link href="/dashboard/projects/new" onClick={onCreateAnother} />
            }
          >
            Create Another Project
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
