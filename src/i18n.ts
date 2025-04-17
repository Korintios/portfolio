import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translations for Spanish and English

// Spanish Translations
import PRESENTATION_ES from './locales/es/presentation.json';
import ABOUTME_ES from './locales/es/aboutme.json';
import PROJECTS_ES from './locales/es/projects.json';

// English Translations
import PRESENTATION_EN from './locales/en/presentation.json';
import ABOUTME_EN from './locales/en/aboutme.json';
import PROJECTS_EN from './locales/en/projects.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        presentation: PRESENTATION_ES,
        aboutme: ABOUTME_ES,
        projects: PROJECTS_ES
      },
      en: {
        presentation: PRESENTATION_EN,
        aboutme: ABOUTME_EN,
        projects: PROJECTS_EN
      }
    },
    lng: 'es',
    fallbackLng: 'en',
    ns: ['presentation', 'aboutme', 'projects'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
