import { getCollection } from "astro:content";
import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";

export async function getWorkExperiences(lang: ValueOf<typeof LANGUAGES>) {
  const workExperiences = await getCollection("experiences", ({ id }) => {
    return id.startsWith(`${lang}/work`);
  });

  return workExperiences.sort((a, b) => b.data.startYear - a.data.startYear);
}
