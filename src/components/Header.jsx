import React, { useState } from "react";
import {
  AiFillThunderbolt,
  AiOutlineCloseCircle,
  AiOutlineMenu,
} from "react-icons/ai";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex bg-gray-100 justify-between h-12 items-center px-8">
      {/* logo section  */}
      <Link to="/">
        <div className="flex items-center gap-2">
          <AiFillThunderbolt className="h-8 w-8 text-blue-500" />
          <span className="text-3xl font-bold">nextPage</span>
        </div>
      </Link>

      {/* nav item section  */}
      <div>
        <ul className="lg:flex hidden gap-5 cursor-pointer">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* mobile navbar section  */}
        <div className="lg:hidden">
          {/* drop down open button  */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <AiOutlineMenu></AiOutlineMenu>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <AiFillThunderbolt className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <AiOutlineCloseCircle className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/books"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
