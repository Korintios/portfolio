import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-expect-error exists.
import "swiper/css";

import Star from "../assets/icons/Star";
import { useTranslation } from "react-i18next";

import {
	DEFAULT_AUTOPLAY_OPTIONS,
	DEFAULT_BREAKPOINTS,
} from "../constants/sliders";
import { FeedbackType } from "../types";
import { useEffect, useState } from "react";
import { getFeedback } from "../firebase";

export default function Testimonials() {
	const { t } = useTranslation("testimonials");
	const [feedbackList, setFeedbackList] = useState<FeedbackType[]>([]);

	const Testimonial = ({ testimonial }: { testimonial: FeedbackType }) => {
		return (
			<div className="flex flex-col gap-3 h-auto bg-white/10 p-3 rounded-md text-white">
				<div className="flex flex-row items-center gap-3">
					<img
						src={testimonial.imageUrl}
						alt="logo"
						className="bg-blue-500 rounded-full size-12 object-cover"
					/>
					<div className="flex flex-col items-start">
						<span className="text-lg font-poppins font-semibold h-[25px] truncate">
							{testimonial.name}
						</span>
						<span className="text-md font-hubballi text-left">
							{testimonial.title}
						</span>
					</div>
				</div>
				<div className="flex flex-row items-center gap-3">
					<div className="flex flex-row gap-2">
						{Array.from({ length: testimonial.rating }).map((_, index) => (
							<Star key={index} color="#fd853a" />
						))}
						{Array.from({ length: 5 - testimonial.rating }).map((_, index) => (
							<Star key={index} color="#ccc" />
						))}
					</div>
					<span className="text-2xl font-poppins font-medium">
						{testimonial.rating}
					</span>
				</div>
				<p className="text-start text-sm font-normal font-poppins leading-relaxed whitespace-normal">
					{testimonial.testimony}
				</p>
			</div>
		);
	};

	useEffect(() => {
		const cacheKey = "feedbackCache";
		const cached = localStorage.getItem(cacheKey);
		const expiresIn = 1000 * 60 * 60;
		const now = Date.now();

		if (cached) {
			const { data, timestamp } = JSON.parse(cached);
			if (now - timestamp < expiresIn) {
				setFeedbackList(data);
				return;
			}
		}

		getFeedback().then((feedback) => {
			setFeedbackList(feedback);
			localStorage.setItem(
				cacheKey,
				JSON.stringify({ data: feedback, timestamp: now })
			);
		});
	}, []);

	return (
		<section
			id="testimonials"
			className="min-h-screen flex items-center justify-center"
		>
			<video
				src="videos/one.webm"
				typeof="video/webm"
				className="absolute w-full h-full object-cover z-0"
				autoPlay
				muted
				loop
			/>

			<div className="absolute w-full h-full bg-black/70 z-10" />

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
					loop={feedbackList.length > 3}
					modules={[Autoplay]}
					pagination={{
						clickable: true,
					}}
					autoplay={DEFAULT_AUTOPLAY_OPTIONS}
					speed={6500}
					breakpoints={DEFAULT_BREAKPOINTS}
				>
					{feedbackList.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<Testimonial testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
