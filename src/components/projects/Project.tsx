import GitHub from "../../assets/icons/socials/Github";
import { getClass } from "../../constants/THEME";
import { ProjectsLang } from "../../types";
import "./Project.style.css";

export interface ProjectProps {
	tittle: string;
	description: string;
	image: string | undefined;
	link?: string;
	github: string;
	darkMode?: boolean | undefined;
	lang: ProjectsLang
}

export default function Project({
	tittle = "Project Name",
	description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque reprehenderit aliquam maxime odit quod rerum, in fugit expedita cupiditate fugiat praesentium at magnam repellat voluptatibus ea atque quia voluptate. Quod.",
	image = "",
	link = "",
	github = "",
	darkMode = true,
	lang
}: ProjectProps) {
	return (
		<div className={getClass(darkMode, "backgroundSocials") + "flex xsm:flex-col xl:flex-row xsm:h-[608px] xsm:w-[358px] md:w-[360px] xl:w-[608px] 2xl:w-[758px] xl:h-[335px] xsm:pl-0 xl:pl-8 rounded-lg portfolio-project"}>
			<div className="flex flex-col justify-center h-full gap-5 xsm:px-8 xl:px-0">
                <h1 className="text-3xl font-semibold">{tittle}</h1>
                <p className="pr-5">{description}</p>
                <div className="flex flex-row items-center gap-2">
				{link && <a href={link} target="_blank" className={getClass(darkMode, "border") + "border hover:border-transparent hover:bg-[#0386ff] hover:text-white transition-colors py-2 px-5 rounded-full"}>{lang.viewProject}</a>}
                    <a href={github} className={getClass(darkMode, "border") + "flex items-center justify-center border hover:border-transparent hover:bg-[#0386ff] hover:text-white transition-colors rounded-full size-[42px]"}><GitHub/></a>
                </div>
            </div>
            <img src={image} alt="" className="xsm:w-[358px] xsm:h-[316.5px] xl:h-[335px] xl:w-[316.5px] xsm:rounded-b-lg xl:rounded-e-lg opacity-50 portfolio-project-image transition-opacity"/>
		</div>
	);
}
