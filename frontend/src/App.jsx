import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import PostJobForm from "./pages/PostJob";
import TalentProgram from "./pages/TalentProgram";
import Signup from "./pages/Signup";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostJobForm />} />
          <Route path="/talentprogram" element={<TalentProgram />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
