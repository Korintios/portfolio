export default function SkeletonProject() {
    return (
        <div className="flex flex-row justify-between bg-[#f2f4f7] w-[758px] h-[335px] pl-8 rounded-lg">
			<div className="flex flex-col justify-center h-full gap-5">
                <h1 className="bg-[#e8e8e9] text-transparent text-3xl font-semibold w-[300px] rounded-lg animate-pulse">Aplicacion</h1>
                <p className="bg-[#e8e8e9] text-transparent pr-5 w-[300px] rounded-lg animate-pulse">Aplicacion de bingo para crear tus propios cartones personalizados y imprimirlos.</p>
                <div className="flex flex-row items-center gap-2">
                    <div className="bg-[#e8e8e9] text-transparent border animate-pulse py-2 px-5 rounded-full">Proximamente...</div>
                    <div className="bg-[#e8e8e9] flex items-center justify-center animate-pulse rounded-full size-[42px]"></div>
                </div>
            </div>
            <div className="bg-[#e8e8e9] w-[316.5px] h-[335px] rounded-r-lg rounded-e-lg animate-pulse"/>
        </div>
    );
}