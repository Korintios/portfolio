import { useState } from "react";
import LightPortfolio from "./components/Light";
import DarkPortfolio from "./components/Dark";
import Light from "./assets/icons/theme/Light";
import Dark from "./assets/icons/theme/Dark";

function App() {
  const [theme, setTheme] = useState("dark"); // Estado inicial: modo oscuro
  const [isAnimating, setIsAnimating] = useState(false); // Controla la animación

  const toggleTheme = () => {
    setIsAnimating(true); // Activa la animación
    setTimeout(() => {
      setTheme((prev) => (prev === "dark" ? "light" : "dark")); // Cambia el tema
      setIsAnimating(false); // Desactiva la animación
    }, 600); // Duración de la animación
  };

  return (
    <main className="h-screen overflow-x-hidden relative">
      {/* Contenido del tema */}
      {theme === "dark" ? <DarkPortfolio /> : <LightPortfolio />}

      {/* Botón para alternar el tema */}
      <button
        id="toggle-theme"
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
