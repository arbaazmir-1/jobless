import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import PostJobForm from "./pages/PostJob";
import TalentProgram from "./pages/TalentProgram";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostJobForm />} />
          <Route path="/talentprogram" element={<TalentProgram />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
