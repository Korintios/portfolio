import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translations for Spanish and English

// Spanish Translations
import PRESENTATION_ES from './locales/es/presentation.json';
import ABOUTME_ES from './locales/es/aboutme.json';
import PROJECTS_ES from './locales/es/projects.json';
import SERVICES_ES from './locales/es/services.json';
import TIMELINE_ES from './locales/es/timeline.json';

// English Translations
import PRESENTATION_EN from './locales/en/presentation.json';
import ABOUTME_EN from './locales/en/aboutme.json';
import PROJECTS_EN from './locales/en/projects.json';
import SERVICES_EN from './locales/en/services.json';
import TIMELINE_EN from './locales/en/timeline.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        presentation: PRESENTATION_ES,
        aboutme: ABOUTME_ES,
        projects: PROJECTS_ES,
        services: SERVICES_ES,
        timeline: TIMELINE_ES
      },
      en: {
        presentation: PRESENTATION_EN,
        aboutme: ABOUTME_EN,
        projects: PROJECTS_EN,
        services: SERVICES_EN,
        timeline: TIMELINE_EN
      }
    },
    lng: 'es',
    fallbackLng: 'en',
    ns: ['presentation', 'aboutme', 'projects', 'services', 'timeline'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
