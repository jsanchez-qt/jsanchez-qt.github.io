import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";
import { getHardStack } from "./get-hard-stack";

export async function getTopHardStack(lang: ValueOf<typeof LANGUAGES>) {
  const hardStack = await getHardStack(lang);
  return hardStack
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .slice(0, 6);
}
