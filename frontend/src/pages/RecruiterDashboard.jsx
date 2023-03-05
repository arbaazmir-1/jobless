import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import ProfilePageMenu from "../components/ProfilePageMenu";
import ManageProfile from "../components/ManageProfile";

const RecruiterDashboard = () => {
  const [showMenu, setShowMenu] = useState("");

  useEffect(() => {
    console.log(showMenu);
  }, [showMenu]);

  return (
    <>
      <Navbar />
      <div className="h-screen">
        <div className="container  h-3/4 m-auto flex justify-center ">
          <ProfilePageMenu setShowMenu={setShowMenu} />
          <div className="w-3/4 h-3/4  m-auto flex flex-col justify-center items-center shadow-md rounded-md">
            {showMenu === "Manage Profile" && (
              <ManageProfile setShowMenu={setShowMenu} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruiterDashboard;
