import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import {
  jobTypeOptions,
  jobDates,
  professionOptions,
  countryListAllIsoData,
} from "../data/static";

const animatedComponents = makeAnimated();
const FilterBar = () => {
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(10000);
  return (
    <div className=" p-5 w-1/5 flex justify-center">
      <div className="filter-container flex flex-col">
        <div className="filter-item mb-5">
          <p className="text-sm">Profession</p>
          <Select
            isMulti
            name="colors"
            options={professionOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="filter-item mb-5">
          <p className="text-sm">Filter by</p>
          <Select
            isMulti
            name="colors"
            options={jobTypeOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className="filter-item mb-5">
          <p className="text-sm">Sort by</p>
          <Select
            isMulti
            name="colors"
            options={jobDates}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className="filter-item mb-5">
          <p className="text-sm">Location</p>
          <Select
            isMulti
            name="colors"
            options={countryListAllIsoData}
            className="basic-multi-select
            "
            classNamePrefix="select"
          />
        </div>
        <div className="filter-item mb-5">
          <p className="text-sm">Salary</p>
          <div className="flex flex-row">
            <input
              type="text"
              className="w-1/2 border-2 border-gray-300 rounded-md p-2"
              placeholder="Min"
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
            />
            <input
              type="text"
              className="w-1/2 border-2 border-gray-300 rounded-md p-2"
              placeholder="Max"
              value={maxSalary}
              onChange={(e) => setMaxSalary(e.target.value)}
            />
          </div>
        </div>
        <button className="w-full h-10 bg-blue-400 rounded-md text-white">
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
