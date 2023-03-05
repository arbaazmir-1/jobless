import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formStep, setFormStep] = useState(1);
  const [personaleModel, setPersonaleModel] = useState("");
  const [gobackModal, setGobackModal] = useState(false);
  const [goBackStep, setGoBackStep] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  const goBackWithModal = () => {
    setFormStep(goBackStep);
  };
  return (
    <div>
      <div className=" flex items-center w-full h-screen">
        <div className="right-side bg-gradient-to-l from-blue-300 to-red-300 w-1/2 h-full hidden items-center md:flex">
          <div className="glassmorphism-container w-3/4 h-fit  bg-white bg-opacity-50  m-auto  p-9 rounded-md flex-col">
            <h1
              className="text-6xl font-mono m-3 cursor-pointer "
              onClick={() => {
                handleNavigate("/");
              }}
            >
              Jobless
            </h1>
            <p className="text-md font-sans m-3">
              Connecting job seekers with their dream careers, and helping
              employers find the perfect match.
            </p>

            <div className="badges flex flex-row justify-between mt-10">
              <div className="badge flex flex-col items-center ">
                <p className="text-2xl font-mono">1000+</p>
                <p className="text-md font-sans">Jobs Posted</p>
              </div>
              <div className="badge flex flex-col items-center">
                <p className="text-2xl font-mono">500+</p>
                <p className="text-md font-sans">Recruiters </p>
              </div>
              <div className="badge flex flex-col items-center">
                <p className="text-2xl font-mono">100+</p>
                <p className="text-md font-sans">Companies</p>
              </div>
            </div>
            <p className="text-md font-sans mt-8">
              Don't Have An Account? <a href="/signup">Signup</a>
            </p>
          </div>
        </div>
        <div className="left-side w-full h-full flex justify-center  items-center md:w-1/2 bg-gradient-to-l from-blue-300 to-red-300 md:bg-gradient-to-t md:from-white md:to-white">
          <div className="step-2 w-3/4 h-fit  bg-white bg-opacity-50 shadow-md  m-auto  p-9 rounded-md flex-col">
            <h1 className="text-4xl font-mono m-3">Login</h1>

            <div className="form flex flex-col justify-between mt-10 w-full">
              <div className="form-group flex flex-col m-1">
                <label className="text-md font-sans p-1">Email</label>
                <input
                  type="email"
                  className="input w-full p-1 
                        bg-transparent
                        border-b-2 border-blue-400 focus:outline-none focus:border-teal-400 transition-colors delay-300 ease-linear
                  "
                />
              </div>
              <div className="form-group flex flex-col m-1">
                <label className="text-md font-sans p-1">Password</label>
                <input
                  type="password"
                  className="input w-full p-1 
                        bg-transparent
                        border-b-2 border-blue-400 focus:outline-none focus:border-teal-400 transition-colors delay-300 ease-linear
                    "
                />
              </div>

              <button
                className="button flex flex-col items-center
                        hover:bg-blue-400 transition-all duration-300 hover:text-white p-2 rounded-md
                        mt-10
                        "
              >
                <p className="text-xl font-mono">Login</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
