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
            <Presentation darkMode={false}/>
            <AboutMe darkMode={false}/>
            <Timeline darkMode={false}/>
            <WhyHire darkMode={false}/>
            <Projects darkMode={false}/>
            <Testimonials/> 
            <FormEmail darkMode={false}/>
            <Footer darkMode={false}/>
        </div>
    )
}