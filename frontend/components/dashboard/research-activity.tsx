import { researchActivities } from "@/components/dashboard/dashboard-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ResearchActivity() {
  return (
    <Card className="border-border/70">
      <CardHeader>
        <CardTitle className="text-base">Research Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {researchActivities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex gap-3">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm leading-relaxed">{activity.description}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
