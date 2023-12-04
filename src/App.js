import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      
      <NavBar/>
      <Hero />
      <Routes>
        <Route path="/hero" component={Hero} />
        <Route path="/apropos" component={AboutMe} />
        <Route path="/projets" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
