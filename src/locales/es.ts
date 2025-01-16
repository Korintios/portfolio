import EmailIcon from "../assets/icons/Email";
import PersonIcon from "../assets/icons/Person";
import PhoneIcon from "../assets/icons/Phone";
import LocationIcon from "../assets/icons/Places";
import GitHub from "../assets/icons/socials/Github";
import Linkedin from "../assets/icons/socials/Linkedin";
import University from "../assets/icons/University";
import Work from "../assets/icons/Work";
import { Lang } from "../types";

const ES: Lang = {
    "presentation": {
        "greeting": "¡Mucho gusto!",
        "nameHeader": "MI NOMBRE ES...",
        "fullName": "JUAN CAMILO V.M",
        "jobTitle": {
            "text": "Desarrollador Full Stack en Colombia",
            "boldWords": ["Desarrollador Full Stack", "Colombia"],
        },
        "downloadCVText": "Descargar CV",
        "experiences": [
            {
                "count": "3.0+",
                "description": "Años de experiencia...",
                "details": "Hola, soy Juan Camilo. Soy un desarrollador full stack con experiencia en diversas tecnologías, así como un diseñador UI/UX en proceso, enfocado en crear experiencias intuitivas y atractivas para los usuarios."
            },          
            {
                "count": "7",
                "description": "Clientes alrededor del mundo...",
                "details": "Casi dos años de experiencia me han permitido adquirir rápidamente las habilidades necesarias para atender las necesidades de mis clientes de manera efectiva."
            },
        ],
        "quote": "Una parte fundamental del aprendizaje radica en la disciplina de practicar todos los días",
        "contactInfo": [
            {
                "icon": PhoneIcon,
                "text": "+57 3147685292",
                "href": "https://wa.me/573147685292?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20que%20ofreces%2C%20Juan%20Camilo%20V.M.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"
            },
            {
                "icon": Linkedin,
                "text": "Juan Camilo V.M",
                "href": "https://www.linkedin.com/in/juan-camilo-vergara-marin-a50805263/"
            },
            {
                "icon": PersonIcon,
                "text": "21 Años"
            },
            {
                "icon": EmailIcon,
                "text": "juanvergaram@outlook.com",
                "href": "mailto:juanvergaram@outlook.com"
            },
            {
                "icon": GitHub,
                "text": "Korintios",
                "href": "https://github.com/Korintios"
            },
            {
                "icon": LocationIcon,
                "text": "Colombia, Cartagena"
            }
        ]
    },
    "aboutMe": {
        "title": {
            "text": "Un poco Sobre Mí",
            "boldWords": ["Sobre Mí"],
        },
        "description": {
            "text": "Desde pequeño, siempre me sentí atraído por los computadores y la tecnología, lo que marcó el inicio de mi camino en el desarrollo. Comencé aprendiendo HTML, CSS y PHP por recomendación externa de un profesional del tema que, a palabras de él, vio potencial en mí. Al ingresar a la universidad, descubrí mi pasión por este mundo. Ahí, aprendí Python y profundicé en Java, mientras que React y PHP se convirtieron en mis tecnologías principales. Cada proyecto que realizo refleja mi esfuerzo por mejorar y crear soluciones de calidad. Actualmente, me enfoco en perfeccionar mis habilidades y explorar UI/UX para complementar mi desarrollo profesional. Amo lo que hago y busco superarme cada día.",
            "boldWords": ["computadores","tecnología","HTML","CSS","PHP","vio potencial en mi","universidad","Java","React","calidad","UI/UX","Amo lo que hago","superarme cada día"],
        }
    },
    "timeline": {
        "title": "Mi Línea de Tiempo",
        "boldWords": ["Línea de Tiempo"],
        "events": [
            {
                date: "Febrero de 2021 — Noviembre de 2023",
                title: "FUNDACIÓN UNIVERSITARIA TECNOLÓGICO COMFENALCO",
                subtitle: "Tecnólogo de Sistemas",
                description: "Durante esta etapa, adquirí una sólida base en programación, comenzando con Python, donde desarrollé competencias fundamentales rápidamente. Posteriormente, exploré Java con un enfoque en programación orientada a objetos, profundizando en conceptos avanzados que cimentaron mis conocimientos en desarrollo de software.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #0085ff" },
                    icon: { backgroundColor: "#0085ff", color: "#fff" },
                },
                icon: University,
            },
            {
                date: "Agosto de 2022 — Octubre de 2023",
                title: "REDTIC & UNIÓN TEMPORAL PRO-FORTALECIMIENTO CTEL",
                subtitle: "Desarrollador Web",
                description: "Mi primera experiencia laboral como desarrollador en PHP me permitió aprender sobre liderazgo, organización y la gestión de proyectos a gran escala. Aunque al principio representó un desafío, logré dominar las herramientas y prácticas necesarias, alcanzando un nivel avanzado en la construcción de soluciones robustas.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #e4483a" },
                    icon: { backgroundColor: "#e4483a", color: "#fff" },
                },
                icon: Work,
            },
            {
                date: "Enero de 2024 — Marzo de 2024",
                title: "REDTIC & UNIÓN TEMPORAL PRO-FORTALECIMIENTO CTEL",
                subtitle: "Programador de Mantenimiento",
                description: "Regresé al equipo para trabajar como programador de mantenimiento en un proyecto previamente desarrollado. Durante este periodo, me enfoqué en garantizar el correcto funcionamiento y la optimización del sistema, logrando resultados satisfactorios y cumpliendo con las expectativas del equipo.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #e4483a" },
                    icon: { backgroundColor: "#e4483a", color: "#fff" },
                },
                icon: Work,
            },
            {
                date: "Julio de 2024 — Octubre de 2024",
                title: "Seisk Agencia de Publicidad",
                subtitle: "Desarrollador Web",
                description: "En Seisk Agencia trabajé en el desarrollo de una aplicación web utilizando PHP con CodeIgniter. Implementé herramientas como AJAX y jQuery para mejorar la interactividad y la experiencia del usuario. Además, diseñé y gestioné bases de datos optimizando su rendimiento, y documenté las funcionalidades de la aplicación para facilitar su mantenimiento.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #831f82" },
                    icon: { backgroundColor: "#831f82", color: "#fff" },
                },
                icon: Work,
            },
            {
                date: "Septiembre de 2024 — Actualmente",
                title: "Lumxis",
                subtitle: "Desarrollador Móvil",
                description: "Actualmente soy líder de frontend en Lumxis, desarrollando aplicaciones móviles con React Native y el framework Expo. Me enfoco en crear interfaces intuitivas y optimizar la experiencia del usuario en plataformas iOS y Android. También gestiono servicios en la nube para garantizar rendimiento y escalabilidad, mientras brindo soporte y mentoría a nuevos integrantes del equipo.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #126170" },
                    icon: { backgroundColor: "#126170", color: "#fff" },
                },
                icon: Work,
            },
            {
                date: "Febrero de 2024 — Actualmente",
                title: "FUNDACIÓN UNIVERSITARIA TECNOLÓGICO COMFENALCO",
                subtitle: "Ingeniero de Sistemas",
                description: "Actualmente, me enfoco en conceptos avanzados de programación y desarrollo de proyectos de calidad. Dedico mis esfuerzos a presentar soluciones innovadoras, demostrando compromiso y excelencia en cada entrega.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #0085ff" },
                    icon: { backgroundColor: "#0085ff", color: "#fff" },
                },
                icon: University,
            },
        ]
    },
    "whyHireMe": {
        "title": "¿Por que Deberias Contratarme?",
        "boldWords": ["Deberias Contratarme?"],
        "description": "Aprendo rápido, trabajo con precisión y priorizo la calidad en cada proyecto que desarrollo. Mi capacidad de liderazgo, organización y enfoque en los detalles asegura entregas impecables y puntuales.",
        "statistics": [
            { "value": "10+", "label": "Proyectos Completados" },
            { "value": "30%", "label": "Más rápido en la entrega" },
            { "value": "90%", "label": "Tasa de éxito" }
        ]
    },
    "projects": {
        "title": {
            "text": "Echale un ojo a mis Proyectos",
            "boldWords": ["Proyectos"],
        },
        "viewAll": "Ver Todos",
        "viewProject": "Ver Proyecto",
        "portfolio": [
            {
                title: 'Aplicacion de Peluqueria',
                description: 'Aplicacion de peluqueria para gestionar citas, clientes, servicios y productos.',
                image: 'images/projects/hairsalon.jpg',
                link: 'https://hair-salon-app.onrender.com',
                github: 'https://github.com/Korintios/hair_salon-app',
                tags: ['CSS','TailwindCSS','JavaScript','NodeJS','Prisma','React','NextJS','SQLite']
            },
            {
                title: 'Proyecto Math',
                description: 'Proyecto de matematicas para resolver problemas matematicos.',
                image: 'images/projects/math.jpg',
                link: 'https://project-math-one.vercel.app/',
                github: 'https://github.com/Korintios/project-math',
                tags: ['CSS','TailwindCSS','JavaScript','NodeJS','React','NextJS']
            },
            {
                title: 'EasyferrumJS',
                description: 'Libreria de JavaScript para obtener datos de la aplicacion universitaria de la universidad comfenalco.',
                image: 'images/projects/easyferrumjs.jpg',
                github: 'https://github.com/Korintios/easyferrumjs',
                tags: ['JavaScript','NodeJS']
            },
            {
                title: 'MiLogin',
                description: 'Plugin de Minecraft enfocado a la seguridad al momento de autenticarse en los servidores',
                image: 'images/projects/milogin.jpg',
                github: 'https://github.com/Korintios/milogin',
                tags: ['Java']
            },
            {
                title: 'Aplicacion de Bingo',
                description: 'Aplicacion de bingo para crear tus propios cartones personalizados y imprimirlos.',
                image: 'images/projects/bingo.jpg',
                link: 'https://bingo-app-theta.vercel.app/',
                github: 'https://github.com/Korintios/bingo-app',
                tags: ['CSS','TailwindCSS','TypeScript','NodeJS','React','NextJS']
            },
            {
                title: 'Aplicacion de Tareas',
                description: 'Aplicacion de tareas para gestionar tus tareas pendientes.',
                image: 'images/projects/todo.jpg',
                link: 'https://korintios.github.io/todo-app/',
                github: 'https://github.com/Korintios/todo-app',
                tags: ['HTML','CSS','JavaScript']
            }
        ],
        "skills": {
            "text": "Mis Habilidades",
            "boldWords": ["Habilidades"],
        }
    },
    "testimonials": {
        "title": "Testimonios sobre Mis Resultados",
        "boldWords": ["Mis Resultados"],
        "description": "Mis testimonios no son solo palabras; son el reflejo genuino de la pasión, calidad y dedicación que pongo en cada proyecto. Cada opinión compartida por mis clientes es una prueba del compromiso y el esfuerzo que entrego para superar expectativas. Ellos confiaron en mí y, con sus historias, muestran cómo mi trabajo transformó sus ideas en resultados reales. Desde soluciones creativas hasta un servicio personalizado, sus experiencias son mi mejor carta de presentación.",
        "videoError": "Tu navegador no soporta la etiqueta de video.",
        "reviews": [
            {
                image: 'images/reviews/redtic.jpg',
                name: 'REDTIC',
                title: 'Empresa',
                score: 5,
                review: 'Trabajar con Juan Camilo ha sido una experiencia invaluable. Su enfoque en la calidad y su habilidad para entregar soluciones rápidas y efectivas son incomparables. Durante su tiempo con nosotros en REDTIC, demostró un profundo compromiso con el desarrollo de módulos y la implementación de servidores, siempre asegurándose de cumplir con los más altos estándares técnicos y prácticos'
            },
            {
                image: 'images/reviews/seisk.jpg',
                name: 'Seisk',
                title: 'Agencia de Publicidad',
                score: 5,
                review: 'En Seisk, su capacidad para gestionar bases de datos y documentar procesos de manera precisa fue clave para el éxito de nuestros proyectos. Siempre priorizó la comodidad del cliente y las necesidades de la empresa, adaptándose rápidamente a cualquier reto.'
            }
        ]
    },
    "formEmail": {
        "title": "¿Tienes una idea de proyecto increíble? Hablemos",
        "boldWords": ["Hablemos"],
        "emailPlaceholder": "Ingresa tu Correo Electrónico",
        "sendButtonLabel": "Enviar"
    },
    "footer": {
        "copyrightText": "Copyright© 2025 Juan Camilo V.M. Todos los derechos reservados.",
        "termsText": "Términos y Condiciones | Política de Privacidad"
    }
};

export default ES;
