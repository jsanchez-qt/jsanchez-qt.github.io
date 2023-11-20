import { getCollection } from "astro:content";
import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";

export async function getContacts(lang: ValueOf<typeof LANGUAGES>) {
  const contacts = await getCollection("contacts");
  return contacts.sort((a, b) => a.data.sortOrder - b.data.sortOrder);
}
