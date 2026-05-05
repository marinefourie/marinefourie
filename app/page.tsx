import { getProjects, getSettings } from "@/lib/content";
import HomeClient from "@/components/home-client";

export default async function Home() {
  const projects = getProjects();
  const { name, role, location, hero_video } = getSettings();
  return <HomeClient projects={projects} name={name} role={role} location={location} heroVideo={hero_video} />;
}