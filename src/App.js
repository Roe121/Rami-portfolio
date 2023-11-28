import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Hero from "./Components/Hero/Hero";
import { NavBarData } from "./Data";

function App() {
  return (
    <Router>
      <nav className="bg-white shadow flex items-center justify-center px-32 mx-auto">
        <div className="logo">
          <span>LOGO</span>
        </div>

        <ul className="container flex items-center justify-center p-6 mx-auto nav">
          {NavBarData.map((item) => {
            return (
              <li>
                <Link className="hover:text-blue-800" to={item.link}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <button>Telecharger le CV</button>
      </nav>


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
