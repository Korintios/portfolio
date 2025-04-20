import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error dont expalin.
import "swiper/css";
// @ts-expect-error dont expalin.
import "swiper/css/free-mode";

import { Autoplay, Pagination } from "swiper/modules";
import { ProjectType } from "../types";

export default function Projects() {
	const { t } = useTranslation("projects");

	const portfolioObjects = t("portfolio", {returnObjects: true}) as Array<ProjectType>;
	const portfolioArray = Array.isArray(portfolioObjects) ? portfolioObjects : [];

	function GitHubIcon() {
		return (
			<svg
				className="fill-white hover:fill-info"
				width="32"
				height="32"
				viewBox="0 0 52 51"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M26 4.25C23.2094 4.25 20.4461 4.79965 17.868 5.86756C15.2898 6.93547 12.9472 8.50074 10.974 10.474C6.98883 14.4591 4.75 19.8641 4.75 25.5C4.75 34.8925 10.8488 42.8612 19.285 45.6875C20.3475 45.8575 20.6875 45.1987 20.6875 44.625V41.0337C14.8013 42.3088 13.5475 38.1862 13.5475 38.1862C12.57 35.7212 11.1888 35.0625 11.1888 35.0625C9.255 33.745 11.3375 33.7875 11.3375 33.7875C13.4625 33.9362 14.5887 35.9762 14.5887 35.9762C16.4375 39.2062 19.5612 38.25 20.7725 37.74C20.9638 36.3587 21.5163 35.4237 22.1112 34.8925C17.3938 34.3612 12.4425 32.5338 12.4425 24.4375C12.4425 22.0788 13.25 20.1875 14.6313 18.6788C14.4187 18.1475 13.675 15.9375 14.8438 13.0688C14.8438 13.0688 16.6287 12.495 20.6875 15.2362C22.3663 14.7688 24.1938 14.535 26 14.535C27.8062 14.535 29.6337 14.7688 31.3125 15.2362C35.3713 12.495 37.1562 13.0688 37.1562 13.0688C38.325 15.9375 37.5812 18.1475 37.3688 18.6788C38.75 20.1875 39.5575 22.0788 39.5575 24.4375C39.5575 32.555 34.585 34.34 29.8463 34.8713C30.6113 35.53 31.3125 36.8263 31.3125 38.8025V44.625C31.3125 45.1987 31.6525 45.8787 32.7362 45.6875C41.1725 42.84 47.25 34.8925 47.25 25.5C47.25 22.7094 46.7004 19.9461 45.6324 17.368C44.5645 14.7898 42.9993 12.4472 41.026 10.474C39.0528 8.50074 36.7102 6.93547 34.132 5.86756C31.5539 4.79965 28.7906 4.25 26 4.25Z"
					fill="currentColor"
				/>
			</svg>
		);
	}

	function ExternalLinkIcon() {
		return (
			<svg
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11 6C11.2652 6 11.5196 6.10536 11.7071 6.29289C11.8946 6.48043 12 6.73478 12 7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8H5V19H16V13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12C17.2652 12 17.5196 12.1054 17.7071 12.2929C17.8946 12.4804 18 12.7348 18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11ZM20 3C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V9C21 9.26522 20.8946 9.51957 20.7071 9.70711C20.5196 9.89464 20.2652 10 20 10C19.7348 10 19.4804 9.89464 19.2929 9.70711C19.1054 9.51957 19 9.26522 19 9V6.414L10.707 14.707C10.5184 14.8892 10.2658 14.99 10.0036 14.9877C9.7414 14.9854 9.49059 14.8802 9.30518 14.6948C9.11977 14.5094 9.0146 14.2586 9.01233 13.9964C9.01005 13.7342 9.11084 13.4816 9.293 13.293L17.586 5H15C14.7348 5 14.4804 4.89464 14.2929 4.70711C14.1054 4.51957 14 4.26522 14 4C14 3.73478 14.1054 3.48043 14.2929 3.29289C14.4804 3.10536 14.7348 3 15 3H20Z"
					fill="currentColor"
				/>
			</svg>
		);
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
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: false,
				}}
				speed={8000}
				breakpoints={{
					0: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					600: {
						slidesPerView: 2,
					},
					750: {
						slidesPerView: 2,
					},
					1280: {
						slidesPerView: 3,
					},
					1880: {
						slidesPerView: 4,
					},
				}}
			>
				{portfolioArray.map((project, index) => (
					<SwiperSlide key={index}>
						<img src={project.image} alt="fondo" className="absolute rounded-lg inset-0 w-full h-full object-cover z-0"/>

						<div className="absolute inset-0 bg-gradient-to-t rounded-lg to-black/40 z-10" />
						<div className="absolute inset-0 bg-gradient-to-b rounded-lg to-black/90 z-10" />

						<div className="relative z-20 p-5 rounded-lg text-white flex flex-col justify-between h-full">
							<div className="flex flex-row justify-between">
								<a href={project.github}> <GitHubIcon /> </a>
								{project.link && (<a href={project.link}> <ExternalLinkIcon /> </a>)}
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
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
