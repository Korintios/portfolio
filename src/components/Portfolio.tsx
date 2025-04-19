import AboutMe from "./AboutMe";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Services from "./Services";
import Timeline from "./Timeline";

export default function Portfolio() {
	return (
		<div className="bg-black h-auto">
			<Presentation />
			<AboutMe />
			<Timeline />
			<Projects />
			<Services />
		</div>
	);
}
