import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error exists.
import "swiper/css";
// @ts-expect-error exists.
import "swiper/css/free-mode";

import { Autoplay, Pagination } from "swiper/modules";

import { ProjectType } from "../types";
import { DEFAULT_AUTOPLAY_OPTIONS, DEFAULT_BREAKPOINTS } from "../constants/sliders";
import { getTranslatedArray } from "../utils/lng";

import Github from "../assets/icons/socials/Github";
import ExternalLink from "../assets/icons/ExternalLink";

export default function Projects() {

	const { t } = useTranslation("projects");
	const portfolioArray = getTranslatedArray<ProjectType>(t, "portfolio", []);

	const Project = ({project}: {project: ProjectType}) => {
		return (
			<>
				<img src={project.image} alt="fondo" className="absolute rounded-lg inset-0 w-full h-full object-cover z-0"/>

				<div className="absolute inset-0 bg-gradient-to-t rounded-lg to-black/40 z-10" />
				<div className="absolute inset-0 bg-gradient-to-b rounded-lg to-black/90 z-10" />

				<div className="relative z-20 p-5 rounded-lg text-white flex flex-col justify-between h-full">
					<div className="flex flex-row justify-between">
						<a href={project.github}> <Github className="size-[35px]" /> </a>
						{project.link && (<a href={project.link}> <ExternalLink /> </a>)}
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex flex-col gap-2 text-start">
							<h1 className="font-poppins text-2xl font-medium">
								{project.title}
							</h1>
							<p className="font-poppins text-sm text-white/75">
								{project.description}
							</p>
						</div>
						<div className="flex flex-col gap-2 text-start">
							<h2 className="font-poppins text-xl font-normal text-white/50">
								{t('technologies')}
							</h2>
							<div className="flex flex-wrap gap-2 pointer-events-none">
								{project.tags.map((tag, index: number) => (
									<div key={index} className="border-2 border-info bg-iconcard-gradient-hover text-[12px] px-2 py-1 rounded-full">
										{tag}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}

	return (
		<section id="projects" className="justify-center min-h-screen text-white">
			<h1 className="xl:px-20 py-10 uppercase text-center xl:text-left font-hubballi text-2xl md:text-5xl w-full">
				{t("title")}
			</h1>
			<Swiper 
				slidesPerView={5} 
				spaceBetween={30} 
				centeredSlides 
				loop 
				modules={[Pagination, Autoplay]} 
				pagination={{ clickable: true }} 
				autoplay={DEFAULT_AUTOPLAY_OPTIONS} 
				speed={8000} 
				breakpoints={DEFAULT_BREAKPOINTS}
			>
				{portfolioArray.map((project, index) => (
					<SwiperSlide key={index}>
						<Project project={project} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
