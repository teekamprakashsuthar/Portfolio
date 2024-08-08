import React, { useState } from "react";
import pic from "../../src/assets/nav-img.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-blue-200 shadow-md">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Logo" />
          <div>
            <h1 className="text-xl font-semibold cursor-pointer">
              Teeka<span className="text-green-600 text-2xl">m</span>
            </h1>
            <p className="text-sm">Front-end Developer</p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ id, text }) => (
            <Link
              key={id}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="text-green-600"
              className="hover:text-green-600 cursor-pointer transition-colors"
            >
              {text}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenu(!menu)} className="text-2xl">
            {menu ? <AiTwotoneCloseCircle /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col items-center justify-center space-y-4 py-8 text-xl">
            {navItems.map(({ id, text }) => (
              <li key={id}>
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenu(false)}
                  className="hover:text-green-600 cursor-pointer transition-colors"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
