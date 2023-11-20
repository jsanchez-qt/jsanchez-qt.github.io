import { getCollection } from "astro:content";
import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";

export async function getBookmarks(lang: ValueOf<typeof LANGUAGES>) {
  const bookmarks = await getCollection("bookmarks", ({ id }) => {
    return id.startsWith(`${lang}/`);
  });

  return bookmarks;
}
