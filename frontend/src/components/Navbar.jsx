import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between p-5 h-fit">
      <h1 className="font-mono text-2xl">Jobless</h1>
      <div className="menu-options flex w-1/4 justify-between items-center">
        <p className="p-2 hover:bg-gray-200 rounded-md cursor-pointer transition-all duration-300">
          Find Job
        </p>
        <p className="p-2 hover:bg-gray-200 rounded-md cursor-pointer transition-all duration-300">
          Post Job
        </p>
        <p className="p-2 hover:bg-gray-200 rounded-md cursor-pointer transition-all duration-300">
          Talent Program
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>
  );
};

export default Navbar;
