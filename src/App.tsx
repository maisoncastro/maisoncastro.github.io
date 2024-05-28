import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Lenis from "lenis";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <div className="content-container">
          <NavBar />
          <Header />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
