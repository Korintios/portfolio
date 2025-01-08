import { getClass } from "../../constants/THEME";
import { FooterLang } from "../../types";

export default function Footer ({darkMode = true, lang}: {darkMode: boolean, lang: FooterLang}) {
    return (
        <div className={getClass(darkMode, "backgroundSocials") + getClass(darkMode, "text") + "flex xsm:flex-col xl:flex-row justify-between gap-6 px-5 py-6 rounded-t-lg"}>
            <p className="xsm:text-xs md:text-lg">{lang.copyrightText}</p>
            <p className="xsm:text-xs md:text-lg">{lang.termsText}</p>
        </div>
    )
}