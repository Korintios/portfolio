import { useTranslation } from "react-i18next";

export default function Presentation() {

	const { t } = useTranslation("presentation")

	function IconCard({src = "", href = undefined, isHover = false, isPulse = false}: {src: string, href?: string | undefined, isHover?: boolean, isPulse?: boolean}) {

		const formatName = (src.split('/')[1].split('.')[0])

		return (
			<a href={href != undefined ? href : undefined} className={"size-[50px] xl:size-[77px] rounded-xl shadow-icon ring-2 ring-black flex items-center justify-center bg-gradient-to-b from-[#121212]" + (isHover ? " cursor-pointer hover:from-[#1a1a1a] " : "") + " to-black"}>
				<img className={(isPulse ? "animate-pulse " : "") + "scale-75 xl:scale-100"} src={src} alt={formatName} />
			</a>
		)
	}

	return (
		<section className="min-h-screen sm:h-screen p-10 xl:p-20 flex flex-col justify-between">
			<div className="flex flex-col gap-4">
				<span className="uppercase text-[#b2b2b2] font-poppins font-bold text-lg xl:text-xl">{t('greeting')}</span>
				<h1 className="uppercase text-white font-hubballi text-2xl md:text-5xl max-w-[610px]">{t('title')}</h1>
				<p className="text-[#7f7f7f] font-poppins max-w-[700px] text-sm md:text-xl">{t('description')}</p>
				<div className="flex flex-row gap-4 mt-2">
					<button className="font-poppins font-semibold text-xs sm:text-sm xl:text-[15px] cursor-pointer min-w-[139px] px-4 min-h-[43.61px] rounded-xl bg-linear-to-b from-white to-[#c4c4c4] hover:to-[#b8b8b8]">{t('knowMe')}</button>
					<button className="font-poppins font-semibold text-sm xl:text-[15px] cursor-pointer min-w-[139px] min-h-[43.61px] rounded-xl border-2 border-[#828282] text-[#828282] hover:bg-[#0e0e0e]">{t('viewCV')}</button>
				</div>
			</div>
			<div className="flex flex-col gap-10 xl:gap-0 mt-10 sm:mt-0 md:flex-row justify-between">
				<div className="flex flex-col gap-4">
					<span className="uppercase text-[#b2b2b2] font-poppins font-medium xl:text-xl text-left">{t('ctaText')}</span>
					<div className="flex flex-wrap xl:flex-row gap-6">
						<IconCard src="icons/linkedin.svg" href="https://www.linkedin.com/in/juan-camilo-vergara-marin-a50805263" isHover/>
						<IconCard src="icons/github.svg" href="https://github.com/Korintios" isHover/>
						<IconCard src="icons/phone.svg" href="https://wa.me/573147685292?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20que%20ofreces%2C%20Juan%20Camilo%20V.M.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F" isHover/>
						<IconCard src="icons/email.svg" href="mailto:juanvergaram@outlook.com" isHover/>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<span className="uppercase text-[#b2b2b2] font-poppins font-medium xl:text-xl xl:text-right">{t('skillsTitle')}</span>
					<div className="flex flex-wrap xl:flex-row gap-6">
						<IconCard src="icons/javascript.svg" isPulse/>
						<IconCard src="icons/react.svg" isPulse/>
						<IconCard src="icons/nextjs.svg" isPulse/>
					</div>
				</div>
			</div>
		</section>
	);
}