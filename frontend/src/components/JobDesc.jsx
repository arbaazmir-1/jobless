import React from "react";
import "../scss/JobDesc.scss";
const JobDesc = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
      <div className="px-4 py-2">
        <h2 className="text-gray-800 font-bold text-2xl">Frontend Developer</h2>
        <p className="text-gray-600 text-sm mt-1">Acme Inc.</p>
        <div className="perks flex flex-row justify-between">
          <div className="mt-2 flex items-center">
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <span className="text-gray-600 text-sm">Remote</span>
          </div>
          <div className="mt-2 flex items-center">
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-gray-600 text-sm">
              Flexible Working Hours
            </span>
          </div>

          <div className="mt-2 flex items-center">
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
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>

            <span className="text-gray-600 text-sm">$80000</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-2">
        <p className="text-gray-700 font-bold text-sm">Job Description:</p>
        <p className="text-gray-600 text-sm mt-1">
          We are seeking a talented Frontend Developer to join our team. The
          ideal candidate will have experience with HTML, CSS, and JavaScript,
          as well as a passion for creating beautiful and responsive user
          interfaces. In this role, you will work closely with our design team
          to turn mockups and wireframes into functional websites and
          applications.
        </p>
      </div>
      <div className="bg-gray-100 px-4 py-2">
        <p className="text-gray-700 font-bold text-sm">Job Requirement:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm mt-1">
          <li>Experience with HTML, CSS, and JavaScript</li>
          <li>Experience with React.js</li>
          <li>Experience with Git</li>
          <li>Experience with RESTful APIs</li>
          <li>Experience with responsive design</li>
          <li>Experience with modern JavaScript frameworks</li>
        </ul>
      </div>
      <div
        className="bg-gray-200 px-4 py-2 flex items-center 
      justify-end space-x-2
      "
      >
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Save Job
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply Now
        </button>
      </div>
    </div>
  );
};
export default JobDesc;
