import AboutMe from "./AboutMe";
import Presentation from "./Presentation";
import Projects from "./projects/Projects";

export default function Portfolio() {
    return (
        <div className="bg-black h-auto">
            <Presentation/>
            <AboutMe/>
            <Projects/>
        </div>
    )
}