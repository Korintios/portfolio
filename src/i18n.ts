import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translations for Spanish and English

// Spanish Translations
import PRESENTATION_ES from './locales/es/presentation.json';
import ABOUTME_ES from './locales/es/aboutme.json';

// English Translations
import PRESENTATION_EN from './locales/en/presentation.json';
import ABOUTME_EN from './locales/en/aboutme.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        presentation: PRESENTATION_ES,
        aboutme: ABOUTME_ES,
      },
      en: {
        presentation: PRESENTATION_EN,
        aboutme: ABOUTME_EN,
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['presentation', 'aboutme'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
