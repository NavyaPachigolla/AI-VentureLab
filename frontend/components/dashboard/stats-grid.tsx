import { dashboardStats } from "@/components/dashboard/dashboard-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function StatsGrid() {
  return (
    <section aria-labelledby="dashboard-stats-heading" className="mb-8">
      <h2 id="dashboard-stats-heading" className="sr-only">
        Dashboard statistics
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.label}
              className="border-border/70 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-3 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                {stat.trend ? (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.trend}
                  </p>
                ) : null}
              </CardContent>
            </Card>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Demo statistics shown for preview purposes only.
      </p>
    </section>
  );
}
