import Project from "./Project";

export default function Projects() {
    return (
        <div className="flex flex-col items-center h-screen w-full gap-10">
            <div className="flex flex-row justify-between gap-5 w-full">
                <h1 className="text-5xl font-bold leading-tight">Echale un ojo a mis <b className="text-gradient-blue">Proyectos</b></h1>
                <button className="bg-[#0085ff] hover:bg-[#0084ffbd] text-white font-bold px-5 rounded-full transition-colors">Ver todos</button>
            </div>
            <div className="flex flex-wrap gap-5 w-full">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
            <div className="flex flex-wrap gap-3">
            <button className="bg-[#f2f4f7] hover:bg-[#0085ff] text-black hover:text-white font-normal px-5 py-2 rounded-full transition-colors">HTML</button>
            <button className="bg-[#f2f4f7] hover:bg-[#0085ff] text-black hover:text-white font-normal px-5 py-2 rounded-full transition-colors">CSS</button>
            <button className="bg-[#f2f4f7] hover:bg-[#0085ff] text-black hover:text-white font-normal px-5 py-2 rounded-full transition-colors">JavaScript</button>

            </div>
        </div>
    )
}