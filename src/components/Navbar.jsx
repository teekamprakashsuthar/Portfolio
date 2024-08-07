import React, { useState } from "react";
import pic from "../../src/assets/nav-img.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import {Link} from "react-scroll"
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 1,
      text: "About",
    },
    {
      id: 1,
      text: "Projects",
    },
    {
      id: 1,
      text: "Skills",
    },
    {
      id: 1,
      text: "Contact",
    },
    
  ];
  return (
    <>
      <div className="max-w-screen-6xl conatiner mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0  bg-blue-200">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Teeka<span className="text-green-600 text-2xl">m</span>
              <p className="text-sm">Front-end Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  >{text}</Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? (
                <AiTwotoneCloseCircle size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
            </div>
          </div>
        </div>

        {/* mobile navbar*/}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                    <Link to={text}
                     onClick={() => setMenu(!menu)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  >{text}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
