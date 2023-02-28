import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formStep, setFormStep] = useState(1);
  const [personaleModel, setPersonaleModel] = useState("");
  const [gobackModal, setGobackModal] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div>
      {gobackModal && (
        <div
          class="fixed z-10 inset-0 overflow-y-auto"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            ></div>

            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      class="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Go back?
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Are you sure you want to go back? Your email
                        verification will be interrupted & you might have to
                        start again.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setGobackModal(false);
                    setFormStep(3);
                  }}
                >
                  Go back
                </button>
                <button
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setGobackModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
        <div className="left-side w-full h-full flex justify-center  items-center md:w-1/2 bg-gradient-to-l from-blue-300 to-red-300 md:bg-gradient-to-t md:from-white md:to-white">
          {formStep === 1 && (
            <div className="step-1 w-3/4 h-fit  bg-white bg-opacity-50 shadow-md  m-auto  p-9 rounded-md flex-col">
              <h1 className="text-4xl font-mono m-3 cursor-pointer md:hidden block">
                Jobless
              </h1>
              <h1 className="text-2xl font-mono m-3">Signup</h1>
              <p className="text-md font-sans m-3">
                Are you a recruiter or a job seeker?
              </p>
              <div className="buttons flex flex-row justify-between mt-10">
                <button
                  className="button flex flex-col items-center justify-center
                hover:bg-blue-400 transition-all duration-300 hover:text-white p-2 rounded-md
                 "
                  onClick={() => {
                    setFormStep(2);
                    setPersonaleModel("recruiter");
                  }}
                >
                  <p className="text-xl font-mono">Recruiter</p>
                </button>
                <button
                  className="button flex flex-col items-center 
                hover:bg-teal-400 transition-all duration-300 hover:text-white p-2 rounded-md
                "
                  onClick={() => {
                    setFormStep(2);
                    setPersonaleModel("jobseeker");
                  }}
                >
                  <p className="text-xl font-mono">Job Seeker</p>
                </button>
              </div>
            </div>
          )}
          {formStep === 2 && personaleModel === "recruiter" && (
            <div className="step-2 w-3/4 h-fit  bg-white bg-opacity-50 shadow-md  m-auto  p-9 rounded-md flex-col">
              <h1 className="text-4xl font-mono m-3">Signup</h1>

              <div className="form flex flex-col justify-between mt-10 w-full">
                <div className="form-group flex flex-col m-1">
                  <label className="text-md font-sans p-1">Name</label>
                  <input
                    type="text"
                    className="input w-full p-1 
                    bg-transparent
                        border-b-2 border-blue-400  focus:outline-none focus:border-teal-400 transition-colors  ease-linear
                    "
                  />
                </div>
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
                <div className="form-group flex flex-col m-1">
                  <label className="text-md font-sans p-1">
                    Confirm Password
                  </label>
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
                  onClick={() => {
                    setFormStep(3);
                  }}
                >
                  <p className="text-xl font-mono">Next</p>
                </button>
                <button
                  className="button flex flex-col items-center
                        hover:bg-teal-400 transition-all duration-300 hover:text-white p-1 rounded-md
                        mt-5
                        "
                  onClick={() => {
                    setFormStep(1);
                  }}
                >
                  <p className="text-xl font-mono">Back</p>
                </button>
              </div>
            </div>
          )}
          {formStep === 3 && personaleModel === "recruiter" && (
            <div className="step-3 w-3/4 h-fit  bg-white bg-opacity-50 shadow-md  m-auto  p-9 rounded-md flex-col">
              <h1 className="text-4xl font-mono m-3">Signup</h1>
              <div className="form flex flex-col justify-between mt-10 w-full">
                <div className="form-group flex flex-col m-1">
                  <label className="text-md font-sans p-1">Company Name</label>
                  <input
                    type="text"
                    className="input w-full p-1
                        bg-transparent
                        border-b-2 border-blue-400  focus:outline-none focus:border-teal-400 transition-colors  ease-linear
                        "
                  />
                </div>
                <div className="form-group flex flex-col m-1">
                  <label className="text-md font-sans p-1">Company Email</label>
                  <input
                    type="email"
                    className="input w-full p-1
                    bg-transparent
                        border-b-2 border-blue-400 focus:outline-none focus:border-teal-400 transition-colors delay-300 ease-linear
                        "
                  />
                </div>
                <div className="form-group flex flex-col m-1">
                  <label className="text-md font-sans p-1">
                    Company Website
                  </label>
                  <input
                    type="text"
                    className="input w-full p-1
                    bg-transparent
                        border-b-2 border-blue-400 focus:outline-none focus:border-teal-400 transition-colors delay-300 ease-linear
                        "
                  />
                </div>
                <div className="form-group flex flex-col m-1">
                  <label className="text-md font-sans p-1">Company Phone</label>
                  <input
                    type="text"
                    className="input w-full p-1
                    bg-transparent
                        border-b-2 border-blue-400 focus:outline-none focus:border-teal-400 transition-colors delay-300 ease-linear
                        "
                  />
                </div>
                <div className="form-group flex flex-col m-1">
                  <label className="text-md font-sans p-1">
                    Company Address
                  </label>
                  <input
                    type="text"
                    className="input w-full p-1
                    bg-transparent
                        border-b-2 border-blue-400 focus:outline-none focus:border-teal-400 transition-colors delay-300 ease-linear
                        "
                  />
                </div>

                <button
                  className="button flex flex-col items-center
                        hover:bg-blue-400 transition-all duration-300 hover:text-white p-1 rounded-md
                        mt-10
                        "
                  onClick={() => {
                    setFormStep(4);
                  }}
                >
                  <p className="text-xl font-mono">Next</p>
                </button>
                <button
                  className="button flex flex-col items-center
                        hover:bg-teal-400 transition-all duration-300 hover:text-white p-1 rounded-md
                        mt-5
                        "
                  onClick={() => {
                    setFormStep(2);
                  }}
                >
                  <p className="text-xl font-mono">Back</p>
                </button>
              </div>
            </div>
          )}
          {formStep === 4 && personaleModel === "recruiter" && (
            <div className="step-3 w-3/4 h-fit  bg-white shadow-md  m-auto  p-9 rounded-md flex-col">
              <button
                className="button flex flex-row w-fit items-center
                         p-2 rounded-md
                        mt-5
                        "
                onClick={() => {
                  setGobackModal(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>

                <p className="text-md font-mono"> Back</p>
              </button>
              <h1 className="text-4xl font-mono m-3">Signup</h1>
              <p>
                A verification link has been sent to your email address. Please
                verify your email address to complete the registration process.
              </p>
              <div className="loading-spinner">
                <div class="flex justify-center items-center">
                  <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900 m-5"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
