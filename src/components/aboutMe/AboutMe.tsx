import { getClass } from "../../constants/THEME"
import { AboutLang } from "../../types"
import HighlightText from "../../utils/texts"

export default function AboutMe({darkMode = true, lang}: {darkMode: boolean, lang: AboutLang}) {
    return (
        <section className={getClass(darkMode, 'background') + getClass(darkMode, 'text') + "flex xsm:flex-col xsm:justify-center xl:justify-between xsm:gap-10 xl:gap-0 xl:flex-row items-center h-screen"}>
            <div className="flex flex-col gap-5">
                <h1 className="xsm:text-5xl xl:text-6xl font-bold"><HighlightText text={lang.title} boldWords={["Sobre Mí"]} withClass/></h1>
                <p className="xsm:w-full xl:w-[500px] text-xl font-light leading-relaxed whitespace-normal">
                    <HighlightText text={lang.description} boldWords={lang.boldWords} withClass/>
                </p>

            </div>
            <div className="xl:flex flex-wrap items-center justify-center w-[700px] gap-5 xsm:hidden">
                <img src="images/computer.jpg" alt="" className={getClass(darkMode, "shadowColor") + "bg-blue-400 w-[262px] h-[388px] rounded-lg object-cover shadow-2xl"}/>
                <div className="flex flex-col gap-5 xsm:mb-10 xl:mb-0">
                    <img src="images/ui.jpg" alt="" className={getClass(darkMode, "shadowColor") + "bg-blue-400 w-[262px] h-[388px] rounded-lg object-cover shadow-2xl"}/>
                    <img src="images/superation.jpg" alt="" className={getClass(darkMode, "shadowColor") + "bg-blue-400 w-[262px] h-[388px] rounded-lg object-cover shadow-2xl"}/>
                </div>
            </div>
        </section>
    )
}