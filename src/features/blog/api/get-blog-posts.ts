import { getCollection } from "astro:content";
import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";

export async function getBlogPosts(lang: ValueOf<typeof LANGUAGES>) {
  const blogPosts = await getCollection("blog", ({ id }) => {
    return id.startsWith(`${lang}/`);
  });

  return blogPosts;
}
