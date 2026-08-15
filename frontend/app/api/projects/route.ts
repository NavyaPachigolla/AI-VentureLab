import { NextResponse } from "next/server";

import { createProject, listProjects } from "@/lib/projects/repository";
import { validateProjectPayload } from "@/lib/projects/validate-project-payload";
import { mapProjectRecordToDashboardProject } from "@/lib/projects/map-project";

export async function GET() {
  try {
    const projects = await listProjects();
    return NextResponse.json({ projects });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch projects.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const validation = validateProjectPayload(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed.", errors: validation.errors },
        { status: 400 }
      );
    }

    const project = await createProject(validation.data);

    return NextResponse.json(
      {
        project: mapProjectRecordToDashboardProject(project),
      },
      { status: 201 }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create project.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
