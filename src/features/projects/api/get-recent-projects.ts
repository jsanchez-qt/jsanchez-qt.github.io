import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";
import { getProjects } from "./get-projects";

export async function getRecentProjects(lang: ValueOf<typeof LANGUAGES>) {
  const projects = await getProjects(lang);
  return projects
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .slice(0, 2);
}
