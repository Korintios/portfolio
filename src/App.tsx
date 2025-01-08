import { useState } from "react";
import Light from "./assets/icons/theme/Light";
import Dark from "./assets/icons/theme/Dark";
import Portfolio from "./components/Portfolio";
import spanishLang from "./locales/es";
import englishLang from "./locales/en";
import { Lang } from "./types";


function App() {
  const [lang, setLang] = useState<"es" | "en">("en");
  const [theme, setTheme] = useState("dark");
  const [isAnimating, setIsAnimating] = useState(false);

  const langList: { [key in "es" | "en"]: Lang } = {
    es: spanishLang,
    en: englishLang
  }

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }


  const toggleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      setIsAnimating(false);
    }, 600);
  };

  return (
    <main className="h-screen overflow-x-hidden relative">
      {/* Contenido del tema */}
      <Portfolio lang={langList[lang]} darkMode={theme === "dark" ? true: false} />

      {/* Botón para alternar el tema */}
      <button
        id="toggle-lang"
        onClick={toggleLang}
        className={(theme === "dark" ? "text-stone-700" : "text-gray-300") + " xsm:text-2xl xl:text-xl top-4 left-4 p-2 rounded font-bold"}
      >
            {lang.toUpperCase()}
      </button>

      <button
        id="toggle"
        onClick={toggleTheme}
        className={(theme === "dark" ? "text-stone-700" : "text-gray-300") + " top-4 right-4 p-2 rounded"}
      >
        					{theme === "dark" ? (<Light/>) : (<Dark/>)}
      </button>

      {/* Contenedor para la animación de la esfera */}
      {isAnimating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="sphere-animation"></div>
        </div>
      )}
    </main>
  );
}

export default App;
