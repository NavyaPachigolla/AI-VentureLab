import { PROJECT_STAGES } from "@/components/projects/project-options";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { FormStep, ProjectFormData } from "@/types/project";

type ProjectReviewProps = {
  data: ProjectFormData;
  onEdit: (step: FormStep) => void;
};

function ReviewItem({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string;
  onEdit?: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/60 py-4 last:border-0">
      <div className="min-w-0">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="mt-1 whitespace-pre-wrap text-sm">{value || "—"}</p>
      </div>
      {onEdit ? (
        <Button type="button" variant="ghost" size="sm" onClick={onEdit}>
          Edit
        </Button>
      ) : null}
    </div>
  );
}

export function ProjectReview({ data, onEdit }: ProjectReviewProps) {
  const stageTitle =
    PROJECT_STAGES.find((stage) => stage.value === data.projectStage)?.title ??
    data.projectStage;

  return (
    <Card className="border-border/70">
      <CardHeader>
        <CardTitle>Review &amp; Submit</CardTitle>
        <CardDescription>
          Confirm your project brief before starting the demo research workflow.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ReviewItem
          label="Project Name"
          value={data.projectName}
          onEdit={() => onEdit(0)}
        />
        <ReviewItem
          label="Project Type"
          value={data.projectType}
          onEdit={() => onEdit(0)}
        />
        <ReviewItem
          label="Industry"
          value={data.industry || "Not specified"}
          onEdit={() => onEdit(0)}
        />
        <ReviewItem
          label="Description"
          value={data.shortDescription}
          onEdit={() => onEdit(0)}
        />
        <ReviewItem
          label="Problem"
          value={data.problemStatement}
          onEdit={() => onEdit(1)}
        />
        <ReviewItem
          label="Solution"
          value={data.solutionIdea}
          onEdit={() => onEdit(1)}
        />
        <ReviewItem
          label="Current Alternative"
          value={data.currentAlternative || "Not specified"}
          onEdit={() => onEdit(1)}
        />
        <ReviewItem
          label="Target Users"
          value={data.primaryTargetUsers}
          onEdit={() => onEdit(2)}
        />
        <ReviewItem
          label="User Types"
          value={
            data.userTypes.length > 0
              ? data.userTypes.join(", ")
              : "Not specified"
          }
          onEdit={() => onEdit(2)}
        />
        <ReviewItem
          label="Target Geography"
          value={data.targetGeography || "Not specified"}
          onEdit={() => onEdit(2)}
        />
        <ReviewItem
          label="Research Goals"
          value={data.researchGoals.join(", ")}
          onEdit={() => onEdit(3)}
        />
        <ReviewItem
          label="Project Stage"
          value={stageTitle}
          onEdit={() => onEdit(3)}
        />
        <ReviewItem
          label="Known Competitors"
          value={data.knownCompetitors || "Not specified"}
          onEdit={() => onEdit(3)}
        />
        <ReviewItem
          label="Technologies Considered"
          value={data.technologiesConsidered || "Not specified"}
          onEdit={() => onEdit(3)}
        />
        <ReviewItem
          label="Additional Notes"
          value={data.additionalNotes || "Not specified"}
          onEdit={() => onEdit(3)}
        />
      </CardContent>
    </Card>
  );
}
