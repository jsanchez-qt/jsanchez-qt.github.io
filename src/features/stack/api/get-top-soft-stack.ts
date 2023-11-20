import type { LANGUAGES } from "src/constants/languages";
import type { ValueOf } from "src/types";
import { getSoftStack } from "./get-soft-stack";

export async function getTopSoftStack(lang: ValueOf<typeof LANGUAGES>) {
  const softStack = await getSoftStack(lang);
  return softStack
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .slice(0, 6);
}
