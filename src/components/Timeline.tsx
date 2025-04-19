import { useTranslation } from "react-i18next";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EventsType } from "../types";

export default function Timeline() {
	const { t } = useTranslation("timeline");
	
	const events = t("events", { returnObjects: true }) as EventsType;
	const eventsArray = Array.isArray(events) ? events : []

	function universityIcon() {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" className="scale-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path d="M22 12L12 6 2 12l10 6 10-6z" />
				<path d="M6 18v-3" />
				<path d="M18 18v-3" />
			</svg>
		)
	}

	function workIcon() {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" className="scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path d="M2 7h20v14H2z" />
				<path d="M16 3h-8v4h8V3z" />
			</svg>
		)
	}

	return (
		<section id="timeline" className="min-h-screen">
			<div className="flex flex-col gap-5">
				<h1 className="text-white xl:px-20 py-10 uppercase text-center xl:text-left font-hubballi text-2xl md:text-5xl w-full">
					{t("title")}
				</h1>
				<VerticalTimeline lineColor="#292929">
					{eventsArray.map((time, index) => (
						<VerticalTimelineElement
							key={index}
							date={time.date}
							icon={time.type === "university" ? universityIcon() : workIcon()}
							iconStyle={{ background: "#292929", color: "#fff" }}
							contentStyle={{ backgroundColor: "#82828233" }}
							dateClassName="text-white font-hubballi text-2xl md:text-3xl uppercase font-bold"
							className="vertical-timeline-element--work"
							contentArrowStyle={{ borderRight: '7px solid #82828233' }}
							textClassName="text-white"
						>
							<h1 className="font-hubballi text-white xsm:text-xl xl:text-3xl font-bold">{time.title}</h1>
							<span className="font-poppins text-info xl:text-xl font-medium">{time.subtitle}</span>
							<p className="text-info/75 text-lg">{time.description}</p>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</div>
		</section>
	);
}
