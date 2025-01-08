import { useEffect, useMemo, useState } from "react";
import { ProjectType } from "../../types";
import Project from "./Project";
import SkeletonProject from "./SkeletonProject";
import Skills from "./Skills";
import { getClass } from "../../constants/THEME";
import { ProjectsLang } from "../../types";
import HighlightText from "../../utils/texts";

export default function Projects({ darkMode = true, lang }: { darkMode: boolean, lang: ProjectsLang }) {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 4;
  const [filters, setFilters] = useState<Array<string>>([]);
  const [activeFilters, setActiveFilters] = useState<Array<number>>([]);
  const [findFilters, setFindFilters] = useState<Array<string>>([]);
  const [projects, setProjects] = useState<Array<ProjectType>>([]);
  const [paginatedProjects, setPaginatedProjects] = useState<Array<ProjectType[]>>([]);

  // Filtrar proyectos según el índice y filtro seleccionado
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

  // Paginar proyectos
  function paginateProjects(projectsList: Array<ProjectType>) {
    return Array.from(
      { length: Math.ceil(projectsList.length / itemsPerPage) },
      (_, index) =>
        projectsList.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
    );
  }

  // Obtener filtros únicos de los proyectos
  const uniqueFilters = useMemo(() => {
    const findedFilters = new Set<string>();
    lang.portfolio.forEach((project) => {
      project.tags.forEach((filter) => findedFilters.add(filter));
    });
    return [...findedFilters];
  }, [lang.portfolio]);

  // Limpiar filtros
  function clearFilters() {
    setFindFilters([]);
    setActiveFilters([]);
    const paginated = paginateProjects(lang.portfolio);
    setPaginatedProjects(paginated);
    setProjects(paginated[0] || []);
    setPage(1);
  }

  // Actualizar filtros únicos
  useEffect(() => {
    setFilters(uniqueFilters);
  }, [uniqueFilters]);

  // Aplicar filtros y paginar proyectos
  useEffect(() => {
    const filteredProjects = findFilters.length === 0
      ? lang.portfolio
      : lang.portfolio.filter((project) =>
          findFilters.every((filter) =>
            project.tags.map(tag => tag.toLowerCase().trim()).includes(filter.toLowerCase().trim())
          )
        );

    const paginated = paginateProjects(filteredProjects);
    setPaginatedProjects(paginated);
    setProjects(paginated[0] || []);
  }, [findFilters, lang.portfolio]);

  // Actualizar proyectos al cambiar de página
  useEffect(() => {
    if (paginatedProjects.length > 0) {
      setProjects(paginatedProjects[page - 1] || []);
    }
  }, [page, paginatedProjects]);

  return (
    <section className={getClass(darkMode, "background") + getClass(darkMode, "text") + "flex flex-col items-center h-auto xl:w-full"}>
      <div className="flex flex-row xsm:justify-center md:justify-between gap-5 xl:w-full">
        <h1 className="xsm:text-2xl md:text-4xl xl:text-5xl font-bold leading-tight">
          <HighlightText text={lang.title.text} boldWords={lang.title.boldWords} withClass />
        </h1>
        <button onClick={clearFilters} className="bg-[#0085ff] hover:bg-[#0084ffbd] text-white font-bold xsm:w-[200px] xl:w-auto xl:px-5 rounded-full transition-colors">
          {lang.viewAll}
        </button>
      </div>
      <div className="flex flex-wrap xsm:items-center xsm:justify-center gap-5 w-full mt-10">
        {projects.map((project, index) => (
          <Project
            key={index}
            tittle={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
            darkMode={darkMode}
            lang={lang}
          />
        ))}
        {Array.from({ length: itemsPerPage - projects.length }).map(
          (_, index) => (
            <SkeletonProject darkMode={darkMode} key={index} />
          )
        )}
        <div className="flex items-center justify-center gap-2 w-full mt-2 transition-all">
          {[...Array(paginatedProjects.length)].map((_, index) => (
            <div
              key={index}
              onClick={() => setPage(index + 1)}
              className={
                page === index + 1
                  ? "transition-all bg-[#0085ff] w-10 h-3 rounded-full cursor-pointer"
                  : (darkMode ? " bg-[#292929] " : " bg-[#dedede] ") + " size-3 rounded-full cursor-pointer"
              }
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap xsm:justify-center gap-3 mt-5">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => filterProjects(index, filter)}
            className={
              activeFilters.includes(index)
                ? getClass(darkMode, "filter") + "transition-all py-2 px-5 rounded-full"
                : getClass(darkMode, "filterOnHover") + "hover:scale-110 transition-all py-2 px-5 rounded-full"
            }>
            {filter}
          </button>
        ))}
      </div>
      <Skills darkMode={darkMode} lang={lang} />
    </section>
  );
}
