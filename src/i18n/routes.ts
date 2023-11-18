import type { ROUTES } from "src/constants/routes";
import type { RecordValues, ValueOf } from "src/types";

type LanguagesRouteNames = {
  en: RecordValues<ValueOf<typeof ROUTES>, string>;
  fr: RecordValues<ValueOf<typeof ROUTES>, string>;
};

export const routes: LanguagesRouteNames = {
  en: {
    home: "home",
    about: "about",
    blog: "blog",
    projects: "projects",
    stack: "stack",
    bookmarks: "bookmarks",
    contact: "contact",
  },
  fr: {
    home: "home",
    about: "a-propos",
    blog: "blog",
    projects: "projects",
    stack: "stack",
    bookmarks: "signets",
    contact: "contact",
  },
};
