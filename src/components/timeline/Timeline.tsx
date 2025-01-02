import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import University from '../../assets/icons/University';
import Work from '../../assets/icons/Work';

export default function Timeline() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col gap-5">
                <h1 className="text-6xl font-bold">Mi <b className="text-gradient-blue">Linea de Tiempo</b></h1>
                <VerticalTimeline lineColor="#f3f3f3">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: '#000', borderTop: '2px solid #0085ff' }}
                        date="Febrero de 2021 — Noviembre de 2023"
                        iconStyle={{ backgroundColor: '#0085ff', color: '#fff' }}
                        icon={<University />}
                    >
                        <h3 className="vertical-timeline-element-title font-medium">FUNDACION UNIVERSITARIA TECNOLOGICO COMFENALCO</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tecnologo de Sistemas</h4>
                        <p>Al inicio de mi carrera, aprendí principalmente sobre el lenguaje de programación Python, el cual dominé a un nivel básico de manera bastante rápida. Posteriormente, comenzamos a estudiar Java, enfocado en temas como la programación orientada a objetos, donde profundizamos aún más en estos conceptos.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: '#000', borderTop: '2px solid #e4483a' }}
                        date="Agosto de 2022 — Octubre de 2023"
                        iconStyle={{ backgroundColor: '#e4483a', color: '#fff' }}
                        icon={<Work />}
                    >
                        <h3 className="vertical-timeline-element-title font-medium"> REDTIC & UNION TEMPORAL PRO-FORTALECIMIENTO CTEL</h3>
                        <h4 className="vertical-timeline-element-subtitle">Desarrollador Web</h4>
                        <p>Mi primer trabajo fue como desarrollador en PHP, donde aprendí muchas cosas, como el buen liderazgo, la organización de proyectos y la construcción de proyectos a gran escala. No fue fácil de entender al principio, pero hoy en día lo manejo con gran soltura.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: '#000', borderTop: '2px solid #e4483a' }}
                        date="Enero de 2024 — Marzo de 2024"
                        iconStyle={{ backgroundColor: '#e4483a', color: '#fff' }}
                        icon={<Work />}
                    >
                        <h3 className="vertical-timeline-element-title font-medium"> REDTIC & UNION TEMPORAL PRO-FORTALECIMIENTO CTEL</h3>
                        <h4 className="vertical-timeline-element-subtitle">Programador de Mantenimiento</h4>
                        <p>Después de un tiempo, volví a trabajar como programador de mantenimiento en el mismo proyecto que habíamos desarrollado anteriormente. Durante la mayor parte de mi tiempo en esa posición, todo salió tal como se esperaba.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: '#000', borderTop: '2px solid #831f82' }}
                        date="Julio de 2024 — Octubre de 2024"
                        iconStyle={{ backgroundColor: '#831f82', color: '#fff' }}
                        icon={<Work />}
                    >
                        <h3 className="vertical-timeline-element-title font-medium">Seisk Agencia de Publicidad</h3>
                        <h4 className="vertical-timeline-element-subtitle">Desarrollador Web</h4>
                        <p>Trabajé en Seisk Agencia desarrollando una aplicacion web en PHP con CodeIgniter. Incorporé herramientas como AJAX y jQuery para mejorar la interactividad y la experiencia del usuario. También gestioné y diseñé bases de datos, asegurando una estructura óptima y un rendimiento eficiente. Además, documenté las aplicaciones, detallando funcionalidades y manuales de usuario para facilitar su mantenimiento.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: '#000', borderTop: '2px solid #126170' }}
                        date="Septiembre de 2024 — Actualmente"
                        iconStyle={{ backgroundColor: '#126170', color: '#fff' }}
                        icon={<Work />}
                    >
                        <h3 className="vertical-timeline-element-title font-medium">Lumxis</h3>
                        <h4 className="vertical-timeline-element-subtitle">Desarrollador Movil</h4>
                        <p>Me encuentro trabajando en una empresa llamada Lumxis como líder de frontend, donde desarrollo aplicaciones móviles utilizando React Native y el framework Expo. Me enfoco en garantizar un diseño intuitivo y una experiencia de usuario fluida en plataformas iOS y Android. También gestiono servicios en la nube para optimizar el rendimiento y la escalabilidad de las aplicaciones. Además, ofrezco guía y orientación a principiantes, apoyándolos con recursos para facilitar su incorporación en el equipo.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: '#000', borderTop: '2px solid #0085ff' }}
                        date="Febrero de 2024 — Actualmente"
                        iconStyle={{ backgroundColor: '#0085ff', color: '#fff' }}
                        icon={<University />}
                    >
                        <h3 className="vertical-timeline-element-title font-medium">FUNDACION UNIVERSITARIA TECNOLOGICO COMFENALCO</h3>
                        <h4 className="vertical-timeline-element-subtitle">Ingeniero de Sistemas</h4>
                        <p>Al iniciar mi carrera profesional, comenzamos a enfocarnos más en conceptos avanzados de la programación, dejando un poco de lado los fundamentos. Me concentré en presentar proyectos en los que podía demostrar mi esfuerzo y asegurarme de que tuvieran una buena calidad.</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}