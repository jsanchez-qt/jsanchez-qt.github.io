import { getCollection } from "astro:content";
import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";

export async function getHardStack(lang: ValueOf<typeof LANGUAGES>) {
  const hardStack = await getCollection("stack", ({ id }) => {
    return id.startsWith(`${lang}/hard`);
  });

  return hardStack;
}
