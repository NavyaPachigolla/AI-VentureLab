"use client";

import { useState } from "react";

import { ProjectAdditionalContext } from "@/components/projects/project-additional-context";
import { ProjectBasicInfo } from "@/components/projects/project-basic-info";
import { ProjectProblemSolution } from "@/components/projects/project-problem-solution";
import { ProjectProgress } from "@/components/projects/project-progress";
import { ProjectResearchGoals } from "@/components/projects/project-research-goals";
import { ProjectReview } from "@/components/projects/project-review";
import { ProjectStageSection } from "@/components/projects/project-stage";
import { ProjectSuccess } from "@/components/projects/project-success";
import { ProjectTargetUsers } from "@/components/projects/project-target-users";
import {
  hasErrors,
  initialProjectFormData,
  validateAll,
  validateStep,
} from "@/components/projects/project-validation";
import { Button } from "@/components/ui/button";
import type { FormStep, ProjectFormData, ProjectFormErrors } from "@/types/project";

export function ProjectForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>(0);
  const [formData, setFormData] =
    useState<ProjectFormData>(initialProjectFormData);
  const [errors, setErrors] = useState<ProjectFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof ProjectFormData>(
    key: K,
    value: ProjectFormData[K]
  ) {
    setFormData((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function handleContinue() {
    const stepErrors = validateStep(currentStep, formData);
    setErrors(stepErrors);
    if (hasErrors(stepErrors)) return;
    setCurrentStep((step) => Math.min(step + 1, 4) as FormStep);
  }

  function handleBack() {
    setErrors({});
    setCurrentStep((step) => Math.max(step - 1, 0) as FormStep);
  }

  function handleSubmit() {
    const allErrors = validateAll(formData);
    setErrors(allErrors);
    if (hasErrors(allErrors)) return;
    setSubmitted(true);
  }

  function handleClearForm() {
    const confirmed = window.confirm(
      "Clear all entered information and reset the form?"
    );
    if (!confirmed) return;
    setFormData(initialProjectFormData);
    setErrors({});
    setCurrentStep(0);
    setSubmitted(false);
  }

  function handleCreateAnother() {
    setFormData(initialProjectFormData);
    setErrors({});
    setCurrentStep(0);
    setSubmitted(false);
  }

  function handleStepClick(step: FormStep) {
    if (step <= currentStep) {
      setErrors({});
      setCurrentStep(step);
    }
  }

  if (submitted) {
    return (
      <ProjectSuccess
        projectName={formData.projectName}
        onCreateAnother={handleCreateAnother}
      />
    );
  }

  const sectionProps = {
    data: formData,
    errors,
    onChange: updateField,
  };

  return (
    <div>
      <ProjectProgress
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />

      <div className="space-y-6">
        {currentStep === 0 ? <ProjectBasicInfo {...sectionProps} /> : null}
        {currentStep === 1 ? <ProjectProblemSolution {...sectionProps} /> : null}
        {currentStep === 2 ? <ProjectTargetUsers {...sectionProps} /> : null}
        {currentStep === 3 ? (
          <>
            <ProjectResearchGoals {...sectionProps} />
            <ProjectStageSection {...sectionProps} />
            <ProjectAdditionalContext {...sectionProps} />
          </>
        ) : null}
        {currentStep === 4 ? (
          <ProjectReview data={formData} onEdit={handleStepClick} />
        ) : null}
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Button type="button" variant="ghost" onClick={handleClearForm}>
          Clear Form
        </Button>

        <div className="flex flex-col gap-3 sm:flex-row">
          {currentStep > 0 ? (
            <Button type="button" variant="outline" onClick={handleBack}>
              Previous
            </Button>
          ) : null}

          {currentStep < 4 ? (
            <Button type="button" onClick={handleContinue}>
              Continue
            </Button>
          ) : (
            <Button type="button" onClick={handleSubmit}>
              Start Research
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
