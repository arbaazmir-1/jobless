import React from "react";
import { useState } from "react";
import {
  jobTypeOptions,
  jobDates,
  professionOptions,
  countryListAllIsoData,
} from "../data/static";
import Select from "react-select";

const PostJonForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobRequirements, setJobRequirements] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full p-3">
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
          <Select options={countryListAllIsoData} />
        </div>

        <div className="mb-4">
          <label htmlFor="jobType" className="block mb-2 font-semibold">
            Job Type
          </label>
          <Select options={jobTypeOptions} />
        </div>

        <div className="mb-4">
          <label htmlFor="jobCategory" className="block mb-2 font-semibold">
            Job Category
          </label>
          <Select options={professionOptions} />
        </div>

        <div className="mb-4">
          <label htmlFor="jobSalary" className="block mb-2 font-semibold">
            Job Salary
          </label>
          <input
            type="text"
            id="jobSalary"
            className="w-full p-2 border rounded-md"
            placeholder="e.g. Frontend Developer"
            value={jobSalary}
            onChange={(event) => setJobSalary(event.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 m-2 text-white bg-blue-300 hover:bg-blue-600 transition-colors delay-75 rounded-sm text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default PostJonForm;
