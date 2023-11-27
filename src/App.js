
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import Hero from './Components/Hero';
import NavBarData from './Data'

function App() {
  return (
    <Router>
      <nav className='flex justify-between px-40 '>
        <div className="text-3xl text-gray-700 font-bold mb-5">LOGO</div>
        <ul className="flex">
          
        {NavBarData.map((item)=>{
          return(
            <li>
              
            </li>
          )
        })}

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
