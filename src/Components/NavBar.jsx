import React, { useState  } from "react";
import { NavBarData } from "../Data";
import logo from "../logop.png";
import { Link } from "react-router-dom";

const NavBar = ({ refs }) => {
  const [active, setActive] = useState("Home");

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="w-full flex justify-between items-center mx-auto bg-white max-w-full px-20 py-1 shadow fixed z-10	 ">
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className=" w-[70px] h-[45px] object-contain"
        />
      </Link>

      <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
        {NavBarData.map((item) => {
          const ref = refs[item.refName];
          return (
            <li className="py-3">
              <Link
                className={`${
                active === item.name ? 'text-gray-500' : ''
              } hover:text-gray-500 text-2xl font-mova nav-links  `}
                to="#"
                onClick={() => {
                  setActive(item.name);
                  handleScroll(ref);
                }}
                
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
