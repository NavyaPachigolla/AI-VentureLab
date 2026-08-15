import { FormField } from "@/components/projects/form-field";
import {
  CHAR_LIMITS,
  INDUSTRIES,
  PROJECT_TYPES,
} from "@/components/projects/project-options";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Industry, ProjectFormData, ProjectFormErrors, ProjectType } from "@/types/project";

type SectionProps = {
  data: ProjectFormData;
  errors: ProjectFormErrors;
  onChange: <K extends keyof ProjectFormData>(
    key: K,
    value: ProjectFormData[K]
  ) => void;
};

export function ProjectBasicInfo({ data, errors, onChange }: SectionProps) {
  return (
    <Card className="border-border/70">
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
        <CardDescription>
          Start with the essentials so AI VentureLab understands your project.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <FormField
          id="projectName"
          label="Project Name"
          required
          error={errors.projectName}
        >
          <Input
            id="projectName"
            value={data.projectName}
            onChange={(e) => onChange("projectName", e.target.value)}
            placeholder="e.g. CampusConnect"
            aria-invalid={Boolean(errors.projectName)}
          />
        </FormField>

        <FormField
          id="projectType"
          label="Project Type"
          required
          error={errors.projectType}
        >
          <Select
            value={data.projectType || null}
            onValueChange={(value) =>
              onChange("projectType", value as ProjectType)
            }
          >
            <SelectTrigger
              id="projectType"
              className="w-full"
              aria-invalid={Boolean(errors.projectType)}
            >
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              {PROJECT_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>

        <FormField
          id="industry"
          label="Industry / Domain"
          hint="Optional — helps organize research focus."
        >
          <Select
            value={data.industry || null}
            onValueChange={(value) => onChange("industry", value as Industry)}
          >
            <SelectTrigger id="industry" className="w-full">
              <SelectValue placeholder="Select industry (optional)" />
            </SelectTrigger>
            <SelectContent>
              {INDUSTRIES.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>

        <FormField
          id="shortDescription"
          label="Short Description"
          required
          hint="Summarize your idea in a few sentences."
          error={errors.shortDescription}
          charCount={{
            current: data.shortDescription.length,
            max: CHAR_LIMITS.shortDescription,
          }}
        >
          <Textarea
            id="shortDescription"
            value={data.shortDescription}
            onChange={(e) =>
              onChange(
                "shortDescription",
                e.target.value.slice(0, CHAR_LIMITS.shortDescription)
              )
            }
            placeholder="Describe what your project does and who it helps."
            aria-invalid={Boolean(errors.shortDescription)}
          />
        </FormField>
      </CardContent>
    </Card>
  );
}
