import React from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import JobDesc from "../components/JobDesc";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  let jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="middle-container w-11/12 flex flex-row  h-screen  m-auto">
        <FilterBar className="1/5 self-start" />
        <div className="job-container w-full flex flex-wrap justify-center overflow-scroll scroll-m-0 md:w-2/4">
          {jobs.map((job) => (
            <JobCard />
          ))}
          <button className="w-3/4 h-10 bg-blue-400 rounded-md m-5 text-white">
            Load More
          </button>
        </div>
        <div
          className="job-desc-container w-2/4 h-4/5
        hidden md:block
        "
        >
          <JobDesc />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
