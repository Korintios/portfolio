import AboutMe from "./aboutMe/AboutMe";
import Footer from "./footer/Footer";
import FormEmail from "./formEmail/FormEmail";
import Presentation from "./presentation/Presentation";
import Projects from "./projects/Projects";
import Testimonials from "./testimonials/Testimonials";
import Timeline from "./timeline/Timeline";
import WhyHire from "./whyHire/WhyHire";

export default function Light() {
    return (
        <div className="bg-white relative">
            <Presentation/>
            <AboutMe/>
            <Timeline/>
            <WhyHire/>
            <Projects/>
            <Testimonials/> 
            <FormEmail/>
            <Footer/>
        </div>
    )
}