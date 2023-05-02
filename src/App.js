// import "./App.css";
import React from "react";
import AboutMe from "./components/Section/AboutMe";
import Projects from "./components/Section/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Section/Resume";
import Contact from "./components/Section/Contact";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/React-Portfolio" element={<AboutMe />} />
        <Route exact path="/aboutme" element={<AboutMe />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contactme" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    // <>
    //   <AboutMe foo="hello world" />
    //   {/* AboutMe({foo:"hello world"}) */}
    //   <Projects />
    // </>
  );
}

export default App;
