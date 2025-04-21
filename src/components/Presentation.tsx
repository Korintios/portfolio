import { useTranslation } from "react-i18next";
import { goToSection } from "../utils/sections";
import IconCard from "./ui/IconCard";
import SOCIALS from "../constants/socials";
import SKILLS from "../constants/skills";

export default function Presentation() {

	const { t } = useTranslation("presentation")

	return (
		<section id="presentation" className="min-h-screen sm:h-screen p-10 xl:p-20 flex flex-col justify-between">
			<div className="flex flex-col gap-4">
				<span className="uppercase text-primary font-poppins font-bold text-lg xl:text-xl">{t('greeting')}</span>
				<h1 className="uppercase text-white font-hubballi text-2xl md:text-5xl max-w-[610px]">{t('title')}</h1>
				<p className="text-info font-poppins max-w-[700px] text-sm md:text-xl">{t('description')}</p>
				<div className="flex flex-row gap-4 mt-2">
					<button onClick={() => goToSection('aboutme')} className="font-poppins font-semibold text-xs sm:text-sm xl:text-[15px] cursor-pointer min-w-[139px] px-4 min-h-[43.61px] rounded-xl bg-linear-to-b from-white to-button-gradient-to hover:to-button-gradient-to-hover">{t('knowMe')}</button>
					<a href="docs/cv.pdf" className="font-poppins grid place-content-center font-semibold text-sm xl:text-[15px]  cursor-pointer min-w-[139px] min-h-[43.61px] rounded-xl border-2 border-info text-info hover:bg-[#0e0e0e]">{t('viewCV')}</a>
				</div>
			</div>
			<div className="flex flex-col gap-10 xl:gap-0 mt-10 sm:mt-0 md:flex-row justify-between">
				<div className="flex flex-col gap-4">
					<span className="uppercase text-primary font-poppins font-medium xl:text-xl text-left">{t('ctaText')}</span>
					<div className="flex flex-wrap xl:flex-row gap-6">
						{SOCIALS.map((social, index) => (
							<IconCard color="#828282" key={index} icon={social.icon} href={social.url} isHover/>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<span className="uppercase text-primary font-poppins font-medium xl:text-xl xl:text-right">{t('skillsTitle')}</span>
					<div className="flex flex-wrap xl:flex-row gap-6">
						{SKILLS.map((skill, index) => (
							<IconCard key={index} icon={skill.icon}/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}