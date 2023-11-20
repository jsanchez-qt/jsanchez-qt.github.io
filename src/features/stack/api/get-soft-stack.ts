import { getCollection } from "astro:content";
import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";

export async function getSoftStack(lang: ValueOf<typeof LANGUAGES>) {
  const softStack = await getCollection("stack", ({ id }) => {
    return id.startsWith(`${lang}/soft`);
  });

  return softStack;
}
