import { FolderOpen, Plus } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type EmptyStateProps = {
  title?: string;
  description?: string;
  actionLabel?: string;
};

export function EmptyState({
  title = "No projects yet",
  description = "Start your first research analysis to see your projects here.",
  actionLabel = "Start New Analysis",
}: EmptyStateProps) {
  return (
    <Card className="border-dashed border-border/70 bg-muted/10">
      <CardHeader className="items-center text-center">
        <span className="mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <FolderOpen className="size-5" aria-hidden="true" />
        </span>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="max-w-md">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center pb-8">
        <Button render={<Link href="/dashboard/projects/new" />}>
          <Plus className="size-4" aria-hidden="true" />
          {actionLabel}
        </Button>
      </CardContent>
    </Card>
  );
}
