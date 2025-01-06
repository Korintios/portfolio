import { motion } from "motion/react"

export default function WhyHire() {
    return (
        <section className="h-screen">
            <motion.div className="flex justify-between items-center h-full" initial={{ opacity: 0, x: 50 }} animate={{opacity: 1, x: 0}} transition={{ duration: 1.5 }}>
                <div>

                </div>
                <div className="flex flex-col gap-5 w-[700px]">
                    <h1 className="xsm:text-3xl xl:text-5xl font-bold leading-tight">¿Por que <b className="text-gradient-blue">Deberias Contratarme?</b></h1>
                    <p className="xsm:text-lg xl:text-xl font-light leading-relaxed whitespace-normal">Aprendo rápido, trabajo con precisión y priorizo la calidad en cada proyecto que desarrollo. Mi capacidad de liderazgo, organización y enfoque en los detalles asegura entregas impecables y puntuales. Si buscas alguien confiable, eficiente y comprometido, estoy listo para convertir tus ideas en resultados sobresalientes.</p>
                    <div className="flex flex-row justify-between gap-5">
                        <div className="flex flex-col gap-3">
                            <h1 className="xsm:text-4xl xl:text-5xl font-bold text-gradient-blue">10+</h1>
                            <span className="font-medium opacity-50">Proyectos completados</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="xsm:text-4xl xl:text-5xl font-bold text-gradient-blue">15%</h1>
                            <span className="font-medium opacity-50">Tiempo promedio de entrega</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="xsm:text-4xl xl:text-5xl font-bold text-gradient-blue">90%</h1>
                            <span className="font-medium opacity-50">Tasa de Éxito/Calidad</span>
                        </div>
                    </div>
                    <button></button>
                </div>
            </motion.div>
        </section>
    )
}