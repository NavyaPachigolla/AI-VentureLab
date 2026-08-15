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

export function ProjectAdditionalContext({
  data,
  onChange,
}: SectionProps) {
  return (
    <Card className="border-border/70">
      <CardHeader>
        <CardTitle>Additional Context</CardTitle>
        <CardDescription>
          Optional details that can help shape the research brief.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <FormField
          id="knownCompetitors"
          label="Known Competitors"
          hint="Optional — list any competitors you already know about."
          charCount={{
            current: data.knownCompetitors.length,
            max: CHAR_LIMITS.knownCompetitors,
          }}
        >
          <Textarea
            id="knownCompetitors"
            value={data.knownCompetitors}
            onChange={(e) =>
              onChange(
                "knownCompetitors",
                e.target.value.slice(0, CHAR_LIMITS.knownCompetitors)
              )
            }
          />
        </FormField>

        <FormField
          id="technologiesConsidered"
          label="Technologies Already Considered"
          hint="Optional — frameworks, tools, or platforms you are considering."
          charCount={{
            current: data.technologiesConsidered.length,
            max: CHAR_LIMITS.technologiesConsidered,
          }}
        >
          <Textarea
            id="technologiesConsidered"
            value={data.technologiesConsidered}
            onChange={(e) =>
              onChange(
                "technologiesConsidered",
                e.target.value.slice(0, CHAR_LIMITS.technologiesConsidered)
              )
            }
          />
        </FormField>

        <FormField
          id="additionalNotes"
          label="Additional Notes"
          hint="Optional — anything else the research workflow should know."
          charCount={{
            current: data.additionalNotes.length,
            max: CHAR_LIMITS.additionalNotes,
          }}
        >
          <Textarea
            id="additionalNotes"
            value={data.additionalNotes}
            onChange={(e) =>
              onChange(
                "additionalNotes",
                e.target.value.slice(0, CHAR_LIMITS.additionalNotes)
              )
            }
          />
        </FormField>
      </CardContent>
    </Card>
  );
}
