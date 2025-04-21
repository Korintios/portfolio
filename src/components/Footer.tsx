import { useTranslation } from "react-i18next";
import SOCIALS from "../constants/socials";
import { goToSection } from "../utils/sections";
import { getTranslatedArray } from "../utils/lng";
import { SectionsType } from "../types";

export default function Footer() {

  const { t } = useTranslation("footer");
  const sectionsArray = getTranslatedArray<SectionsType>(t, "sections", []);

  return (
    <footer className="bg-info/5 text-info border-t border-info/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('aboutTitle')}</h3>
            <p className="text-info text-sm">{t('aboutDescription')}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('connectTitle')}</h3>
            <div className="flex space-x-3.5">
              {SOCIALS.map((social, index) => {

                const IconComponent = social.icon;

                return (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-info hover:text-white transition-colors">
                    <IconComponent className="size-8"/>
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('linksTitle')}</h3>
            <ul className="space-y-2 text-info text-sm">
              {sectionsArray.map((section, index) => (
                <li key={index}>
                  <a onClick={() => goToSection(section.id)} className="cursor-pointer hover:text-white transition-colors">
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-info/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-info">
            &copy; {new Date().getFullYear()} {t('copyright')}
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-xs text-info">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('terms')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('cookies')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
