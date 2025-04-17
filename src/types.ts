export interface ProjectType {
    title: string;
    description: string;
    image?: string | undefined;
    link?: string;
    github: string;
    tags: string[];
}

export type ProjectArrayType = Array<ProjectType>;

export type badges = 'html' | 'css' | 'javascript' | 'react' | 'nodejs' | 'tailwindcss' | 'nextjs' | 'typescript' | 'sqlite' | 'prisma';