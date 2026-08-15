import { FormField } from "@/components/projects/form-field";
import { CHAR_LIMITS } from "@/components/projects/project-options";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectFormData, ProjectFormErrors } from "@/types/project";

type SectionProps = {
  data: ProjectFormData;
  errors: ProjectFormErrors;
  onChange: <K extends keyof ProjectFormData>(
    key: K,
    value: ProjectFormData[K]
  ) => void;
};

export function ProjectProblemSolution({ data, errors, onChange }: SectionProps) {
  return (
    <Card className="border-border/70">
      <CardHeader>
        <CardTitle>Problem &amp; Solution</CardTitle>
        <CardDescription>
          Explain the problem you want to solve and how you imagine addressing it.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <FormField
          id="problemStatement"
          label="Problem Statement"
          required
          hint="What real-world problem are you trying to solve?"
          error={errors.problemStatement}
          charCount={{
            current: data.problemStatement.length,
            max: CHAR_LIMITS.problemStatement,
          }}
        >
          <Textarea
            id="problemStatement"
            value={data.problemStatement}
            onChange={(e) =>
              onChange(
                "problemStatement",
                e.target.value.slice(0, CHAR_LIMITS.problemStatement)
              )
            }
            aria-invalid={Boolean(errors.problemStatement)}
          />
        </FormField>

        <FormField
          id="solutionIdea"
          label="Solution Idea"
          required
          hint="How do you currently imagine solving this problem?"
          error={errors.solutionIdea}
          charCount={{
            current: data.solutionIdea.length,
            max: CHAR_LIMITS.solutionIdea,
          }}
        >
          <Textarea
            id="solutionIdea"
            value={data.solutionIdea}
            onChange={(e) =>
              onChange(
                "solutionIdea",
                e.target.value.slice(0, CHAR_LIMITS.solutionIdea)
              )
            }
            aria-invalid={Boolean(errors.solutionIdea)}
          />
        </FormField>

        <FormField
          id="currentAlternative"
          label="Current Alternative"
          hint="How do people currently solve this problem? (Optional)"
          charCount={{
            current: data.currentAlternative.length,
            max: CHAR_LIMITS.currentAlternative,
          }}
        >
          <Textarea
            id="currentAlternative"
            value={data.currentAlternative}
            onChange={(e) =>
              onChange(
                "currentAlternative",
                e.target.value.slice(0, CHAR_LIMITS.currentAlternative)
              )
            }
          />
        </FormField>
      </CardContent>
    </Card>
  );
}
