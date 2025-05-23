import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importing translations for Spanish and English

// Spanish Translations
import PRESENTATION_ES from "./locales/es/presentation.json";
import ABOUTME_ES from "./locales/es/aboutme.json";
import PROJECTS_ES from "./locales/es/projects.json";
import SERVICES_ES from "./locales/es/services.json";
import TIMELINE_ES from "./locales/es/timeline.json";
import TESTIMONIALS_ES from "./locales/es/testimonials.json";
import FOOTER_ES from "./locales/es/footer.json";
import SURVEY_ES from "./locales/es/survey.json";

// English Translations
import PRESENTATION_EN from "./locales/en/presentation.json";
import ABOUTME_EN from "./locales/en/aboutme.json";
import PROJECTS_EN from "./locales/en/projects.json";
import SERVICES_EN from "./locales/en/services.json";
import TIMELINE_EN from "./locales/en/timeline.json";
import TESTIMONIALS_EN from "./locales/en/testimonials.json";
import FOOTER_EN from "./locales/en/footer.json";
import SURVEY_EN from "./locales/en/survey.json";

i18n
.use(LanguageDetector)
.use(initReactI18next).init({
	resources: {
		es: {
			presentation: PRESENTATION_ES,
			aboutme: ABOUTME_ES,
			projects: PROJECTS_ES,
			services: SERVICES_ES,
			timeline: TIMELINE_ES,
			testimonials: TESTIMONIALS_ES,
			footer: FOOTER_ES,
			survey: SURVEY_ES,
		},
		en: {
			presentation: PRESENTATION_EN,
			aboutme: ABOUTME_EN,
			projects: PROJECTS_EN,
			services: SERVICES_EN,
			timeline: TIMELINE_EN,
			testimonials: TESTIMONIALS_EN,
			footer: FOOTER_EN,
			survey: SURVEY_EN,
		},
	},
	fallbackLng: "en",
	ns: [
		"presentation",
		"aboutme",
		"projects",
		"services",
		"timeline",
		"testimonials",
		"footer",
		"survey",
	],
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
