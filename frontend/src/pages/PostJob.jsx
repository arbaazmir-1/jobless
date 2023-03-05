import { useState } from "react";

import Select from "react-select";
import Navbar from "../components/Navbar";
import ProfilePageMenu from "../components/ProfilePageMenu";
import PostJonForm from "../components/PostJobForm";
import JobCard from "../components/JobCard";

const PostJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobRequirements, setJobRequirements] = useState([]);
  const [showPostJobForm, setShowPostJobForm] = useState(false);
  const newArra = [1, 2, 3, 5];

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit the form data to the server
    console.log({
      jobTitle,
      jobDescription,
      jobLocation,
      jobType,
      jobCategory,
      jobSalary,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="h-fit md:h-screen">
        <div className="  h-3/4 m-auto flex  flex-col justify-center items-center md:flex-row md:items-start">
          <div className="w-fit h-fit  m-5 flex flex-row  justify-center items-center  shadow-md p-1 rounded-md md:flex-col md:w-1/5">
            <button
              className="w-full p-3 m-2 text-black  hover:bg-gray-100 transition-colors delay-75 rounded-sm text-start"
              onClick={() => {
                setShowPostJobForm(false);
              }}
            >
              Manage Jobs
            </button>

            <button
              className="w-full p-3 m-2 text-black  hover:bg-gray-100 transition-colors delay-75 rounded-sm text-start"
              onClick={() => {
                setShowPostJobForm(true);
              }}
            >
              Post a Job
            </button>
          </div>
          <div className="w-full h-fit  m-5  flex flex-col  shadow-sm rounded-md p-1 md:w-3/5">
            {showPostJobForm && <PostJonForm handleSubmit={handleSubmit} />}
            {!showPostJobForm && (
              <div className="w-full h-full flex flex-col justify-center items-center">
                {newArra.map((item) => (
                  <JobCard />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJobForm;
