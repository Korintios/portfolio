import { getClass } from "../../constants/THEME";

export default function SkeletonProject({darkMode = true}: {darkMode: boolean}) {
    return (
        <div className={getClass(darkMode, "skeletonBackground") + "flex xsm:flex-col xl:flex-row justify-between xsm:h-[608px] xsm:w-[358px] xl:w-[758px] xl:h-[335px] xsm:pl-0 xl:pl-8 pl-8 rounded-lg"}>
			<div className="flex flex-col justify-center h-full gap-5 xsm:px-8 xl:px-0">
                <h1 className={getClass(darkMode, "skeletonBackgroundSecondary") + "text-transparent text-3xl font-semibold w-[300px] rounded-lg animate-pulse"}>Aplicacion</h1>
                <p className={getClass(darkMode, "skeletonBackgroundSecondary") + "text-transparent pr-5 w-[300px] rounded-lg animate-pulse"}>Aplicacion de bingo para crear tus propios cartones personalizados y imprimirlos.</p>
                <div className="flex flex-row items-center gap-2">
                    <div className={getClass(darkMode, "skeletonBackgroundSecondary") + "text-transparent animate-pulse py-2 px-5 rounded-full"}>Proximamente...</div>
                    <div className={getClass(darkMode, "skeletonBackgroundSecondary") + "flex items-center justify-center animate-pulse rounded-full size-[42px]"}></div>
                </div>
            </div>
            <div className={getClass(darkMode, "skeletonBackgroundSecondary") + "xsm:w-[358px] xsm:h-[316.5px] xl:h-[335px] xl:w-[316.5px] xsm:rounded-b-lg xl:rounded-e-lg animate-pulse"}/>
        </div>
    );
}