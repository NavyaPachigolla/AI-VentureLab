import { Plus } from "lucide-react";
import Link from "next/link";

import { dashboardUser } from "@/components/dashboard/dashboard-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DashboardHeader() {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {dashboardUser.greeting}
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Turn your ideas into validated product opportunities.
        </p>
      </div>
      <Link
        href="/dashboard/projects/new"
        className={cn(buttonVariants(), "shrink-0")}
      >
        <Plus className="size-4" aria-hidden="true" />
        Start New Analysis
      </Link>
    </div>
  );
}
