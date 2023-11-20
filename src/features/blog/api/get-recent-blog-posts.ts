import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";
import { getBlogPosts } from "./get-blog-posts";

export async function getRecentBlogPosts(lang: ValueOf<typeof LANGUAGES>) {
  const blogPosts = await getBlogPosts(lang);
  return blogPosts
    .sort((a, b) => b.data.releaseDate.getTime() - a.data.releaseDate.getTime())
    .slice(0, 3);
}
