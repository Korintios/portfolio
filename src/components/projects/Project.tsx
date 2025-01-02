import GitHub from "../../assets/icons/socials/Github";

interface ProjectProps {
	tittle?: string;
	description?: string;
	image?: string;
	link?: string;
	github?: string;
}

export default function Project({
	tittle = "Project Name",
	description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque reprehenderit aliquam maxime odit quod rerum, in fugit expedita cupiditate fugiat praesentium at magnam repellat voluptatibus ea atque quia voluptate. Quod.",
	image,
	link = "",
	github = "",
}: ProjectProps) {
	return (
		<div className="flex flex-row bg-[#f2f4f7] w-[758px] h-[335px] pl-8 rounded-s-lg">
			<div className="flex flex-col justify-center h-full gap-5">
                <h1 className="text-3xl font-semibold">{tittle}</h1>
                <p className="pr-5">{description}</p>
                <div className="flex flex-row items-center gap-2">
                    <a href={link} className="border border-black hover:border-transparent hover:bg-[#0386ff] hover:text-white transition-colors py-2 px-5 rounded-full">View Project</a>
                    <a href={github} className="flex items-center justify-center border border-black hover:border-transparent hover:bg-[#0386ff] hover:text-white transition-colors rounded-full size-[42px]"><GitHub/></a>
                </div>
            </div>
            <img src="images/computer.jpg" alt="" className="w-[316.5px] h-[335px] rounded-r-lg rounded-e-lg opacity-50"/>
		</div>
	);
}
