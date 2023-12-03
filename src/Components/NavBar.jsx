import React, { useState } from "react";
import { NavBarData } from "../Data";
import logo from "../logop.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState("Accueil");
  return (
    <nav className="w-full flex justify-between items-center mx-auto bg-white max-w-full px-20 py-1 shadow ">
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className=" w-[70px] h-[45px] object-contain"
        />
      </Link>

      <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
        {NavBarData.map((item) => {
          return (
            <li>
              <Link
                className={`${
                active === item.name ? 'text-gray-500' : ''
              } hover:text-gray-500 text-xl font-mova nav-links `}
                to={item.link}
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
