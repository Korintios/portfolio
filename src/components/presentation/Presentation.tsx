import { Typewriter } from "react-simple-typewriter";
import Marks from "../../assets/icons/Marks";
import NorthEastIcon from "../../assets/icons/NorthEast";
import { motion } from "motion/react";
import { getClass } from "../../constants/THEME";
import SOCIALS from "../../constants/SOCIALS";
import { ComponentProps } from "../../types";

export default function Presentation({darkMode = true}: ComponentProps) {

	return (
		<section className={getClass(darkMode, "background") + " " + "flex xsm:flex-col md:flex-row justify-between items-center"}>
			<motion.div className="flex flex-col justify-between items-center h-screen py-24" initial={{opacity: 0, x: -50}} animate={{ opacity: 1, x: 0}} transition={{duration: 1}}>
				<div className={getClass(darkMode, "text") +"flex flex-col gap-2 xsm:w-[300px] xl:w-[445px]"}>
					<p className="text-xl italic">Mucho gusto!</p>
					<h1 className="xsm:text-3xl xl:text-5xl font-semibold">
						<Typewriter 
						words={["MI NOMBRE ES..."]} 
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
							words={["JUAN CAMILO V.M"]}
							cursor
							loop={0}
							typeSpeed={300}
							delaySpeed={300}
							cursorColor="#0085FF"
						/>
					</h1>
					<span className="xsm:text-1xl xl:text-xl">
						<b>Full Stack Developer</b> in <b>Colombia</b>
					</span>
					<a
						href="localhost:5173"
						className="xl:text-md underline flex flex-row gap-2 items-center justify-center"
					>
						Descargar CV <NorthEastIcon />
					</a>
				</div>
			</motion.div>
			<motion.div className={getClass(darkMode, "text") + "flex flex-col gap-5 xsm:w-[300px] md:w-[400px] xl:w-[600px]"} initial={{ opacity: 0, x: 50 }} animate={{opacity: 1, x: 0}} transition={{ duration: 1.5 }}>
				<div className="flex xsm:flex-col xl:flex-row xsm:justify-center xl:justify-start flex-wrap gap-5">
					<div className="flex flex-col gap-6">
						{SOCIALS.slice(0,2).map((social, index) => {
							return (
								<div key={index} className="flex flex-row gap-3 items-center">
									<div className={getClass(darkMode, "backgroundSocials") + "flex items-center justify-center rounded-full w-[40px] h-[40px]"}>
										<social.icon />
									</div>
									<span className="italic text-xl font-medium">{social.text}</span>
								</div>
							)
						})}
					</div>
					<div className="flex flex-col gap-6">
						{SOCIALS.slice(2,4).map((social, index) => {
							return (
								<div key={index} className="flex flex-row gap-3 items-center">
									<div className={getClass(darkMode, "backgroundSocials") + "flex items-center justify-center rounded-full w-[40px] h-[40px]"}>
										<social.icon />
									</div>
									<span className="italic text-xl font-medium">{social.text}</span>
								</div>
							)
						})}
					</div>
				</div>
				<hr />
				<div className="flex xsm:flex-col xl:flex-row justify-between gap-5">
					<div className="flex flex-col gap-3 w-[300px]">
						<div className="flex flex-row gap-3">
							<h1 className="text-5xl font-bold text-gradient-blue">1.5+</h1>
							<span className="font-medium">Años de experiencia...</span>
						</div>
						<p>
							Hola, soy <b className="text-gradient-blue">Juan Camilo</b>.{" "}
							<br /> Soy un desarrollador full stack con experiencia en diversas
							tecnologías, así como un diseñador UI/UX en proceso, enfocado en
							crear experiencias intuitivas y atractivas para los usuarios.
						</p>
					</div>
					<div className="flex flex-col gap-3 w-[300px]">
						<div className="flex flex-row gap-3">
							<h1 className="text-5xl font-bold text-gradient-blue">7</h1>
							<span className="font-medium w-[150px]">
								Clientes alrededor del mundo...
							</span>
						</div>
						<p>
							Casi dos años de experiencia me han permitido adquirir rápidamente
							las habilidades necesarias para atender las necesidades de mis
							clientes de manera efectiva.
						</p>
					</div>
				</div>
				<div className="flex flex-row text-[#cccccc] gap-5 mt-10 xsm:mb-12">
					<Marks />
					<span className="text-xl italic font-semibold text-[#a6a6a6]">
					"Una parte fundamental del aprendizaje radica en la disciplina de practicar todos los dias"
					</span>
				</div>
			</motion.div>
		</section>
	);
}