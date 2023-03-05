import React from "react";

const ProfilePageMenu = ({ setShowMenu }) => {
  return (
    <div className="w-1/5 h-3/4  m-auto flex flex-col  items-center shadow-md p-1 rounded-md">
      <button
        className="w-full p-3 m-2 text-black  hover:bg-gray-100 transition-colors delay-75 rounded-sm text-start"
        onClick={() => {
          setShowMenu("Manage Profile");
        }}
      >
        Manage Profile
      </button>

      <button
        className="w-full p-3 m-2 text-black  hover:bg-gray-100 transition-colors delay-75 rounded-sm text-start"
        onClick={() => {
          setShowMenu("Manage Applicants");
        }}
      >
        Manage Applicants
      </button>
      <button
        className="w-full p-3 m-2 text-black  hover:bg-gray-100 transition-colors delay-75 rounded-sm text-start"
        onClick={() => {
          setShowMenu("Manage Talent Program");
        }}
      >
        Manage Talent Program
      </button>
      <button
        className="w-full p-3 m-2 text-black  hover:bg-gray-100 transition-colors delay-75 rounded-sm text-start"
        onClick={() => {
          setShowMenu("Manage Subscriptions");
        }}
      >
        Submit Feedback
      </button>
      <button
        className="w-full p-3 m-2 text-black  hover:bg-gray-100 transition-colors delay-75 rounded-sm text-start"
        onClick={() => {
          setShowMenu("Privacy & Data Policy");
        }}
      >
        Privacy & Data Policy
      </button>
    </div>
  );
};

export default ProfilePageMenu;
