import React from "react";

const AccountInfo = ({ handelChange, data,error }) => {
  return (
    <>
      <h1 className="my-5 text-3xl font-bold">Step 3: Account Setup</h1>
      <div className="mb-5">
        <label
          for="username"
          className="block mb-2 text-xl font-medium text-gray-900"
        >
          UserName
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={data.username}
          className="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          onChange={handelChange}
          required
        />
        {error.username && <p className="text-red-600">{error.username}</p>}
      </div>
      <div className="mb-5">
        <label
          for="password"
          className="block mb-2 text-xl font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          className="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          onChange={handelChange}
          required
        />
        {error.password && <p className="text-red-600">{error.password}</p>}
      </div>
      <div className="mb-5">
        <label
          for="confirm-password"
          className="block mb-2 text-xl font-medium text-gray-900"
        >
          Confirm password
        </label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          value={data.confirmPassword}
          className="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          onChange={handelChange}
          required
        />
        {error.confirmPassword && <p className="text-red-600">{error.confirmPassword}</p>}
      </div>
    </>
  );
};

export default AccountInfo;
