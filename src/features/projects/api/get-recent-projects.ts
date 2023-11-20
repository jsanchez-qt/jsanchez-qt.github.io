import { getCollection } from "astro:content";
import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";

export async function getRecentProjects(lang: ValueOf<typeof LANGUAGES>) {
  const projects = await getCollection("projects", ({ id }) => {
    return id.startsWith(`${lang}/`);
  });

  return projects
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .slice(0, 2);
}
