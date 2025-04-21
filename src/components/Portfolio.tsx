import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Meeting from "./Meeting";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Timeline from "./Timeline";

export default function Portfolio() {
	return (
		<div className="bg-black h-auto">
			<Presentation />
			<AboutMe />
			<Timeline />
			<Projects />
			<Services />
			<Testimonials />
			<Meeting />
			<Footer />
		</div>
	);
}
