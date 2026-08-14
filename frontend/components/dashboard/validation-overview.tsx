import { validationMetrics } from "@/components/dashboard/dashboard-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ValidationOverview() {
  return (
    <Card className="border-border/70">
      <CardHeader>
        <CardTitle className="text-base">Validation Overview</CardTitle>
        <CardDescription>
          Example demo metrics for dashboard preview.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {validationMetrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-2 flex items-center justify-between gap-3 text-sm">
              <span>{metric.label}</span>
              <span className="font-medium">{metric.value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full rounded-full bg-gradient-to-r from-primary to-sky-500 transition-all duration-700",
                  metric.label === "Competition Risk" && "from-amber-500 to-orange-500"
                )}
                style={{ width: `${metric.value}%` }}
                role="progressbar"
                aria-valuenow={metric.value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${metric.label}: ${metric.value}%`}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
