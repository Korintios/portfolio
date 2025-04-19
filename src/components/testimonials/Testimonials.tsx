import { useEffect } from "react";
import Star from "../../assets/icons/Star";
import "./Testimonials.style.css";
import { useTranslation } from "react-i18next";

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

	useEffect(() => {
		const carousel = document.querySelector(
			".testimonial-carousel"
		) as HTMLElement;
		if (carousel && reviewsArray.length >= 3) {
			carousel.style.setProperty(
				"--testimonials",
				(reviewsArray.length + 1).toString()
			);
		}
	});

	return (
		<div className="testimonials-container w-full sm:h-screen flex items-center justify-center">
			<video autoPlay muted loop src="videos/one.mp4" typeof="video/mp4">
				{t('videoError')}
			</video>

			<div className="overlay"></div>

			<div className="testimonials flex flex-col gap-7">
				<div className="flex flex-col items-center gap-3">
					<h1 className="xsm:text-4xl xl:text-7xl font-medium font-poppins xsm:w-[300px] xl:w-[700px]">{t('title')}</h1>
					<p className="xsm:text-md 2xl:text-xl font-norma font-poppins xsm:w-[20rem] sm:w-[40rem] md:w-[50rem] xl:w-[80rem] leading-relaxed whitespace-normal">{t('description')}</p>
				</div>
				<div
					className={
						"testimonials-reviews flex xsm:flex-col 2xl:flex-row items-center justify-center gap-6" +
						(reviewsArray.length >= 3 ? " testimonials-animation" : "")
					}
				>
					{reviewsArray.map((testimonial, index) => (
						<div
							key={index}
							className={
								"flex flex-col gap-3 xl:w-[785px] h-[470px] sm:h-[450px] xl:h-auto bg-white/10 p-3 rounded-md text-white " +
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
								<span className="text-2xl font-poppins font-bold">
									{testimonial.score.toFixed(1)}
								</span>
							</div>
							<p className="text-start font-normal font-poppins leading-relaxed whitespace-normal">
								{testimonial.review}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
