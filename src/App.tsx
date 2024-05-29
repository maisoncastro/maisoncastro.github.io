import "./App.css";
import Lenis from "lenis";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect, useRef } from "react";

type ScrollToSection = (sectionId: string) => void;
function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.1,
    });

    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection: ScrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement && lenisRef.current) {
      lenisRef.current.scrollTo(sectionElement);
    }
  };

  return (
    <div className="app-container">
      <div className="content-container">
        <NavBar scrollToSection={scrollToSection} />
        <Header />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
