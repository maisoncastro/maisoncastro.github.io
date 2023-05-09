// import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";

import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

// Components

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  // const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   if (scrollContainerRef.current) {
  //     const scroll = new LocomotiveScroll({
  //       el: scrollContainerRef.current,
  //       smooth: true,
  //     });

  //     return () => {
  //       if (scroll) {
  //         scroll.destroy();
  //       }
  //     };
  //   }
  // }, []);

  return (
    <Router>
      <>
        <div
          className="app-container"
          // data-scroll-container
          // ref={scrollContainerRef}
        >
          <div className="content-container">
            <NavBar />
            <Header />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
