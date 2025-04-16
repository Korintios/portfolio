import AboutMe from "./aboutMe/AboutMe";
import Presentation from "./Presentation";

export default function Portfolio() {
    return (
        <div className="bg-black h-auto">
            <Presentation/>
            <AboutMe/>
        </div>
    )
}