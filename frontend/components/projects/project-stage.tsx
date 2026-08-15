import { PROJECT_STAGES } from "@/components/projects/project-options";
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
  ProjectStage,
} from "@/types/project";

type SectionProps = {
  data: ProjectFormData;
  errors: ProjectFormErrors;
  onChange: <K extends keyof ProjectFormData>(
    key: K,
    value: ProjectFormData[K]
  ) => void;
};

export function ProjectStageSection({ data, errors, onChange }: SectionProps) {
  return (
    <Card className="border-border/70">
      <CardHeader>
        <CardTitle>Project Stage</CardTitle>
        <CardDescription>
          Where is your idea today? Select the stage that best fits.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {errors.projectStage ? (
          <p className="mb-3 text-sm text-destructive" role="alert">
            {errors.projectStage}
          </p>
        ) : null}

        <div
          className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
          role="radiogroup"
          aria-label="Project stage"
        >
          {PROJECT_STAGES.map((stage) => {
            const Icon = stage.icon;
            const selected = data.projectStage === stage.value;

            return (
              <button
                key={stage.value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onChange("projectStage", stage.value as ProjectStage)}
                className={cn(
                  "rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5",
                  selected
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border/70 hover:border-primary/30"
                )}
              >
                <span className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="block text-sm font-medium">{stage.title}</span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {stage.description}
                </span>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
