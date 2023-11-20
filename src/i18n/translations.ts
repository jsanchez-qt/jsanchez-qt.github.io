import { LANGUAGES } from "src/constants/languages";
import type { RecordValues, ValueOf } from "src/types";

export const languages: RecordValues<ValueOf<typeof LANGUAGES>, string> = {
  en: "EN",
  fr: "FR",
};

export const defaultLang: ValueOf<typeof LANGUAGES> = LANGUAGES.en;

export const translations: RecordValues<
  keyof typeof LANGUAGES,
  Record<string, string>
> = {
  en: {
    // Home Page
    "pages.home.title": "Julien Sanchez-Porro,\n Mobile Developer",
    "pages.home.subtitle":
      "I am more than a mobile developer\n I am a passionate craftsman\n Shaping each application with dedication and love for this ever-evolving universe",
    "pages.home.aboutRedirect": "Learn more",
    "pages.home.myBookmarks": "My bookmarks",
    "pages.home.bookmarksRedirect": "More bookmarks",
    "pages.home.contactRedirect": "Let's get in touch!",

    // About Page
    "pages.about.content": "About page content",

    // Blog Page
    "pages.blog.content": "Blog page content",

    // Projects Page
    "pages.projects.content": "Projects page content",

    // Stack Page
    "pages.stack.content": "Stack page content",

    // Bookmarks Page
    "pages.bookmarks.content": "Bookmarks page content",

    // Contact Page
    "pages.contact.content": "Contact page content",

    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.bookmarks": "Bookmarks",
    "nav.contact": "Contact",

    // Feature Blog
    "features.blog.redirect": "More posts",
    "features.blog.myRecentPosts": "My recent posts",

    // Feature Projects
    "features.projects.myRecentProjects": "My recent projects",
    "features.projects.redirect": "More projects",

    // Feature Stack
    "features.stack.myStack": "Stack",
    "features.stack.softStack": "Soft",
    "features.stack.hardStack": "Hard",
    "features.stack.redirect": "My complete Stack",
  },
  fr: {
    // Home Page
    "pages.home.title": "Julien Sanchez-Porro,\n Développeur Mobile",
    "pages.home.subtitle":
      "Je suis plus qu'un développeur mobile\n Je suis un artisan passionné\n Façonnant chaque application avec dévouement et amour pour cet univers en constante évolution",
    "pages.home.aboutRedirect": "En savoir plus",
    "pages.home.myBookmarks": "Mes signets",
    "pages.home.bookmarksRedirect": "Plus de signets",
    "pages.home.contactRedirect": "Rentrons en contact !",

    // About Page
    "pages.about.content": "Contenu de la page À propos",

    // Blog Page
    "pages.blog.content": "Contenu de la page Blog",

    // Projects Page
    "pages.projects.content": "Contenu de la page Projets",

    // Stack Page
    "pages.stack.content": "Contenu de la page Stack",

    // Bookmarks Page
    "pages.bookmarks.content": "Contenu de la page Signets",

    // Contact Page
    "pages.contact.content": "Contenu de la page Contact",

    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.blog": "Blog",
    "nav.projects": "Projets",
    "nav.stack": "Stack",
    "nav.bookmarks": "Signets",
    "nav.contact": "Contact",

    // Feature Blog
    "features.blog.redirect": "Plus d'articles",
    "features.blog.myRecentPosts": "Mes publications récentes",

    // Feature Projects
    "features.projects.myRecentProjects": "Mes projets récents",
    "features.projects.redirect": "Plus de projets",

    // Feature Stack
    "features.stack.myStack": "Stack",
    "features.stack.softStack": "Soft",
    "features.stack.hardStack": "Hard",
    "features.stack.redirect": "Ma Stack complète",
  },
} as const;
