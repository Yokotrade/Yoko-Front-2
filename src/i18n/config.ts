import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from 'assets/locales/en/translation.json';
import translationRU from 'assets/locales/ru/translation.json';

export const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: true,
    resources,
    interpolation: {
      escapeValue: true,
    },
  });

export default i18n;
