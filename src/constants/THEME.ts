export const THEME = {
    light: {
        background: 'bg-white',
        backgroundSocials: 'bg-[#F3F3F3]',
        text: 'text-[#344054]',
        filter: 'bg-[#0386ff] text-white',
        filterOnHover: 'bg-[#f2f4f7] hover:bg-[#0386ff] hover:text-white',
        border: 'border-black',
        skeletonBackground: 'bg-[#f2f4f7]',
        skeletonBackgroundSecondary: 'bg-[#e8e8e9]',
        formBorder: "border-2 border-[#f3f3f3]",
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
        skeletonBackground: 'bg-[#292929]',
        skeletonBackgroundSecondary: 'bg-[#414141]',
        formBorder: "border-2 border-[#292929]",
    },
}

export function getClass(dark: boolean, property: string) {
    return THEME[dark ? 'dark' : 'light'][property] + " ";
}