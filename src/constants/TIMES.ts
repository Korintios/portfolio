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
        title: "FUNDACION UNIVERSITARIA TECNOLOGICO COMFENALCO",
        subtitle: "Tecnologo de Sistemas",
        description: "Al inicio de mi carrera, aprendí principalmente sobre el lenguaje de programación Python, el cual dominé a un nivel básico de manera bastante rápida. Posteriormente, comenzamos a estudiar Java, enfocado en temas como la programación orientada a objetos, donde profundizamos aún más en estos conceptos.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #0085ff" },
        iconStyle: { backgroundColor: "#0085ff", color: "#fff" },
        icon: University,
    },
    {
        date: "Agosto de 2022 — Octubre de 2023",
        title: "REDTIC & UNION TEMPORAL PRO-FORTALECIMIENTO CTEL",
        subtitle: "Desarrollador Web",
        description: "Mi primer trabajo fue como desarrollador en PHP, donde aprendí muchas cosas, como el buen liderazgo, la organización de proyectos y la construcción de proyectos a gran escala. No fue fácil de entender al principio, pero hoy en día lo manejo con gran soltura.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #e4483a" },
        iconStyle: { backgroundColor: "#e4483a", color: "#fff" },
        icon: Work,
    },
    {
        date: "Enero de 2024 — Marzo de 2024",
        title: "REDTIC & UNION TEMPORAL PRO-FORTALECIMIENTO CTEL",
        subtitle: "Programador de Mantenimiento",
        description: "Después de un tiempo, volví a trabajar como programador de mantenimiento en el mismo proyecto que habíamos desarrollado anteriormente. Durante la mayor parte de mi tiempo en esa posición, todo salió tal como se esperaba.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #e4483a" },
        iconStyle: { backgroundColor: "#e4483a", color: "#fff" },
        icon: Work,
    },
    {
        date: "Julio de 2024 — Octubre de 2024",
        title: "Seisk Agencia de Publicidad",
        subtitle: "Desarrollador Web",
        description: "Trabajé en Seisk Agencia desarrollando una aplicacion web en PHP con CodeIgniter. Incorporé herramientas como AJAX y jQuery para mejorar la interactividad y la experiencia del usuario. También gestioné y diseñé bases de datos, asegurando una estructura óptima y un rendimiento eficiente. Además, documenté las aplicaciones, detallando funcionalidades y manuales de usuario para facilitar su mantenimiento.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #831f82" },
        iconStyle: { backgroundColor: "#831f82", color: "#fff" },
        icon: Work,
    },
    {
        date: "Septiembre de 2024 — Actualmente",
        title: "Lumxis",
        subtitle: "Desarrollador Movil",
        description: "Me encuentro trabajando en una empresa llamada Lumxis como líder de frontend, donde desarrollo aplicaciones móviles utilizando React Native y el framework Expo. Me enfoco en garantizar un diseño intuitivo y una experiencia de usuario fluida en plataformas iOS y Android. También gestiono servicios en la nube para optimizar el rendimiento y la escalabilidad de las aplicaciones. Además, ofrezco guía y orientación a principiantes, apoyándolos con recursos para facilitar su incorporación en el equipo.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #126170" },
        iconStyle: { backgroundColor: "#126170", color: "#fff" },
        icon: Work,
    },
    {
        date: "Febrero de 2024 — Actualmente",
        title: "FUNDACION UNIVERSITARIA TECNOLOGICO COMFENALCO",
        subtitle: "Ingeniero de Sistemas",
        description: "Actualmente a enfocarnos más en conceptos avanzados de la programación, dejando un poco de lado los fundamentos. Me concentré en presentar proyectos en los que podía demostrar mi esfuerzo y asegurarme de que tuvieran una buena calidad.",
        className: "vertical-timeline-element--work",
        contentStyle: { color: "#000", borderTop: "2px solid #0085ff" },
        iconStyle: { backgroundColor: "#0085ff", color: "#fff" },
        icon: University,
    },
];

export default TIMES;