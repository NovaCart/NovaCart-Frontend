import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiUser, FiHeart, FiSettings, FiList } from "react-icons/fi";

function HomeNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/gallery", label: "Gallery" },
    { path: "/men", label: "Men" },
    { path: "/women", label: "Women" },
    {
      path: "/signUp",
      label: (
        <span className="bg-green-700 px-4 py-2 rounded text-gray-200">
          Sign Up
        </span>
      ),
    },
  ];

  const dropDownMenu = [
    {
      path: "/wishlist",
      label: "WishList",
      icon: <FiHeart className="mr-2" />,
    },
    {
      path: "/settings",
      label: "Manage Profile",
      icon: <FiSettings className="mr-2" />,
    },
    { path: "/history", label: "History", icon: <FiList className="mr-2" /> },
  ];

  return (
    <div className="flex justify-between items-center bg-black py-5 md:pl-24 pl-1">
      <div className="text-green-800 font-thin font-serif md:text-5xl text-3xl pl-24">
        <div className="flex flex-row">
          <img src="/images/logo1.png" className="w-12 h-12" />
          <Link to="/home">NovaCart</Link>
        </div>
      </div>

      <div className="md:hidden pr-6">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FiMenu className="w-6 h-6 text-gray-100" />
        </button>
      </div>

      <div
        className={`absolute md:top-0 top-16 right-16 ${
          isMenuOpen ? "flex" : "hidden"
        } md:relative md:flex flex-col md:flex-row items-center md:items-center md:pr-8 md:bg-transparent bg-gray-100 rounded p-4`}
      >
        <ul className="flex md:flex-row flex-col md:space-x-10 space-y-4 md:space-y-0 text-gray-100 md:text-gray-100">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : "text-gray-400"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          <li className="relative">
            <button
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              className="flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-800"
            >
              <FiUser className="h-6 w-6 text-gray-400 transition duration-300 ease-in-out transform " />
            </button>
            {isUserDropdownOpen && (
              <ul className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-100 rounded shadow-lg p-4 space-y-2 px-4 w-48">
                {dropDownMenu.map((menu, index) => (
                  <li
                    key={index}
                    className="hover:bg-gray-200 transition duration-150 ease-in-out block px-2 py-1"
                  >
                    <NavLink
                      to={menu.path}
                      onClick={() => setIsUserDropdownOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "text-green-600 font-bold"
                          : "text-gray-500 hover:text-gray-600"
                      }
                    >
                      <div className="flex items-center">
                        {menu.icon}
                        <span className="ml-2">{menu.label}</span>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeNavBar;
