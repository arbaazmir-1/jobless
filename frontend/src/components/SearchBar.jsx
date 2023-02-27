import React from "react";

const SearchBar = () => {
  return (
    <div className="w-2/5 m-auto my-5">
      <div
        className="search-container flex flex-row justify-center items-center
        border-2 border-blue-400 rounded-md
      "
      >
        <input
          type="text"
          className="w-3/4 h-10  p-2 focus:outline-none"
          placeholder="Search for jobs"
        />

        <button className="w-1/4 h-10 bg-blue-400 rounded-r-sm text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
