import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";
import { getBookmarks } from "./get-bookmarks";

export async function getTopBookmarks(lang: ValueOf<typeof LANGUAGES>) {
  const bookmarks = await getBookmarks(lang);
  return bookmarks
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .slice(0, 5);
}
