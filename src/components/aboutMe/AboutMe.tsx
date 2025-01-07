import { getClass } from "../../constants/THEME"
import { ComponentProps } from "../../types"

export default function AboutMe({darkMode = true}: ComponentProps) {
    return (
        <section className={getClass(darkMode, 'background') + getClass(darkMode, 'text') + "flex xsm:flex-col xsm:justify-center xl:justify-between xsm:gap-10 xl:gap-0 xl:flex-row items-center h-screen"}>
            <div className="flex flex-col gap-5">
                <h1 className="xsm:text-5xl xl:text-6xl font-bold">Un poco <b className="text-gradient-blue">Sobre Mi</b></h1>
                <p className="xsm:w-full xl:w-[500px] text-xl font-light leading-relaxed whitespace-normal">Comencé mi camino en este mundo hace aproximadamente dos años, cuando recibí la recomendación de estudiar esta carrera. Al iniciar mis estudios, comencé con  <b className="text-gradient-blue">HTML</b> por consejo de un familiar y, poco después, ingresé a la universidad. Mi primer lenguaje de programación fue <b className="text-gradient-blue">Python</b>, y en paralelo aprendí <b className="text-gradient-blue">PHP</b> para prepararme en el ámbito laboral.
                Con el tiempo, descubrí que esto me apasiona, y cada proyecto que realizaba buscaba hacerlo de la mejor manera posible. <b className="text-gradient-blue">Amo lo que hago</b> y me esfuerzo cada día <b className="text-gradient-blue">por convertirme en una mejor versión de mí mismo.</b></p>
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