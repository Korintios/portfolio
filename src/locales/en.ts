import EmailIcon from "../assets/icons/Email";
import PersonIcon from "../assets/icons/Person";
import PhoneIcon from "../assets/icons/Phone";
import LocationIcon from "../assets/icons/Places";
import GitHub from "../assets/icons/socials/Github";
import Linkedin from "../assets/icons/socials/Linkedin";
import University from "../assets/icons/University";
import Work from "../assets/icons/Work";
import { Lang } from "../types";

const EN: Lang = {
    "presentation": {
        "greeting": "Nice to meet you!",
        "nameHeader": "MY NAME IS...",
        "fullName": "JUAN CAMILO V.M",
        "jobTitle": {
            "text": "Full Stack Developer in Colombia",
            "boldWords": ["Full Stack Developer", "Colombia"],
        },
        "downloadCVText": "Download CV",
        "experiences": [
            {
                "count": "3.0+",
                "description": "Years of experience...",
                "details": "Hello, I am Juan Camilo. I am a full-stack developer experienced in diverse technologies, as well as a UI/UX designer in progress, focused on creating intuitive and engaging user experiences."
            },          
            {
                "count": "7",
                "description": "Clients worldwide...",
                "details": "Nearly two years of experience have allowed me to quickly acquire the skills needed to effectively meet my clients' needs."
            },
        ],
        "quote": "A fundamental part of learning lies in the discipline of practicing every day",
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
                "text": "21 Years Old"
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
            "text": "A little About Me",
            "boldWords": ["About Me"],
        },
        "description": {
            "text": "Since childhood, I have always been drawn to computers and technology, which marked the beginning of my journey in development. I started learning HTML, CSS, and PHP at the suggestion of a professional who, in his words, saw potential in me. Upon entering university, I discovered my passion for this world. There, I learned Python and delved into Java, while React and PHP became my main technologies. Every project I undertake reflects my effort to improve and create quality solutions. I am currently focused on perfecting my skills and exploring UI/UX to complement my professional development. I love what I do and strive to improve every day.",
            "boldWords": ["computers", "technology", "HTML", "CSS", "PHP", "saw potential in me", "university", "Java", "React", "quality", "UI/UX", "I love what I do", "strive to improve every day"],
        }
    },
    "timeline": {
        "title": "My Timeline",
        "boldWords": ["Timeline"],
        "events": [
            {
                date: "February 2021 — November 2023",
                title: "FUNDACIÓN UNIVERSITARIA TECNOLÓGICO COMFENALCO",
                subtitle: "Systems Technologist",
                description: "During this stage, I acquired a solid foundation in programming, starting with Python, where I quickly developed fundamental competencies. Subsequently, I explored Java with a focus on object-oriented programming, delving into advanced concepts that cemented my knowledge in software development.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #0085ff" },
                    icon: { backgroundColor: "#0085ff", color: "#fff" },
                },
                icon: University,
            },
            {
                date: "August 2022 — October 2023",
                title: "REDTIC & UNIÓN TEMPORAL PRO-FORTALECIMIENTO CTEL",
                subtitle: "Web Developer",
                description: "My first work experience as a PHP developer allowed me to learn about leadership, organization, and large-scale project management. Although challenging at first, I mastered the necessary tools and practices, achieving an advanced level in building robust solutions.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #e4483a" },
                    icon: { backgroundColor: "#e4483a", color: "#fff" },
                },
                icon: Work,
            },
            {
                date: "January 2024 — March 2024",
                title: "REDTIC & UNIÓN TEMPORAL PRO-FORTALECIMIENTO CTEL",
                subtitle: "Maintenance Programmer",
                description: "I returned to the team to work as a maintenance programmer on a previously developed project. During this period, I focused on ensuring the system's proper functioning and optimization, achieving satisfactory results and meeting the team's expectations.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #e4483a" },
                    icon: { backgroundColor: "#e4483a", color: "#fff" },
                },
                icon: Work,
            },
            {
                date: "July 2024 — October 2024",
                title: "Seisk Advertising Agency",
                subtitle: "Web Developer",
                description: "At Seisk Agency, I worked on developing a web application using PHP with CodeIgniter. I implemented tools like AJAX and jQuery to enhance interactivity and user experience. Additionally, I designed and managed databases, optimizing their performance, and documented application functionalities to facilitate maintenance.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #831f82" },
                    icon: { backgroundColor: "#831f82", color: "#fff" },
                },
                icon: Work,
            },
            {
                date: "September 2024 — Present",
                title: "Lumxis",
                subtitle: "Mobile Developer",
                description: "Currently, I am a frontend leader at Lumxis, developing mobile applications with React Native and the Expo framework. I focus on creating intuitive interfaces and optimizing user experience on iOS and Android platforms. I also manage cloud services to ensure performance and scalability while providing support and mentoring to new team members.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #126170" },
                    icon: { backgroundColor: "#126170", color: "#fff" },
                },
                icon: Work,
            },
            {
                date: "February 2024 — Present",
                title: "FUNDACIÓN UNIVERSITARIA TECNOLÓGICO COMFENALCO",
                subtitle: "Systems Engineer",
                description: "Currently, I focus on advanced programming concepts and quality project development. I dedicate my efforts to presenting innovative solutions, demonstrating commitment and excellence in every delivery.",
                styles: {
                    content: { color: "#000", borderTop: "2px solid #0085ff" },
                    icon: { backgroundColor: "#0085ff", color: "#fff" },
                },
                icon: University,
            },
        ]
    },
    "whyHireMe": {
        "title": "Why Should You Hire Me?",
        "boldWords": ["Should You Hire Me?"],
        "description": "I learn quickly, work precisely, and prioritize quality in every project I develop. My leadership, organization, and attention to detail ensure flawless and punctual deliveries.",
        "statistics": [
            { "value": "10+", "label": "Projects Completed" },
            { "value": "30%", "label": "Faster Delivery" },
            { "value": "90%", "label": "Success Rate" }
        ]
    },
    "projects": {
        "title": {
            "text": "Take a Look at My Projects",
            "boldWords": ["Projects"],
        },
        "viewAll": "View All",
        "viewProject": "View Project",
        "portfolio": [
            {
                title: 'Hair Salon Application',
                description: 'A hair salon application for managing appointments, clients, services, and products.',
                image: 'images/projects/hairsalon.jpg',
                link: 'https://hair-salon-app.onrender.com',
                github: 'https://github.com/Korintios/hair_salon-app',
                tags: ['CSS', 'TailwindCSS', 'JavaScript', 'NodeJS', 'Prisma', 'React', 'NextJS', 'SQLite']
            },
            {
                title: 'Math Project',
                description: 'A mathematics project to solve mathematical problems.',
                image: 'images/projects/math.jpg',
                link: 'https://project-math-one.vercel.app/',
                github: 'https://github.com/Korintios/project-math',
                tags: ['CSS', 'TailwindCSS', 'JavaScript', 'NodeJS', 'React', 'NextJS']
            },
            {
                title: 'EasyferrumJS',
                description: 'JavaScript library for retrieving data from the university application of Comfenalco University.',
                image: 'images/projects/easyferrumjs.jpg',
                github: 'https://github.com/Korintios/easyferrumjs',
                tags: ['JavaScript', 'NodeJS']
            },
            {
                title: 'MiLogin',
                description: 'Minecraft plugin focused on authentication security for servers.',
                image: 'images/projects/milogin.jpg',
                github: 'https://github.com/Korintios/milogin',
                tags: ['Java']
            },
            {
                title: 'Bingo Application',
                description: 'A bingo application to create your personalized cards and print them.',
                image: 'images/projects/bingo.jpg',
                link: 'https://bingo-app-theta.vercel.app/',
                github: 'https://github.com/Korintios/bingo-app',
                tags: ['CSS', 'TailwindCSS', 'TypeScript', 'NodeJS', 'React', 'NextJS']
            },
            {
                title: 'Task Application',
                description: 'A task application to manage your pending tasks.',
                image: 'images/projects/todo.jpg',
                link: 'https://korintios.github.io/todo-app/',
                github: 'https://github.com/Korintios/todo-app',
                tags: ['HTML', 'CSS', 'JavaScript']
            }
        ],
        "skills": {
            "text": "My Skills",
            "boldWords": ["Skills"],
        }
    },
    "testimonials": {
        "title": "Testimonials About My Results",
        "boldWords": ["My Results"],
        "description": "My testimonials are not just words; they are the genuine reflection of the passion, quality, and dedication I put into every project. Each opinion shared by my clients is proof of the commitment and effort I deliver to exceed expectations. They trusted me, and their stories show how my work transformed their ideas into real results. From creative solutions to personalized service, their experiences are my best introduction.",
        "videoError": "Your browser does not support the video tag.",
        "reviews": [
            {
                image: 'images/reviews/redtic.jpg',
                name: 'REDTIC',
                title: 'Company',
                score: 5,
                review: 'Working with Juan Camilo has been an invaluable experience. His focus on quality and his ability to deliver quick and effective solutions are unmatched. During his time with us at REDTIC, he demonstrated a deep commitment to module development and server implementation, always ensuring the highest technical and practical standards.'
            },
            {
                image: 'images/reviews/seisk.jpg',
                name: 'Seisk',
                title: 'Advertising Agency',
                score: 5,
                review: 'At Seisk, his ability to manage databases and document processes accurately was key to the success of our projects. He always prioritized client comfort and company needs, quickly adapting to any challenge.'
            }
        ]
    },
    "formEmail": {
        "title": "Do you have an amazing project idea? Let’s talk",
        "boldWords": ["Let’s talk"],
        "emailPlaceholder": "Enter Your Email",
        "sendButtonLabel": "Send"
    },
    "footer": {
        "copyrightText": "Copyright© 2025 Juan Camilo V.M. All rights reserved.",
        "termsText": "Terms and Conditions | Privacy Policy"
    }
};

export default EN;
