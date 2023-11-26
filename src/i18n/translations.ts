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

    // Feature Bookmarks
    "features.bookmarks.myBookmarks": "My bookmarks",
    "features.bookmarks.redirect": "More bookmarks",

    // Feature Contacts
    "features.contacts.redirect": "Let's get in touch!",

    // Feature About
    "features.about.title": "About me?",
    "features.about.subtitle": "Julien Sanchez-Porro, 28 ans",
    "features.about.location": "Savines-le-Lac, France",
    "features.about.description":
      "I've always been interested in computer science and dreamed of becoming a developer. With 9 years of experience in web and mobile development, I've specialized in (Expo) React Native for the last 4 years.\n\nMy future objectives: deepening my skills in native development (Kotlin and Swift) and in Software Craftsmanship.",
    "features.about.blog": "Blog",
    "features.about.blog.description":
      "I enjoy engaging in the exercise of writing tech articles. In the world of development, sharing knowledge and feedback are essential elements for progress.",
    "features.about.blog.redirect": "Read my posts",
    "features.about.projects": "Projects",
    "features.about.projects.description":
      "Over the recent years, I've been able to carry out a number of React projects with NextJS, as well as mobile applications with React Native.",
    "features.about.projects.redirect": "See my projects",
    "features.about.stack": "Stack",
    "features.about.stack.description":
      "Expo, Zustand, Radix UI, Cursor, Linear, Obsidian... I share my complete stack and my favorite tools to gain productivity and comfort.",
    "features.about.stack.redirect": "See my stack",
  },
  fr: {
    // Home Page
    "pages.home.title": "Julien Sanchez-Porro,\n Développeur Mobile",
    "pages.home.subtitle":
      "Je suis plus qu'un développeur mobile\n Je suis un artisan passionné\n Façonnant chaque application avec dévouement et amour pour cet univers en constante évolution",
    "pages.home.aboutRedirect": "En savoir plus",

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

    // Feature Bookmarks
    "features.bookmarks.myBookmarks": "Mes signets",
    "features.bookmarks.redirect": "Plus de signets",

    // Feature Contacts
    "features.contacts.redirect": "Rentrons en contact !",

    // Feature About
    "features.about.title": "À propos de moi?",
    "features.about.subtitle": "Julien Sanchez-Porro, 28 ans",
    "features.about.location": "Savines-le-Lac, France",
    "features.about.description":
      "J'ai toujours été intéressé par l'informatique et rêvé de devenir développeur. Avec 9 ans d'expérience en développement web et mobile, je me suis spécialisé depuis 4 ans sur (Expo) React Native.\n\n Mes objectifs futurs : l'approfondissement de mes compétences en développement natif (Kotlin et Swift) et en Software Craftsmanship.",
    "features.about.blog": "Blog",
    "features.about.blog.description":
      "J'aime me prêter à l'exercice de l'écriture d'article tech. Dans le monde du dev, le partage des connaissances et le feedback sont des éléments essentiels à la progression.",
    "features.about.blog.redirect": "Lire mes articles",
    "features.about.projects": "Projets",
    "features.about.projects.description":
      "Au cours de ces dernières j'ai pu réaliser un certains nombre de projets React avec NextJS mais aussi des applications mobiles avec React Native.",
    "features.about.projects.redirect": "Voir mes projets",
    "features.about.stack": "Stack",
    "features.about.stack.description":
      "Expo, Zustand, Radix UI, Cursor, Linear, Obsidian... je vous partage ma stack complète et mes outils favoris pour gagner en productivité et confort.",
    "features.about.stack.redirect": "Voir ma stack",
  },
} as const;
