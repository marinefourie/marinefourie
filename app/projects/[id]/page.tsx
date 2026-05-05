import { notFound } from "next/navigation";
import { getProjects, getProjectById } from "@/lib/content";
import ProjectGallery from "./project-gallery";

export const dynamicParams = false;

export function generateStaticParams() {
  const projects = getProjects();
  if (projects.length === 0) return [{ id: "_placeholder" }];
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectGallery project={project} />;
}
