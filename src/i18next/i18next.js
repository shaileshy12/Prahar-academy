// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import hiCommon from "./locales/hi/common.json";
import mrCommon from "./locales/mr/common.json";

export const SUPPORTED_LANGS = ["en", "hi", "mr"];
export const DEFAULT_LANG = "en";

const resources = {
  en: { common: enCommon },
  hi: { common: hiCommon },
  mr: { common: mrCommon }
};

// Custom detector: first URL segment (/en, /hi, /mr)
const pathLangDetector = {
  name: "pathLangDetector",
  lookup() {
    if (typeof window === "undefined") return null;
    const parts = window.location.pathname.split("/").filter(Boolean);
    const candidate = parts[0];
    if (SUPPORTED_LANGS.includes(candidate)) return candidate;
    return null;
  }
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector(pathLangDetector);

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,

    // Explicit initial language (base fallback)
    lng: DEFAULT_LANG,
    fallbackLng: DEFAULT_LANG,
    supportedLngs: SUPPORTED_LANGS,

    defaultNS: "common",
    ns: ["common"],

    // Ensure t() always returns a string, not null
    returnNull: false,          // [web:130][web:144]
    cleanCode: true,            // normalize lang codes, e.g. EN -> en [web:130]

    detection: {
      // URL-aware + persisted detection chain
      order: ["pathLangDetector", "localStorage", "navigator", "htmlTag"], // [web:126][web:133]
      lookupLocalStorage: "prahar_lang",
      caches: ["localStorage"]
    },

    interpolation: {
      escapeValue: false // React already escapes output [web:119]
    }
  });

// Keep <html lang=""> in sync with current language [web:151]
i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng || DEFAULT_LANG;
  }
});

export default i18n;
