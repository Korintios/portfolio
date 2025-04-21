import { useTranslation } from "react-i18next";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EventsType } from "../types";
import Work from "../assets/icons/Work";
import University from "../assets/icons/University";
import { getTranslatedArray } from "../utils/lng";

export default function Timeline() {
	
	const { t } = useTranslation("timeline");
	const eventsArray = getTranslatedArray<EventsType>(t, "events", []);

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
							icon={time.type === "university" ? <University/> : <Work/>}
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
