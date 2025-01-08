import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimelineLang } from "../../types";
import { getClass } from "../../constants/THEME";
import { useEffect } from "react";
import HighlightText from "../../utils/texts";

export default function Timeline({darkMode = true, lang}: {darkMode: boolean, lang: TimelineLang}) {

	useEffect(() => {
		const elements = document.getElementsByClassName("vertical-timeline-element-date");
		if (darkMode) {
			Array.from(elements).forEach((element) => {
				const classes = getClass(darkMode, "text").split(' ').filter(Boolean);
				classes.forEach(cls => (element as HTMLElement).classList.add(cls));
			});
		}
	}, [darkMode]);

	return (
		<section className={getClass(darkMode, "background") + getClass(darkMode, "text") + "h-auto max-h-none xl:w-auto"}>
			<div className="flex flex-col gap-5">
				<h1 className="xsm:text-3xl xsm:pl-4 xl:pl-0 xl:text-6xl font-bold">
					<HighlightText text={lang.title} boldWords={lang.boldWords} withClass />
				</h1>
				<VerticalTimeline lineColor={darkMode ? "#292929" : "#f3f3f3"}>
					{lang.events.map((time, index) => (
						<VerticalTimelineElement
							key={index}
							date={time.date}
							iconStyle={time.styles.icon}
							contentStyle={{ backgroundColor: darkMode ? "#292929" : '', ...time.styles.content }}
							icon={<time.icon />}
							className="vertical-timeline-element--work"
							contentArrowStyle={{ borderRight: darkMode ? '7px solid #292929' : '' }}
							textClassName="text-white"
						>
							<h1 className={getClass(darkMode, "text") + "xsm:text-xl xl:text-3xl font-bold"}>{time.title}</h1>
							<span className={getClass(darkMode, "textSecondary") + "text-xl font-medium"}>{time.subtitle}</span>
							<p className={getClass(darkMode, "text") + "text-lg"}>{time.description}</p>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</div>
		</section>
	);
}
