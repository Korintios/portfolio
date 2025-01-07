import { getClass } from "../../constants/THEME";
import { ComponentProps } from "../../types";

export default function Footer ({darkMode = true}: ComponentProps) {
    return (
        <div className={getClass(darkMode, "backgroundSocials") + getClass(darkMode, "text") + "flex xsm:flex-col xl:flex-row justify-between gap-6 px-5 py-6 rounded-t-lg"}>
            <p className="xsm:text-xs md:text-lg">Copyright© 2025 Juan Camilo V.M. All Rights Reserved.</p>
            <p className="xsm:text-xs md:text-lg">User Terms & Conditions | Privacy Policy</p>
        </div>
    )
}