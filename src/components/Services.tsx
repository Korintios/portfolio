import { useTranslation } from "react-i18next"
import { ServicesType } from "../types";

export default function Services() {

    const { t } = useTranslation("services")

    const statisticsObjects = t("statistics", {returnObjects: true}) as Array<{value: string, label: string}>;
    const statisticsArray = Array.isArray(statisticsObjects) ? statisticsObjects : [];

    const servicesObjects = t("services", {returnObjects: true}) as Array<ServicesType>;
    const servicesArray = Array.isArray(servicesObjects) ? servicesObjects : [];

    return (
        <section className="min-h-screen p-10 xl:p-20 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
                <h1 className="text-white uppercase font-hubballi text-2xl md:text-5xl">{t('title')}</h1>
                <p className="text-info font-poppins text-sm font-light xl:text-2xl 2xl:text-3xl">
                    {t("description.paragraph1")}
                <br /><br />
                    {t("description.paragraph2")}
                </p>
                <div className="flex flex-row justify-between gap-5 text-white pr-100">
                    {statisticsArray.map((statistic, index) => (
                        <div key={index} className="flex flex-col">
                            <h1 className="font-poppins xsm:text-4xl xl:text-5xl font-medium">{statistic.value}</h1>
                            <span className="font-medium opacity-50">{statistic.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5 pb-10">
                {servicesArray.map((service, index) => (
                    <div key={index} className="flex flex-col xl:flex-row items-center justify-center gap-10 p-10 w-full sm:w-auto 2xl:w-[563px] 2xl:h-[255px] rounded-lg border border-info/50">
                        <img src={service.image} alt="frontend" className="size-40" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-white w-full text-center xl:text-left font-poppins text-2xl md:text-sm max-w-[610px]">{service.title}</h1>
                            <p className="text-info font-poppins text-sm font-light md:text-md text-center xl:text-left">{service.description}</p>
                            <div className="flex flex-wrap items-center xl:items-start justify-center xl:justify-start gap-2 pointer-events-none">
                                {service.tags.map((tag, index: number) => (
                                    <div
                                        key={index}
                                        className="bg-iconcard-gradient-hover text-white text-[12px] px-2 py-1 rounded-full"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}