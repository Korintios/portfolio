import { SectionProps } from "../types";
import AboutMe from "./aboutMe/AboutMe";
import Footer from "./footer/Footer";
import FormEmail from "./formEmail/FormEmail";
import Presentation from "./presentation/Presentation";
import Projects from "./projects/Projects";
import Testimonials from "./testimonials/Testimonials";
import Timeline from "./timeline/Timeline";
import WhyHire from "./whyHire/WhyHire";

export default function Portfolio({darkMode, lang}: SectionProps) {

    const sections = [
        {
            component: Presentation,
            lang: lang.presentation
        },
        {
            component: AboutMe,
            lang: lang.aboutMe
        },
        {
            component: Timeline,
            lang: lang.timeline
        },
        {
            component: WhyHire,
            lang: lang.whyHireMe
        },
        {
            component: Projects,
            lang: lang.projects
        },
        {
            component: Testimonials,
            lang: lang.testimonials
        },
        {
            component: FormEmail,
            lang: lang.formEmail
        },
        {
            component: Footer,
            lang: lang.footer
        }

        
    ]

    return (
        <div className={darkMode ? "bg-[#1e1e1e]" : "bg-white relative"}>
            {sections.map((section, index) => {
                const Component = section.component;
                if (section.component === Testimonials) {
                    //@ts-expect-error dont explain.
                    return <Testimonials key={index} lang={section.lang} />;
                } else {
                    //@ts-expect-error dont explain.
                    return <Component key={index} darkMode={darkMode} lang={section.lang} />;
                }
            })}
        </div>
    )
}