import type { LANGUAGES } from "src/constants/languages";
import { routes } from "./routes";
import { translations, defaultLang } from "./translations";
import type { ValueOf } from "src/types";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as ValueOf<typeof LANGUAGES>;
  return defaultLang;
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0] as Record<string, string>;
    return route[path] !== undefined ? route[path] : undefined;
  }

  const getKeyByValue = (
    obj: Record<string, string>,
    value: string
  ): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}

export function useTranslations(lang: ValueOf<typeof LANGUAGES>) {
  return function t(key: keyof (typeof translations)[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

export function useRouter(lang: ValueOf<typeof LANGUAGES> = defaultLang) {
  return function route(path: string, l: ValueOf<typeof LANGUAGES> = lang) {
    const pathName = path.replaceAll("/", "");

    const hasTranslation =
      defaultLang !== l &&
      routes[l] !== undefined &&
      // @ts-ignore
      routes[l][pathName] !== undefined;

    // @ts-ignore
    const translatedPath = hasTranslation ? "/" + routes[l][pathName] : path;

    return l === defaultLang ? translatedPath : `/${l}${translatedPath}`;
  };
}
