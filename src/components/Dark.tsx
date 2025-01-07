import AboutMe from "./aboutMe/AboutMe";
import Footer from "./footer/Footer";
import FormEmail from "./formEmail/FormEmail";
import Presentation from "./presentation/Presentation";
import Projects from "./projects/Projects";
import Testimonials from "./testimonials/Testimonials";
import Timeline from "./timeline/Timeline";
import WhyHire from "./whyHire/WhyHire";

export default function Dark() {
    return (
        <div className="bg-[#1e1e1e]">
            <Presentation darkMode/>
            <AboutMe darkMode/>
            <Timeline darkMode/>
            <WhyHire darkMode/>
            <Projects darkMode/>
            <Testimonials/> 
            <FormEmail darkMode/>
            <Footer darkMode/>
        </div>
    )
}