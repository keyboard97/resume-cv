import { en } from "@/i18n/locales/en";
import { es } from "@/i18n/locales/es";

export const supportedLanguages = ["es", "en"];

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en,
  es,
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in (ui as typeof ui)) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  // return function t<T extends keyof typeof ui[typeof defaultLang]>(key: T) {
  return function t<T extends string>(key: T) {
    const nestedKeys = key.split(".");
    let value: any = ui[lang];

    for (const nestedKey of nestedKeys) {
      value = value[nestedKey] as string;
      if (!value) {
        value = (ui as any)[defaultLang][nestedKey];
        break;
      }
    }

    return value;
  };
}

export const getCleanPathname = (pathname: string) => {
  let cleanPathname = pathname;
  supportedLanguages.forEach((lang) => {
    cleanPathname = cleanPathname.replace(`/${lang}`, "");
  });
  return cleanPathname;
};
