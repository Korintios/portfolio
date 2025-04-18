import AboutMe from "./AboutMe";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Services from "./Services";

export default function Portfolio() {
	return (
		<div className="bg-black h-auto">
			<Presentation />
			<AboutMe />
			<Projects />
			<Services />
		</div>
	);
}
