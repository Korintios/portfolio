import Email from "../../assets/icons/Email";
import Marks from "../../assets/icons/Marks";
import NorthEastIcon from "../../assets/icons/NorthEast";
import Person from "../../assets/icons/Person";
import Phone from "../../assets/icons/Phone";
import Places from "../../assets/icons/Places";

export default function Presentation() {
    return (
        <section className="flex justify-between items-center">
            <div className="flex flex-col justify-between items-center h-screen py-24">
                <div className="flex flex-col gap-2">
                    <p className="text-xl italic">Mucho gusto!</p>
                    <h1 className="text-5xl font-semibold">MI NOMBRE ES...</h1>
                </div>
                <div className="flex flex-col text-center gap-1">
                    <h1 className="text-5xl font-semibold text-gradient-blue">JUAN CAMILO V.M</h1>
                    <span className="text-xl"><b>Full Stack Developer</b> in <b>Colombia</b></span>
                    <a href="localhost:5173" className="underline flex flex-row gap-2 items-center justify-center">Descargar CV <NorthEastIcon/></a>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-[600px]">
                <div className="flex justify-start flex-wrap w-[600px] gap-5">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-row gap-3 items-center">
                            <div className="flex items-center justify-center bg-[#F3F3F3] rounded-full w-[40px] h-[40px]">
                                <Phone/>
                            </div>
                            <span className="italic text-xl font-medium">+57 3147685292</span>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <div className="flex items-center justify-center bg-[#F3F3F3] rounded-full w-[40px] h-[40px]">
                                <Person/>
                            </div>
                            <span className="italic text-xl font-medium">21 años</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-row gap-3 items-center">
                            <div className="flex items-center justify-center bg-[#F3F3F3] rounded-full w-[40px] h-[40px]">
                                <Email/>
                            </div>
                            <span className="italic text-xl font-medium">juanvergaram@outlook.com</span>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <div className="flex items-center justify-center bg-[#F3F3F3] rounded-full w-[40px] h-[40px]">
                                <Places/>
                            </div>
                            <span className="italic text-xl font-medium">Colombia, Cartagena</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex flex-row justify-between gap-5">
                    <div className="flex flex-col gap-3 w-[300px]">
                        <div className="flex flex-row gap-3">
                            <h1 className="text-5xl font-bold text-gradient-blue">1.5+</h1>
                            <span className="font-medium">Años de experiencia...</span>
                        </div>
                        <p>Hola, soy <b className="text-gradient-blue">Juan Camilo</b>. <br/> Soy un desarrollador full stack con experiencia en diversas tecnologías, así como un diseñador UI/UX en proceso, enfocado en crear experiencias intuitivas y atractivas para los usuarios.</p>
                    </div>
                    <div className="flex flex-col gap-3 w-[300px]">
                        <div className="flex flex-row gap-3">
                            <h1 className="text-5xl font-bold text-gradient-blue">7</h1>
                            <span className="font-medium w-[150px]">Clientes alrededor del mundo...</span>
                        </div>
                        <p>Casi dos años de experiencia me han permitido adquirir rápidamente las habilidades necesarias para atender las necesidades de mis clientes de manera efectiva.</p>
                    </div>
                </div>
                <div className="flex flex-row text-[#cccccc] gap-5 mt-10">
                    <Marks/>
                    <span className="text-xl italic font-semibold text-[#a6a6a6]">"Una parte fundamental del aprendizaje radica en la disciplina de practicar todos los dias"</span>
                </div>
            </div>
            
        </section>
    )
}