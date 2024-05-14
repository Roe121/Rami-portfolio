import React, { useRef } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/About/AboutMe";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <Router>
      
      <NavBar 
        refs={{ 
          hero: heroRef, 
          aboutMe: aboutMeRef, 
          projects: projectsRef, 
          contact: contactRef 
        }} 
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      
    </Router>
  );
}

export default App;
