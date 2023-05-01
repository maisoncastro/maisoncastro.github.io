import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Components

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Header />
      </>
    </Router>
  );
}

export default App;
