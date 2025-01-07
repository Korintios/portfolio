import { ComponentProps } from "../../types";

export default function Skills({darkMode = true}: ComponentProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-5 pt-10 py-10">
            <h1 className="xsm:text-4xl xl:text-6xl font-bold">Mis <b className="text-gradient-blue">Habilidades</b></h1>
            <img src={"images/" + (darkMode ? "skillsdark.png" : "skillslight.png")} alt="My Skills" />
        </div>
    )
}