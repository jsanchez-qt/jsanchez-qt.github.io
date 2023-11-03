import { LANGUAGES } from "src/constants/languages";
import type { RecordValues, ValueOf } from "src/types";

export const languages: RecordValues<ValueOf<typeof LANGUAGES>, string> = {
  en: "English",
  fr: "Français",
};

export const defaultLang: ValueOf<typeof LANGUAGES> = LANGUAGES.en;

export const translations: RecordValues<
  keyof typeof LANGUAGES,
  Record<string, string>
> = {
  en: {
    "pages.home.content": "Home page content",
    "pages.about.content": "About page content",
    "pages.blog.content": "Blog page content",
    "pages.projects.content": "Projects page content",
    "pages.stack.content": "Stack page content",
    "pages.bookmarks.content": "Bookmarks page content",
    "pages.contact.content": "Contact page content",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.bookmarks": "Bookmarks",
    "nav.contact": "Contact",
  },
  fr: {
    "pages.home.content": "Contenu de la page",
    "pages.about.content": "Contenu de la page À propos",
    "pages.blog.content": "Contenu de la page Blog",
    "pages.projects.content": "Contenu de la page Projets",
    "pages.stack.content": "Contenu de la page Stack",
    "pages.bookmarks.content": "Contenu de la page Signets",
    "pages.contact.content": "Contenu de la page Contact",
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.blog": "Blog",
    "nav.projects": "Projets",
    "nav.stack": "Stack",
    "nav.bookmarks": "Signets",
    "nav.contact": "Contact",
  },
} as const;
