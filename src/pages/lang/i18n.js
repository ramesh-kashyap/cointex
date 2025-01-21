// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Load translation files dynamically
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Bind with React
  .init({
    supportedLngs: ['en', 'es', 'fr'], // Supported languages
    fallbackLng: 'en', // Fallback language
    debug: true, // Set to false in production
    backend: {
      loadPath: '/locales/{{lng}}.json', // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already escapes strings
    },
  });

export default i18n;
