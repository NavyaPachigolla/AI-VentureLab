import { Plus } from "lucide-react";

import { dashboardUser } from "@/components/dashboard/dashboard-data";
import { Button } from "@/components/ui/button";

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
      <Button className="shrink-0" type="button">
        <Plus className="size-4" aria-hidden="true" />
        Start New Analysis
      </Button>
    </div>
  );
}
