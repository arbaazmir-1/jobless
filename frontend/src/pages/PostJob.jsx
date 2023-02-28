import { useState } from "react";
import {
  jobTypeOptions,
  jobDates,
  professionOptions,
  countryListAllIsoData,
} from "../data/static";
import Select from "react-select";
import Navbar from "../components/Navbar";

const PostJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobRequirements, setJobRequirements] = useState([]);

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
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8">
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block mb-2 font-semibold">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            className="w-full p-2 border rounded-md"
            placeholder="e.g. Frontend Developer"
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobDescription" className="block mb-2 font-semibold">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            className="w-full p-2 border rounded-md"
            placeholder="e.g. Frontend Developer"
            value={jobDescription}
            onChange={(event) => setJobDescription(event.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobLocation" className="block mb-2 font-semibold">
            Job Location
          </label>
          <Select
            isMulti
            name="colors"
            options={countryListAllIsoData}
            className="basic-multi-select"
            classNamePrefix="select"
            maxLength={2}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobType" className="block mb-2 font-semibold">
            Job Type
          </label>
          <Select
            isMulti
            name="colors"
            options={jobTypeOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobCategory" className="block mb-2 font-semibold">
            Job Category
          </label>
          <Select
            isMulti
            name="colors"
            options={professionOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobSalary" className="block mb-2 font-semibold">
            Job Salary
          </label>
          <input
            type="text"
            id="jobSalary"
            className="w-full p-2 border rounded-md"
            placeholder="e.g. $100,000"
            value={jobSalary}
            onChange={(event) => setJobSalary(event.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md"
          >
            Post Job
          </button>
        </div>
      </form>
    </>
  );
};

export default PostJobForm;
