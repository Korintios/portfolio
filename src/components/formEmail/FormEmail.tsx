import { useState } from "react";
import EmailForm from "../../assets/icons/EmailForm";
import { getClass } from "../../constants/THEME";
import "./FormEmail.style.css";
import { FormEmailLang } from "../../types";
import HighlightText from "../../utils/texts";

export default function FormEmail({darkMode = true, lang}: {darkMode: boolean, lang: FormEmailLang}) {

	const [email, setEmail] = useState<string>("");

	return (
		<section className={getClass(darkMode, "background") + "flex flex-col items-center justify-center h-[50vh] gap-6"}>
			<div className={getClass(darkMode, "text") + "flex flex-col items-center justify-center gap-5"}>
				<h1 className="xsm:text-4xl xl:text-6xl font-bold text-center xl:w-[900px]"><HighlightText text={lang.title} boldWords={lang.boldWords} withClass/></h1>
			</div>
			<div className={getClass(darkMode, "formBorder") + "flex items-center gap-3 justify-between xl:w-[900px] xsm:h-[70px] xl:h-[100px] px-4 rounded-full"}>
				<div className={getClass(darkMode, "backgroundSocials") + "flex items-center justify-center xsm:size-8 xl:size-16 rounded-full text-blue-500"}>
					<EmailForm />
				</div>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder={lang.emailPlaceholder}
					className={getClass(darkMode, "text") + "xl:text-xl outline-none flex-1 bg-transparent"}
				/>
				<a href="mailto:juanvergaram@outlook.com" className="xsm:text-xs md:text-[15px] flex items-center justify-center xsm:size-10 xl:size-16 font-semibold rounded-full bg-[#0085ff] hover:bg-[#0084ffbd] transition-colors text-white">
					{lang.sendButtonLabel}
				</a>
			</div>
		</section>
	);
}
