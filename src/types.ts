interface CardType {
    title: string;
    description: string;
    image?: string | undefined;
    tags: string[];
}
export interface ProjectType extends CardType {
    link?: string;
    github: string;
}

export interface StatisticsType {
    value: string;
    label: string;
}

export interface ServicesType extends CardType {
    statistics: {
        value: string;
        label: string;
    }[];
}

export interface EventsType {
    date: string;
    title: string;
    subtitle: string;
    description: string;
    type: 'university' | 'work';
}

export type ProjectArrayType = Array<ProjectType>;

export type badges = 'html' | 'css' | 'javascript' | 'react' | 'nodejs' | 'tailwindcss' | 'nextjs' | 'typescript' | 'sqlite' | 'prisma';