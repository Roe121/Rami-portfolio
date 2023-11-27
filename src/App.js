
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import Hero from './Components/Hero';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/hero">Accueil</Link>
          </li>
          <li>
            <Link to="/apropos">À propos</Link>
          </li>
          <li>
            <Link to="/projets">Projets</Link>
          </li>
          <li>
            <Link to="/contact">Contactez Moi</Link>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route path="/hero"  component={Hero} />
      <Route path="/apropos"  component={AboutMe} />
      <Route path="/projets"  component={Projects} />
      <Route path="/contact"  component={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
