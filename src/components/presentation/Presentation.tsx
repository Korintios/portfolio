import { Typewriter } from "react-simple-typewriter";
import Marks from "../../assets/icons/Marks";
import NorthEastIcon from "../../assets/icons/NorthEast";
import { motion } from "motion/react";
import { getClass } from "../../constants/THEME";
import { PresentationLang } from "../../types";
import HighlightText from "../../utils/texts";

export default function Presentation({darkMode = true, lang}: {darkMode: boolean, lang: PresentationLang}) {

	return (
		<section className={getClass(darkMode, "background") + " " + "flex xsm:flex-col xl:flex-row justify-between items-center"}>
			<motion.div className="flex flex-col justify-between items-center h-screen py-24" initial={{opacity: 0, x: -50}} animate={{ opacity: 1, x: 0}} transition={{duration: 1}}>
				<div className={getClass(darkMode, "text") +"flex flex-col gap-2 xsm:w-[300px] xl:w-[445px]"}>
					<p className="text-xl italic">{lang.greeting}</p>
					<h1 className="xsm:text-3xl xl:text-5xl font-semibold">
						<Typewriter 
						words={[lang.greeting]} 
						cursor 
						loop={0} 
						typeSpeed={300}
						delaySpeed={300}
						/>
					</h1>
				</div>
				<div className="relative xsm:size-[20em] xl:size-[25em] mx-auto animate-pulse">
					<div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0085FF] to-[#69B4FF] blur-lg"></div>

					<img
						src="images/me.jpeg"
						alt="Foto de perfil"
						className="relative xsm:size-[20em] xl:size-[25em] rounded-full object-cover"
					/>										
				</div>
				<div className={getClass(darkMode, "text") + "flex flex-col text-center gap-1 w-[445px]"}>
					<h1 className="xsm:text-4xl xl:text-5xl font-semibold text-gradient-blue">
						<Typewriter
							words={[lang.fullName]}
							cursor
							loop={0}
							typeSpeed={300}
							delaySpeed={300}
							cursorColor="#0085FF"
						/>
					</h1>
					<span className="xsm:text-1xl xl:text-xl">
						<HighlightText text={lang.jobTitle.text} boldWords={lang.jobTitle.boldWords}/>
					</span>
					<a
						href="docs/cv.pdf"
						download={true}
						target="_blank"
						className="xl:text-md underline flex flex-row gap-2 items-center justify-center"
					>
						<>{lang.downloadCVText} <NorthEastIcon darkMode={darkMode}/></>
					</a>
				</div>
			</motion.div>
			<motion.div className={getClass(darkMode, "text") + "flex flex-col gap-5 xsm:w-[300px] md:w-[400px] xl:w-[600px]"} initial={{ opacity: 0, x: 50 }} animate={{opacity: 1, x: 0}} transition={{ duration: 1.5 }}>
				<div className="flex xsm:flex-col xl:flex-row xsm:justify-center xl:justify-start flex-wrap gap-5">
					<div className="flex flex-col gap-6">
						{lang.contactInfo.slice(0,3).map((social, index) => {
							return (
								<div key={index} className="flex flex-row gap-3 items-center">
									<a href={social.href ?? social.href} target="_blank" className={getClass(darkMode, "backgroundSocials") + "flex items-center justify-center rounded-full w-[40px] h-[40px] " + (social.href && "hover:bg-[#0085FF] hover:text-white transition-colors")}>
										<social.icon />
									</a>
									<span className="italic text-xl font-medium">{social.text}</span>
								</div>
							)
						})}
					</div>
					<div className="flex flex-col gap-6">
						{lang.contactInfo.slice(3,6).map((social, index) => {
							return (
								<div key={index} className="flex flex-row gap-3 items-center">
									<a href={social.href ?? social.href} target="_blank" className={getClass(darkMode, "backgroundSocials") + "flex items-center justify-center rounded-full w-[40px] h-[40px] " + (social.href && "hover:bg-[#0085FF] hover:text-white transition-colors")}>
										<social.icon />
									</a>
									<span className="italic text-xl font-medium">{social.text}</span>
								</div>
							)
						})}
					</div>
				</div>
				<hr />
				<div className="flex xsm:flex-col xl:flex-row justify-between gap-5">
					{lang.experiences.map((experience, index) => {
						return (
							<div key={index} className="flex flex-col gap-3 w-[300px]">
								<div className="flex flex-row gap-3">
									<h1 className="text-5xl font-bold text-gradient-blue">{experience.count}</h1>
									<span className="font-medium">{experience.description}</span>
								</div>
								<p>
									<HighlightText text={experience.details} boldWords={["Juan Camilo"]} withClass/>
								</p>
							</div>
						)
					})}
				</div>
				<div className={getClass(darkMode, "colorMark") + "flex flex-row gap-5 mt-10 xsm:mb-12"}>
					<Marks />
					<span className={getClass(darkMode, "colorMark") + "text-xl italic font-semibold"}>
					"{lang.quote}"
					</span>
				</div>
			</motion.div>
		</section>
	);
}