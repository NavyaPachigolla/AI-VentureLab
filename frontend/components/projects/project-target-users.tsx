import { FormField } from "@/components/projects/form-field";
import { CHAR_LIMITS, USER_TYPES } from "@/components/projects/project-options";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type {
  ProjectFormData,
  ProjectFormErrors,
  UserType,
} from "@/types/project";

type SectionProps = {
  data: ProjectFormData;
  errors: ProjectFormErrors;
  onChange: <K extends keyof ProjectFormData>(
    key: K,
    value: ProjectFormData[K]
  ) => void;
};

export function ProjectTargetUsers({ data, errors, onChange }: SectionProps) {
  function toggleUserType(userType: UserType, checked: boolean) {
    const next = checked
      ? [...data.userTypes, userType]
      : data.userTypes.filter((type) => type !== userType);
    onChange("userTypes", next);
  }

  return (
    <Card className="border-border/70">
      <CardHeader>
        <CardTitle>Target Users</CardTitle>
        <CardDescription>
          Define who your project is designed to help.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <FormField
          id="primaryTargetUsers"
          label="Primary Target Users"
          required
          hint='Example: "College students looking for internships"'
          error={errors.primaryTargetUsers}
          charCount={{
            current: data.primaryTargetUsers.length,
            max: CHAR_LIMITS.primaryTargetUsers,
          }}
        >
          <Textarea
            id="primaryTargetUsers"
            value={data.primaryTargetUsers}
            onChange={(e) =>
              onChange(
                "primaryTargetUsers",
                e.target.value.slice(0, CHAR_LIMITS.primaryTargetUsers)
              )
            }
            aria-invalid={Boolean(errors.primaryTargetUsers)}
          />
        </FormField>

        <div className="space-y-3">
          <Label>User Type</Label>
          <p className="text-xs text-muted-foreground">
            Select all audience groups that apply.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {USER_TYPES.map((userType) => {
              const checked = data.userTypes.includes(userType);
              const inputId = `user-type-${userType.replace(/\s+/g, "-").toLowerCase()}`;

              return (
                <label
                  key={userType}
                  htmlFor={inputId}
                  className="flex items-center gap-3 rounded-lg border border-border/70 bg-background/70 px-3 py-2.5"
                >
                  <Checkbox
                    id={inputId}
                    checked={checked}
                    onCheckedChange={(value) =>
                      toggleUserType(userType, value === true)
                    }
                  />
                  <span className="text-sm">{userType}</span>
                </label>
              );
            })}
          </div>
        </div>

        <FormField
          id="targetGeography"
          label="Target Geography"
          hint="Optional — e.g. India, North America, Global"
        >
          <Input
            id="targetGeography"
            value={data.targetGeography}
            onChange={(e) => onChange("targetGeography", e.target.value)}
            placeholder="India"
          />
        </FormField>
      </CardContent>
    </Card>
  );
}
