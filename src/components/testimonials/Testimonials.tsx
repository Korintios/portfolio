import { useEffect } from "react";
import Star from "../../assets/icons/Star";
import "./Testimonials.style.css";
import { TestimonialsLang } from "../../types";
import HighlightText from "../../utils/texts";

export default function Testimonials({lang}: {lang: TestimonialsLang}) {
	useEffect(() => {
		const carousel = document.querySelector(
			".testimonial-carousel"
		) as HTMLElement;
		if (carousel && lang.reviews.length >= 3) {
			carousel.style.setProperty(
				"--testimonials",
				(lang.reviews.length + 1).toString()
			);
		}
	});

	return (
		<div className="testimonials-container w-full sm:h-screen flex items-center justify-center">
			<video autoPlay muted loop src="videos/one.mp4" typeof="video/mp4">
				{lang.videoError}
			</video>

			<div className="overlay"></div>

			<div className="testimonials flex flex-col gap-7">
				<div className="flex flex-col items-center gap-3">
					<h1 className="xsm:text-4xl xl:text-7xl font-bold xsm:w-[300px] xl:w-[700px]"><HighlightText text={lang.title} boldWords={lang.boldWords} withClass/></h1>
					<p className="xsm:text-md 2xl:text-xl font-normal w-auto leading-relaxed whitespace-normal">{lang.description}</p>
				</div>
				<div
					className={
						"testimonials-reviews flex xsm:flex-col 2xl:flex-row items-center justify-center gap-6" +
						(lang.reviews.length >= 3 ? " testimonials-animation" : "")
					}
				>
					{lang.reviews.map((testimonial, index) => (
						<div
							key={index}
							className={
								"flex flex-col gap-3 xl:w-[785px] xl:h-[230px] bg-white bg-opacity-15 p-3 rounded-md text-white " +
								(index === 0 ? "one" : "")
							}
						>
							<div className="flex flex-row items-center gap-3">
								<img
									src={testimonial.image}
									alt=""
									className="bg-blue-500 rounded-full size-12 object-cover"
								/>
								<div className="flex flex-col items-start">
									<span className="text-lg font-semibold h-[21px] truncate">
										{testimonial.name}
									</span>
									<span className="text-md">{testimonial.title}</span>
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
								<span className="text-2xl font-bold">
									{testimonial.score.toFixed(1)}
								</span>
							</div>
							<p className="text-start font-normal leading-relaxed whitespace-normal">
								{testimonial.review}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
