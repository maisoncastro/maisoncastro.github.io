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
  return (
    <Router>
      <>
        <div className="app-containesr">
          <NavBar />
          <Header />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
