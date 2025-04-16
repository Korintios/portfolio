import AboutMe from "./AboutMe";
import Presentation from "./Presentation";

export default function Portfolio() {
    return (
        <div className="bg-black h-auto">
            <Presentation/>
            <AboutMe/>
        </div>
    )
}