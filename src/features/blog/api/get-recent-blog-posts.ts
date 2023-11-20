import { getCollection } from "astro:content";
import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";

export async function getRecentBlogPosts(lang: ValueOf<typeof LANGUAGES>) {
  const blogPosts = await getCollection("blog", ({ id }) => {
    return id.startsWith(`${lang}/`);
  });

  return blogPosts
    .sort((a, b) => b.data.releaseDate.getTime() - a.data.releaseDate.getTime())
    .slice(0, 3);
}
