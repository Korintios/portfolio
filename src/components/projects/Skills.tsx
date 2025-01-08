import { useEffect, useState } from "react";
import { ProjectsLang } from "../../types";
import HighlightText from "../../utils/texts";

export default function Skills({darkMode = true, lang}: {darkMode: boolean, lang: ProjectsLang}) {

    const [image, setImage] = useState<string>("");

    useEffect(() => {
        setImage("images/" + (darkMode ? "skillsdark.png" : "skillslight.png"));
    }, [darkMode]);

    return (
        <div className="flex flex-col items-center justify-center gap-5 pt-10 py-10">
            <h1 className="xsm:text-4xl xl:text-6xl font-bold"><HighlightText text={lang.skills.text} boldWords={lang.skills.boldWords} withClass/></h1>
            <img src={image} alt="My Skills" />
        </div>
    )
}