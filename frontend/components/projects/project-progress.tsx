import { FORM_STEPS } from "@/components/projects/project-options";
import { cn } from "@/lib/utils";
import type { FormStep } from "@/types/project";

type ProjectProgressProps = {
  currentStep: FormStep;
  onStepClick?: (step: FormStep) => void;
};

export function ProjectProgress({
  currentStep,
  onStepClick,
}: ProjectProgressProps) {
  return (
    <nav aria-label="Project creation progress" className="mb-8">
      <ol className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {FORM_STEPS.map((step) => {
          const isActive = currentStep === step.id;
          const isComplete = currentStep > step.id;

          return (
            <li key={step.id}>
              <button
                type="button"
                onClick={() => onStepClick?.(step.id as FormStep)}
                disabled={!onStepClick || step.id > currentStep}
                className={cn(
                  "flex w-full items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm transition-colors",
                  isActive &&
                    "border-primary bg-primary/5 text-foreground",
                  isComplete &&
                    !isActive &&
                    "border-border/70 bg-muted/30 text-foreground",
                  !isActive &&
                    !isComplete &&
                    "border-border/60 text-muted-foreground",
                  onStepClick && "hover:border-primary/40"
                )}
                aria-current={isActive ? "step" : undefined}
              >
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                    isActive && "bg-primary text-primary-foreground",
                    isComplete && !isActive && "bg-primary/15 text-primary",
                    !isActive && !isComplete && "bg-muted text-muted-foreground"
                  )}
                >
                  {step.id + 1}
                </span>
                <span className="font-medium">{step.label}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
