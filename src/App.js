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
      <nav className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          >
          <p>LOGO</p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
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
