import { getCollection } from "astro:content";
import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";

export async function getEducationExperiences(lang: ValueOf<typeof LANGUAGES>) {
  const educationExperiences = await getCollection("experiences", ({ id }) => {
    return id.startsWith(`${lang}/education`);
  });

  return educationExperiences.sort(
    (a, b) => b.data.startYear - a.data.startYear
  );
}
