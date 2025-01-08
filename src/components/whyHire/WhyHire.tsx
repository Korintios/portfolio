import { motion } from "motion/react"
import { getClass } from "../../constants/THEME"
import { WhyHireLang } from "../../types"
import HighlightText from "../../utils/texts"

export default function WhyHire({darkMode = true, lang}: {darkMode: boolean, lang: WhyHireLang}) {
    return (
        <section className={getClass(darkMode, "background") + getClass(darkMode, "text") + "h-screen"}>
            <motion.div className="flex justify-between items-center h-full" initial={{ opacity: 0, x: 50 }} animate={{opacity: 1, x: 0}} transition={{ duration: 1.5 }}>
                <div>

                </div>
                <div className="flex flex-col gap-5 w-[700px]">
                    <h1 className="xsm:text-3xl xl:text-5xl font-bold leading-tight"><HighlightText text={lang.title} boldWords={lang.boldWords} withClass/></h1>
                    <p className="xsm:text-lg xl:text-xl font-light leading-relaxed whitespace-normal">{lang.description}</p>
                    <div className="flex flex-row justify-between gap-5">
                        {lang.statistics.map((statistic, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <h1 className="xsm:text-4xl xl:text-5xl font-bold text-gradient-blue">{statistic.value}</h1>
                                <span className="font-medium opacity-50">{statistic.label}</span>
                            </div>
                        ))}
                    </div>
                    <button></button>
                </div>
            </motion.div>
        </section>
    )
}