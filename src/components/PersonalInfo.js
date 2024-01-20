import React from "react";

const PersonalInfo = ({ handelChange, data,error }) => {
  return (
    <>
      <h1 className="my-5 text-3xl font-bold">Step 1: Personal Information</h1>
      <div className="mb-5">
        <label
          for="full-name"
          className="block mb-2 text-xl font-medium text-gray-900"
        >
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          value={data.fullName}
          className="block w-full p-2 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          onChange={handelChange}
        />
        {error.fullName && <p className="text-red-600">{error.fullName}</p>}
      </div>
      <div className="mb-5">
        <label
          for="email"
          className="block mb-2 text-lg font-medium text-gray-900"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name='email'
          value={data.email}
          className="block w-full p-2 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          onChange={handelChange}
        />
        {error.email && <p className="text-red-600">{error.email}</p>}
      </div>
      <div className="mb-5">
        <label
          for="dob"
          className="block mb-2 text-lg font-medium text-gray-900"
          
        >
          Date Of Birth
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={data.dob}
          className="block w-full p-2 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          onChange={handelChange}
        />
        {error.dob && <p className="text-red-600">{error.dob}</p>}
      </div>
    </>
  );
};

export default PersonalInfo;
