import University from "../assets/icons/University";
import Work from "../assets/icons/Work";

interface Time {
    date: string;
    title: string;
    subtitle: string;
    description: string;
    className: string;
    contentStyle: { color: string; borderTop: string };
    iconStyle: { backgroundColor: string; color: string };
    icon: () => JSX.Element;
}

const TIMES: Array<Time> = [
    {
        date: "Febrero de 2021 — Noviembre de 2023",
        title: "FUNDACIÓN UNIVERSITARIA TECNOLÓGICO COMFENALCO",
        subtitle: "Tecnólogo de Sistemas",
        description: "Durante esta etapa, adquirí una sólida base en programación, comenzando con Python, donde desarrollé competencias fundamentales rápidamente. Posteriormente, exploré Java con un enfoque en programación orientada a objetos, profundizando en conceptos avanzados que cimentaron mis conocimientos en desarrollo de software.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #0085ff" },
        iconStyle: { backgroundColor: "#0085ff", color: "#fff" },
        icon: University,
    },
    {
        date: "Agosto de 2022 — Octubre de 2023",
        title: "REDTIC & UNIÓN TEMPORAL PRO-FORTALECIMIENTO CTEL",
        subtitle: "Desarrollador Web",
        description: "Mi primera experiencia laboral como desarrollador en PHP me permitió aprender sobre liderazgo, organización y la gestión de proyectos a gran escala. Aunque al principio representó un desafío, logré dominar las herramientas y prácticas necesarias, alcanzando un nivel avanzado en la construcción de soluciones robustas.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #e4483a" },
        iconStyle: { backgroundColor: "#e4483a", color: "#fff" },
        icon: Work,
    },
    {
        date: "Enero de 2024 — Marzo de 2024",
        title: "REDTIC & UNIÓN TEMPORAL PRO-FORTALECIMIENTO CTEL",
        subtitle: "Programador de Mantenimiento",
        description: "Regresé al equipo para trabajar como programador de mantenimiento en un proyecto previamente desarrollado. Durante este periodo, me enfoqué en garantizar el correcto funcionamiento y la optimización del sistema, logrando resultados satisfactorios y cumpliendo con las expectativas del equipo.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #e4483a" },
        iconStyle: { backgroundColor: "#e4483a", color: "#fff" },
        icon: Work,
    },
    {
        date: "Julio de 2024 — Octubre de 2024",
        title: "Seisk Agencia de Publicidad",
        subtitle: "Desarrollador Web",
        description: "En Seisk Agencia trabajé en el desarrollo de una aplicación web utilizando PHP con CodeIgniter. Implementé herramientas como AJAX y jQuery para mejorar la interactividad y la experiencia del usuario. Además, diseñé y gestioné bases de datos optimizando su rendimiento, y documenté las funcionalidades de la aplicación para facilitar su mantenimiento.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #831f82" },
        iconStyle: { backgroundColor: "#831f82", color: "#fff" },
        icon: Work,
    },
    {
        date: "Septiembre de 2024 — Actualmente",
        title: "Lumxis",
        subtitle: "Desarrollador Móvil",
        description: "Actualmente soy líder de frontend en Lumxis, desarrollando aplicaciones móviles con React Native y el framework Expo. Me enfoco en crear interfaces intuitivas y optimizar la experiencia del usuario en plataformas iOS y Android. También gestiono servicios en la nube para garantizar rendimiento y escalabilidad, mientras brindo soporte y mentoría a nuevos integrantes del equipo.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #126170" },
        iconStyle: { backgroundColor: "#126170", color: "#fff" },
        icon: Work,
    },
    {
        date: "Febrero de 2024 — Actualmente",
        title: "FUNDACIÓN UNIVERSITARIA TECNOLÓGICO COMFENALCO",
        subtitle: "Ingeniero de Sistemas",
        description: "Actualmente, me enfoco en conceptos avanzados de programación y desarrollo de proyectos de calidad. Dedico mis esfuerzos a presentar soluciones innovadoras, demostrando compromiso y excelencia en cada entrega.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #0085ff" },
        iconStyle: { backgroundColor: "#0085ff", color: "#fff" },
        icon: University,
    },
];


export default TIMES;