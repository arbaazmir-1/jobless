import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
const Navbar = () => {
  const location = useLocation();
  let path = location.pathname;
  const [showMenu, setShowMenu] = useState(false);
  const history = useNavigate();

  //change the path to provided path
  const changePath = (path) => {
    setShowMenu(false);
    history(path);
  };

  return (
    <>
      <div className="w-full flex justify-between p-5 h-fit">
        <h1 className="font-mono text-2xl">Jobless</h1>
        <div className="menu-options  md:w-2/4 justify-between items-center hidden md:flex lg:w-1/4">
          <p
            className={`${
              path === "/" && "active"
            } p-2 hover:bg-gray-200  cursor-pointer transition-all duration-300`}
            onClick={() => {
              changePath("/");
            }}
          >
            Find Job
          </p>

          <p
            className={`${
              path === "/post" && "active"
            } p-2 hover:bg-gray-200  cursor-pointer transition-all duration-300`}
            onClick={() => {
              changePath("/post");
            }}
          >
            Post Job
          </p>

          <p
            className={`${
              path === "/talentprogram" && "active"
            } p-2 hover:bg-gray-200  cursor-pointer transition-all duration-300`}
            onClick={() => {
              changePath("/talentprogram");
            }}
          >
            Talent Program
          </p>
        </div>

        <div className="menu-options  md:w-fit justify-end items-center hidden md:flex lg:w-fit">
          <button
            className="p-2 m-1 bg-teal-400 text-white rounded-md hover:bg-teal-500 transition-all duration-300"
            onClick={() => {
              changePath("/login");
            }}
          >
            Login
          </button>
          <button
            className="p-2 m-1 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition-all duration-300"
            onClick={() => {
              changePath("/signup");
            }}
          >
            Signup
          </button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${
            showMenu && "hidden"
          } w-8 h-8 block md:hidden  -md m-2 cursor-pointer self-end`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${
            !showMenu && "hidden"
          } w-8 h-8 block md:hidden  -md m-2 cursor-pointer self-end`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="w-full h-screen flex flex-col   bg-white z-50 fixed top-20 left-0 p-5 md:hidden">
          <div className="links flex flex-col w-full mb-5">
            <p
              className={`${
                path === "/" && "active"
              } p-2 hover:bg-gray-200  cursor-pointer transition-all duration-300`}
              onClick={() => {
                changePath("/");
              }}
            >
              Find Job
            </p>

            <p
              className={`${
                path === "/post" && "active"
              } p-2 hover:bg-gray-200  cursor-pointer transition-all duration-300`}
              onClick={() => {
                changePath("/post");
              }}
            >
              Post Job
            </p>

            <p
              className={`${
                path === "/talentprogram" && "active"
              } p-2 hover:bg-gray-200  cursor-pointer transition-all duration-300`}
              onClick={() => {
                changePath("/talentprogram");
              }}
            >
              Talent Program
            </p>
          </div>
          <div className="buttons flex flex-col w-full">
            <button
              className="p-2 m-1 bg-teal-400 text-white rounded-md hover:bg-teal-500 transition-all duration-300"
              onClick={() => {
                changePath("/login");
              }}
            >
              Login
            </button>
            <button
              className="p-2 m-1 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition-all duration-300"
              onClick={() => {
                changePath("/signup");
              }}
            >
              Signup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
