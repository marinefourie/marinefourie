import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "marinefourie",
  title: "Marine Fourie",
  projectId: "jg3sgard",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
