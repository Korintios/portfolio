import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error dont expalin.
import "swiper/css";

import Star from "../assets/icons/Star";
import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";
import { DEFAULT_AUTOPLAY_OPTIONS, DEFAULT_BREAKPOINTS } from "../constants/sliders";

export default function Testimonials() {
	const { t } = useTranslation("testimonials");
	const reviewsObject = t("reviews", { returnObjects: true }) as {
		name: string;
		title: string;
		image: string;
		score: number;
		review: string;
	};
	const reviewsArray = Array.isArray(reviewsObject) ? reviewsObject : [];

	return (
		<div id="testimonials" className="min-h-screen flex items-center justify-center">
			<video
				autoPlay
				muted
				loop
				src="videos/one.mp4"
				typeof="video/mp4"
				className="absolute w-full h-full object-cover z-0 brightness-25"
			/>
			<div className="relative z-20 flex flex-col gap-7 w-full h-full justify-center items-center text-white">
				<div className="flex flex-col items-center gap-3">
					<h1 className="mt-10 xl:mt-0 text-center text-2xl md:text-4xl xl:text-7xl font-medium font-poppins xsm:w-[300px] xl:w-[700px]">
						{t("title")}
					</h1>
					<p className="px-6 xl:px-0 text-center text-xs xl:text-xl font-normal font-poppins xsm:w-[20rem] sm:w-[40rem] md:w-[50rem] xl:w-[80rem] leading-relaxed whitespace-normal">
						{t("description")}
					</p>
				</div>
				<Swiper 
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides
				loop
				modules={[Autoplay]}
				pagination={{
					clickable: true,
				}}
				autoplay={DEFAULT_AUTOPLAY_OPTIONS}
				speed={6500}
				breakpoints={DEFAULT_BREAKPOINTS}
				>
					{reviewsArray.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<div className="flex flex-col gap-3 h-auto bg-white/10 p-3 rounded-md text-white">
								<div className="flex flex-row items-center gap-3">
									<img
										src={testimonial.image}
										alt="logo"
										className="bg-blue-500 rounded-full size-12 object-cover"
									/>
									<div className="flex flex-col items-start">
										<span className="text-lg font-poppins font-semibold h-[21px] truncate">
											{testimonial.name}
										</span>
										<span className="text-md font-hubballi text-left">{testimonial.title}</span>
									</div>
								</div>
								<div className="flex flex-row items-center gap-3">
									<div className="flex flex-row gap-2">
										<Star />
										<Star />
										<Star />
										<Star />
										<Star />
									</div>
									<span className="text-2xl font-poppins font-medium">
										{testimonial.score.toFixed(1)}
									</span>
								</div>
								<p className="text-start text-sm font-normal font-poppins leading-relaxed whitespace-normal">
									{testimonial.review}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
