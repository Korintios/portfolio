interface Testimonial {
    image: string;
    name: string;
    title: string;
    score: number;
    review: string;
}

const TESTIMONIALS: Array<Testimonial> = [
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

export default TESTIMONIALS;