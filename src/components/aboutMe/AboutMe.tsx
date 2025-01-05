export default function AboutMe() {
    return (
        <section className="flex justify-between items-center h-screen">
            <div className="flex flex-col gap-5">
                <h1 className="text-6xl font-bold">Un poco <b className="text-gradient-blue">Sobre Mi</b></h1>
                <p className="w-[500px] text-xl font-light leading-relaxed whitespace-normal">Comencé mi camino en este mundo hace aproximadamente dos años, cuando recibí la recomendación de estudiar esta carrera. Al iniciar mis estudios, <b className="text-gradient-blue">comencé con HTML</b> por consejo de un familiar y, poco después, ingresé a la universidad. <b className="text-gradient-blue">Mi primer lenguaje de programación fue Python</b>, y en paralelo aprendí <b className="text-gradient-blue">PHP</b> para prepararme en el ámbito laboral.
                Con el tiempo, descubrí que esto me apasiona, y cada proyecto que realizaba buscaba hacerlo de la mejor manera posible. <b className="text-gradient-blue">Amo lo que hago</b> y me esfuerzo cada día por convertirme en <b className="text-gradient-blue">una mejor versión de mí mismo</b>.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center w-[700px] gap-5">
                <img src="images/computer.jpg" alt="" className="bg-blue-400 w-[262px] h-[388px] rounded-lg object-cover shadow-2xl"/>
                <div className="flex flex-col gap-5">
                    <img src="images/ui.jpg" alt="" className="bg-blue-400 w-[262px] h-[388px] rounded-lg object-cover shadow-2xl"/>
                    <img src="images/superation.jpg" alt="" className="bg-blue-400 w-[262px] h-[388px] rounded-lg object-cover shadow-2xl"/>
                </div>
            </div>
        </section>
    )
}