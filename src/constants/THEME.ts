export const THEME = {
    light: {
        background: 'bg-white',
        backgroundSocials: 'bg-[#F3F3F3]',
        text: 'text-[#344054]',
        filter: 'bg-[#0386ff] text-white',
        filterOnHover: 'bg-[#f2f4f7] hover:bg-[#0386ff] hover:text-white',
        border: 'border-black',
    },
    dark: {
        background: 'bg-[#1e1e1e]',
        fill: 'fill-white',
        backgroundSocials: 'bg-[#292929]',
        shadowColor: 'shadow-gray-600',
        text: 'text-white',
        textSecondary: 'text-[#A0A0A0]',
        filter: 'bg-[#292929] text-[#000] border-none',
        filterOnHover: 'bg-[#292929] text-[#ccc] hover:bg-[#0386ff] hover:text-white',
        border: 'border-white',
    },
}

export function getClass(dark: boolean, property: string) {
    return THEME[dark ? 'dark' : 'light'][property] + " ";
}