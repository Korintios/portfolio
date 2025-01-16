export interface Lang {
    presentation: PresentationLang;
    aboutMe: AboutLang;
    timeline: TimelineLang;
    whyHireMe: WhyHireLang;
    projects: ProjectsLang;
    testimonials: TestimonialsLang;
    formEmail: FormEmailLang;
    footer: FooterLang;
}

export interface PresentationLang {
    greeting: string;
    nameHeader: string;
    fullName: string;
    jobTitle: {
        text: string;
        boldWords: string[];
    };
    downloadCVText: string;
    experiences: {
        count: string;
        description: string;
        details: string;
    }[];
    quote: string;
    contactInfo: {
        icon: () => JSX.Element;
        text: string;
        href?: string;
    }[];
}

export interface AboutLang {
    title: {
        text: string,
        boldWords: string[]
    }
    description: {
        text: string,
        boldWords: string[]
    }
}

export interface TimelineLang {
    title: string;
    boldWords: string[];
    events: {
        date: string;
        title: string;
        subtitle: string;
        description: string;
        styles: {
            content: { color: string; borderTop: string };
            icon: { backgroundColor: string; color: string };
        };
        icon: () => JSX.Element;
    }[];
}

export interface WhyHireLang {
    title: string;
    description: string;
    boldWords: string[];
    statistics: {
        value: string;
        label: string;
    }[];
}

export interface ProjectsLang {
    title: {
        text: string,
        boldWords: string[]
    };
    viewAll: string;
    viewProject: string;
    portfolio: {
        title: string;
        description: string;
        image: string;
        link?: string;
        github: string;
        tags: string[];
    }[];
    skills: {
        text: string,
        boldWords: string[]
    };
}

export interface TestimonialsLang {
    title: string;
    description: string;
    videoError: string;
    boldWords: string[];
    reviews: {
        image: string;
        name: string;
        title: string;
        score: number;
        review: string;
    }[];
}

export interface FormEmailLang {
    title: string;
    boldWords: string[];
    emailPlaceholder: string;
    sendButtonLabel: string;
}

export interface FooterLang {
    copyrightText: string,
    termsText: string
}

export interface ProjectType {
    title: string;
    description: string;
    image?: string | undefined;
    link?: string;
    github: string;
    tags: string[];
}

export type ProjectArrayType = Array<ProjectType>;

export interface SectionProps {
    darkMode?: boolean;
    lang: Lang;
}