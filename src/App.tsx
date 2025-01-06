import Presentation from "./components/presentation/Presentation";
import AboutMe from "./components/aboutMe/AboutMe";
import Timeline from "./components/timeline/Timeline";
import WhyHire from "./components/whyHire/WhyHire";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import FormEmail from "./components/formEmail/FormEmail";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <main className="h-screen">
        <Presentation/>
        <AboutMe/>
        <Timeline/>
        <WhyHire/>
        <Projects/>
        <Testimonials/>
        <FormEmail/>
        <Footer/>
      </main>
  )
}

export default App
