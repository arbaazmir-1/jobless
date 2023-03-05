import React from "react";
import { useState } from "react";
const ManageProfile = () => {
  const [editState, setEditState] = useState(false);

  return (
    <div className="w-3/4 m-auto">
      <h1 className="text-3xl font-bold mb-8">Manage Profile</h1>
      {editState ? (
        <form className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="px-3 py-2 rounded-lg border-2 border-gray-300 mb-4 focus:outline-none focus:border-blue-400"
          />
          <label htmlFor="email" className="mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="px-3 py-2 rounded-lg border-2 border-gray-300 mb-4 focus:outline-none focus:border-blue-400"
          />
          <label htmlFor="phone" className="mb-2 font-semibold">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="px-3 py-2 rounded-lg border-2 border-gray-300 mb-4  focus:outline-none focus:border-blue-400"
          />
          <div className="buttons w-full flex justify-between">
            <button className="bg-blue-500 text-white py-2 px-4 w-2/5 m-1 rounded-md hover:bg-blue-600">
              Save Changes
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 w-2/5 m-1  rounded-md hover:bg-red-600"
              onClick={() => setEditState(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col">
          <p className="mb-2 font-semibold">Name</p>
          <p className="mb-4">John Doe</p>
          <p className="mb-2 font-semibold">Email</p>
          <p className="mb-4">
            <a href="mailto:    ">johnemail.com</a>
          </p>
          <p className="mb-2 font-semibold">Phone</p>
          <p className="mb-4">+91 1234567890</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={() => setEditState(true)}
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageProfile;
