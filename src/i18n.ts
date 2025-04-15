import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PRESENTATION_ES from './locales/es/presentation.json';
import PRESENTATION_EN from './locales/en/presentation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        presentation: PRESENTATION_ES,
      },
      en: {
        presentation: PRESENTATION_EN,
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['presentation'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
