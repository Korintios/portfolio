interface IconCardProps {
    icon: () => JSX.Element;
    color?: string;
    href?: string | undefined;
    isHover?: boolean;
    isPulse?: boolean;
}

export default function IconCard({icon, color = '#ccc', href = undefined, isHover = false, isPulse = false}: IconCardProps) {

    const IconComponent = icon

    return (
        <a href={href != undefined ? href : undefined} className={"size-[50px] xl:size-[77px] rounded-xl shadow-icon ring-2 ring-black flex items-center justify-center bg-gradient-to-b from-iconcard-gradient-start" + (isHover ? " cursor-pointer hover:from-iconcard-gradient-hover " : "") + " to-black"}>
            <div style={{color: color}} className={(isPulse ? "animate-pulse " : "") + "scale-75 xl:scale-100"}>
                <IconComponent/>
            </div>
        </a>
    )
}