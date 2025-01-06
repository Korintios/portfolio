interface Testimonial {
    image: string;
    name: string;
    title: string;
    score: number;
    review: string;
}

const TESTIMONIALS: Array<Testimonial> = [
    {
        image: 'images/me.jpeg',
        name: 'Juan Camilo V.M',
        title: 'Web Developer',
        score: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, ligula eget sagittis suscipit, mi massa fermentum justo, nec tincidunt felis'
    },
    {
        image: 'images/me.jpeg',
        name: 'Juan Camilo V.M',
        title: 'Web Developer',
        score: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, ligula eget sagittis suscipit, mi massa fermentum justo, nec tincidunt felis'
    },
    {
        image: 'images/me.jpeg',
        name: 'Juan Camilo V.M',
        title: 'Web Developer',
        score: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, ligula eget sagittis suscipit, mi massa fermentum justo, nec tincidunt felis'
    }
]

export default TESTIMONIALS;