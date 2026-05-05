import { readFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";
import type { Project } from "./projects";

const contentDir = join(process.cwd(), "content");

export function getProjects(): Project[] {
  const projectsDir = join(contentDir, "projects");
  if (!existsSync(projectsDir)) return [];

  return readdirSync(projectsDir)
    .filter((f) => f.endsWith(".json"))
    .map((file) => {
      const id = file.replace(".json", "");
      const data = JSON.parse(readFileSync(join(projectsDir, file), "utf-8"));
      return { id, ...data } as Project;
    });
}

export function getProjectById(id: string): Project | undefined {
  return getProjects().find((p) => p.id === id);
}

export interface Settings {
  name: string;
  role: string;
  location: string;
  email: string;
  instagram: string;
  bio: string;
  bio_extended: string;
  contact_intro: string;
  hero_media?: string;
  hero_video?: string;
}

export function getSettings(): Settings {
  const path = join(contentDir, "settings.json");
  if (!existsSync(path)) {
    return {
      name: "",
      role: "",
      location: "",
      email: "",
      instagram: "",
      bio: "",
      bio_extended: "",
      contact_intro: "",
    };
  }
  return JSON.parse(readFileSync(path, "utf-8"));
}
