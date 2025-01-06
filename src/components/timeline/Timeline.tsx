import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TIMES from "../../constants/TIMES";

export default function Timeline() {
	return (
		<section className="min-h-screen">
			<div className="flex flex-col gap-5">
				<h1 className="text-6xl font-bold">
					Mi <b className="text-gradient-blue">Linea de Tiempo</b>
				</h1>
				<VerticalTimeline lineColor="#f3f3f3">
					{TIMES.map((time, index) => (
						<VerticalTimelineElement
							key={index}
							date={time.date}
							iconStyle={time.iconStyle}
							contentStyle={time.contentStyle}
							icon={<time.icon />}
							className={time.className}
						>
							<h1 className="text-3xl font-bold">{time.title}</h1>
							<h2 className="text-xl font-medium">{time.subtitle}</h2>
							<p className="text-lg">{time.description}</p>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</div>
		</section>
	);
}
