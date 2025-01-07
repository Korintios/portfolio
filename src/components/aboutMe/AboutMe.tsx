import { getClass } from "../../constants/THEME"
import { ComponentProps } from "../../types"

export default function AboutMe({darkMode = true}: ComponentProps) {
    return (
        <section className={getClass(darkMode, 'background') + getClass(darkMode, 'text') + "flex xsm:flex-col xsm:justify-center xl:justify-between xsm:gap-10 xl:gap-0 xl:flex-row items-center h-screen"}>
            <div className="flex flex-col gap-5">
                <h1 className="xsm:text-5xl xl:text-6xl font-bold">Un poco <b className="text-gradient-blue">Sobre Mi</b></h1>
                <p className="xsm:w-full xl:w-[500px] text-xl font-light leading-relaxed whitespace-normal">
                    Desde pequeño, siempre me sentí atraído por los <b className="text-gradient-blue">computadores</b> y la <b className="text-gradient-blue">tecnología</b>, lo que marcó el inicio de mi camino en el desarrollo. Comencé aprendiendo <b className="text-gradient-blue">HTML</b>, <b className="text-gradient-blue">CSS</b> y <b className="text-gradient-blue">PHP</b> por recomendacion externa de un profesional del tema que a palabras de el <b className="text-gradient-blue">vio potencial en mi</b>, y al ingresar a la <b className="text-gradient-blue">universidad</b>, descubrí mi pasión por este mundo. Ahí, aprendí <b className="text-gradient-blue">Python</b> y profundicé en <b className="text-gradient-blue">Java</b>, mientras que <b className="text-gradient-blue">React</b> y <b className="text-gradient-blue">PHP</b> se convirtieron en mis tecnologías principales. 
                    Cada proyecto que realizo refleja mi esfuerzo por mejorar y crear soluciones de <b className="text-gradient-blue">calidad</b>. Actualmente, me enfoco en perfeccionar mis habilidades y explorar <b className="text-gradient-blue">UI/UX</b> para complementar mi desarrollo profesional. <b className="text-gradient-blue">Amo lo que hago</b> y busco superarme cada día.
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