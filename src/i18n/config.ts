/**
 * i18next Configuration
 * Modular language system with centralized translations
 * Supports: EN, TR, ZH, DE, ES, FR, AR (7 languages)
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, tr, zh, de, es, fr, ar } from './locales';

const resources = {
  en,
  tr,
  zh,
  de,
  es,
  fr,
  ar
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'tr', 'zh', 'de', 'es', 'fr', 'ar'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
