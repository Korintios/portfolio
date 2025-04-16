import { useTranslation } from "react-i18next"

export default function AboutMe() {

    const { t } = useTranslation("aboutme")

    return (
        <section id="aboutme" className="p-10 xl:p-20 flex flex-col xl:flex-row gap-10 xl:gap-0 xl:items-center xl:justify-between min-h-screen">
            <div className="flex flex-col gap-5">
                <h1 className="uppercase text-white font-hubballi text-2xl md:text-5xl max-w-[610px]">{t('title')}</h1>
                <p className="xsm:w-full xl:w-[600px] 2xl:w-[750px] font-poppins md:text-2xl xl:text-2xl font-light leading-relaxed whitespace-normal text-info">
                    {t('description.paragraph1')}
                    <br/><br/>
                    {t('description.paragraph2')}
                </p>
            </div>
            <div className="flex flex-1 flex-wrap items-center justify-center xl:w-[700px] gap-5">
                <img src="images/me.jpeg" alt="me image" className="bg-background-image w-[262px] h-[388px] rounded-lg object-cover shadow-2xl"/>
                <div className="hidden 2xl:flex flex-col gap-5 xsm:mb-10 xl:mb-0 ">
                    <div /* src="#" alt="me image 2" */ className="bg-background-image w-[262px] h-[388px] rounded-lg object-cover shadow-2xl"/>
                    <div /* src="#" alt="me image 3" */ className="bg-background-image w-[262px] h-[388px] rounded-lg object-cover shadow-2xl"/>
                </div>
            </div>
        </section>
    )
}