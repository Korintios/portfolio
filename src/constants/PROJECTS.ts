export interface ProjectType {
    title: string;
    description: string;
    image?: string | undefined;
    link?: string;
    github: string;
    tags: string[];
}

type ProjectArrayType = Array<ProjectType>;

const PROJECTS: ProjectArrayType = [
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
]

export default PROJECTS