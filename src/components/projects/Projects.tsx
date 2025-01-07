import { useEffect, useMemo, useState } from "react";
import { default as ALL_PROJECTS, ProjectType,} from "../../constants/PROJECTS";
import Project from "./Project";
import SkeletonProject from "./SkeletonProject";
import Skills from "./Skills";
import { ComponentProps } from "../../types";
import { getClass } from "../../constants/THEME";

export default function Projects({darkMode = true}: ComponentProps) {
	const [page, setPage] = useState<number>(1);
	const itemsPerPage = 4;
	const [filters, setFilters] = useState<Array<string>>([]);
    const [activeFilters, setActiveFilters] = useState<Array<number>>([]);
	const [findFilters, setFindFilters] = useState<Array<string>>([]);
	const [projects, setProjects] = useState<Array<ProjectType>>([]);
	const [paginatedProjects, setPaginatedProjects] = useState<Array<ProjectType[]>>([]);

	function filterProjects(index: number, filter: string) {
		setPage(1);
        setActiveFilters((prev) =>
            prev.includes(index)
                ? prev.filter((f) => f !== index)
                : [...prev, index]
        );

		setFindFilters((prev) =>
			prev.includes(filter)
				? prev.filter((f) => f !== filter)
				: [...prev, filter]
		);
	}

	function paginateProjects(projectsList: Array<ProjectType>) {
		const paginatedProjects = Array.from(
			{ length: Math.ceil(projectsList.length / itemsPerPage) },
			(_, index) =>
				projectsList.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
		);
        setPaginatedProjects(paginatedProjects);
		return paginatedProjects;
	}

	const uniqueFilters = useMemo(() => {
		const findedFilters = new Set<string>();
		ALL_PROJECTS.forEach((project) => {
			project.tags.forEach((filter) => findedFilters.add(filter));
		});
		return [...findedFilters];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ALL_PROJECTS]);

    function clearFilters() {
        setFindFilters([])
		setActiveFilters([])
        setPaginatedProjects(paginateProjects(ALL_PROJECTS))
        setProjects(paginateProjects(ALL_PROJECTS)[0])
        setPage(1)
    }

	useEffect(() => {
		setFilters(uniqueFilters);
	}, [uniqueFilters]);

	useEffect(() => {
		if (findFilters.length === 0) {
			setProjects(paginateProjects(ALL_PROJECTS)[page - 1]);
		} else {
			const filteredProjects: Array<ProjectType> = ALL_PROJECTS.filter(
				(project) =>
					findFilters.every((filter) => project.tags.includes(filter))
			);
			setProjects(filteredProjects.length === 0 ? [] : paginateProjects(filteredProjects)[page - 1]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [findFilters, ALL_PROJECTS]);

	useEffect(() => {
		if (activeFilters.length === 0) {
			setProjects(paginateProjects(ALL_PROJECTS)[page - 1]);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	return (
		<section className={getClass(darkMode,"background") + getClass(darkMode,"text") + "flex flex-col items-center h-auto xl:w-full"}>
			<div className="flex flex-row xsm:justify-center md:justify-between gap-5 xl:w-full">
				<h1 className="xsm:text-2xl md:text-4xl xl:text-5xl font-bold leading-tight">
					Echale un ojo a mis <b className="text-gradient-blue">Proyectos</b>
				</h1>
				<button onClick={() => clearFilters()} className="bg-[#0085ff] hover:bg-[#0084ffbd] text-white font-bold xsm:w-[200px] xl:w-auto xl:px-5 rounded-full transition-colors">
					Ver todos
				</button>
			</div>
			<div className="flex flex-wrap xsm:items-center xsm:justify-center gap-5 w-full mt-10">
				{projects.map((project, index) => {
					return (
						<Project
							key={index}
							tittle={project.title}
							description={project.description}
							image={project.image}
							link={project.link}
							github={project.github}
							darkMode={darkMode}
						/>
					);
				})}
				{Array.from({ length: itemsPerPage - projects.length }).map(
					(_, index) => (
						<SkeletonProject darkMode={darkMode} key={index} />
					)
				)}
				<div className="flex items-center justify-center gap-2 w-full mt-2 transition-all">
					{[...Array(paginatedProjects.length)].map((_, index) => {
						if (index === 0) {
							return (
								<div key={index} onClick={() => setPage(index + 1)} className={page === index + 1 ? "transition-all bg-[#0085ff] w-10 h-3 rounded-full cursor-pointer" : (darkMode ? " bg-[#292929] " : " bg-[#dedede] ") + " size-3 rounded-full cursor-pointer"}
								></div>
							);
						} else {
							return (
								<div key={index} onClick={() => setPage(index + 1)} className={page === index + 1 ? "transition-all bg-[#0085ff] w-10 h-3 rounded-full cursor-pointer" : (darkMode ? " bg-[#292929] " : " bg-[#dedede] ") + " size-3 rounded-full cursor-pointer"}></div>
							);
						}
					})}
				</div>
			</div>
			<div className="flex flex-wrap xsm:justify-center gap-3 mt-5">
				{[...filters].map((filter, index) => {
					return (
						<button 
                        key={index} 
                        onClick={() => filterProjects(index, filter)} 
                        className={
                            activeFilters.includes(index)
							? getClass(darkMode, "filter") + "transition-colors py-2 px-5 rounded-full"
							: getClass(darkMode, "filterOnHover") + "hover:scale-110 transition-all py-2 px-5 rounded-full"
                        }>
							{filter}
						</button>
					);
				})}
			</div>
			<Skills darkMode={darkMode}/>
		</section>
	);
}
