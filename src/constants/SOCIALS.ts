import Email from "../assets/icons/Email";
import Person from "../assets/icons/Person";
import Phone from "../assets/icons/Phone";
import Places from "../assets/icons/Places";

interface SocialsProps {
    icon: () => JSX.Element;
    text: string;
}

const SOCIALS: SocialsProps[] = [
    {
        icon: Phone,
        text: "+57 3147685292"
    },
    {
        icon: Person,
        text: "21 Años"
    },
    {
        icon: Email,
        text: "juanvergaram@outlook.com"
    },
    {
        icon: Places,
        text: "Colombia, Cartagena"
    }
]

export default SOCIALS;