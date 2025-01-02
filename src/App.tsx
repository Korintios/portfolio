import Presentation from "./components/presentation/Presentation";
import AboutMe from "./components/aboutMe/AboutMe";
import Timeline from "./components/timeline/Timeline";
import WhyHire from "./components/whyHire/WhyHire";
import Projects from "./components/projects/Projects";

function App() {
  return (
      <main className="h-screen">
        <Presentation/>
        <AboutMe/>
        <Timeline/>
        <WhyHire/>
        <Projects/>
      </main>
  )
}

export default App
