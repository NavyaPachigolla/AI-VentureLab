import { RESEARCH_GOALS } from "@/components/projects/project-options";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type {
  ProjectFormData,
  ProjectFormErrors,
  ResearchGoal,
} from "@/types/project";

type SectionProps = {
  data: ProjectFormData;
  errors: ProjectFormErrors;
  onChange: <K extends keyof ProjectFormData>(
    key: K,
    value: ProjectFormData[K]
  ) => void;
};

export function ProjectResearchGoals({ data, errors, onChange }: SectionProps) {
  function toggleGoal(goal: ResearchGoal, checked: boolean) {
    const next = checked
      ? [...data.researchGoals, goal]
      : data.researchGoals.filter((item) => item !== goal);
    onChange("researchGoals", next);
  }

  return (
    <Card className="border-border/70">
      <CardHeader>
        <CardTitle>Research Goals</CardTitle>
        <CardDescription>
          What do you want to research? Select at least one objective.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {errors.researchGoals ? (
          <p className="text-sm text-destructive" role="alert">
            {errors.researchGoals}
          </p>
        ) : null}

        <div className="grid gap-3 sm:grid-cols-2">
          {RESEARCH_GOALS.map((goal) => {
            const checked = data.researchGoals.includes(goal.value);
            const Icon = goal.icon;
            const inputId = `research-goal-${goal.value.replace(/\s+/g, "-").toLowerCase()}`;

            return (
              <label
                key={goal.value}
                htmlFor={inputId}
                className={cn(
                  "flex cursor-pointer gap-3 rounded-xl border p-3 transition-colors",
                  checked
                    ? "border-primary bg-primary/5"
                    : "border-border/70 hover:border-primary/30"
                )}
              >
                <Checkbox
                  id={inputId}
                  checked={checked}
                  onCheckedChange={(value) =>
                    toggleGoal(goal.value, value === true)
                  }
                />
                <span className="min-w-0">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                    {goal.value}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {goal.description}
                  </span>
                </span>
              </label>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground">
          Research automation will be connected in a future phase. Selections
          are stored in frontend state only.
        </p>
      </CardContent>
    </Card>
  );
}
