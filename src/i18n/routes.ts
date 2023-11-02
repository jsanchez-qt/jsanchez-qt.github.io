type Routes = {
  [key: string]: {
    [key: string]: string;
  };
};

export const routes: Routes = {
  en: {
    about: "about",
    blog: "blog",
    projects: "projects",
    stack: "stack",
    bookmarks: "bookmarks",
    contact: "contact",
  },
  fr: {
    about: "a-propos",
    blog: "blog",
    projects: "projets",
    stack: "stack",
    bookmarks: "signets",
    contact: "contact",
  },
};
