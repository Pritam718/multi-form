import React from "react";

const AddressInfo = ({ handelChange, data,error }) => {
    const stateAll=['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal']
  return (
    <>
      <h1 className="my-5 text-3xl font-bold">Step 2: Address Information</h1>
      <div className="mb-5">
        <label
          for="street-address"
          className="block mb-2 text-xl font-medium text-gray-900"
        >
          Street Address
        </label>
        <input
          type="text"
          id="street-address"
          name="streetAddress"
          value={data.streetAddress}
          className="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          onChange={handelChange}
        />
        {error.streetAddress && <p className="text-red-600">{error.streetAddress}</p>}
      </div>
      <div className="mb-5">
        <label
          for="city"
          className="block mb-2 text-lg font-medium text-gray-900"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={data.city}
          className="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          onChange={handelChange}
        />
        {error.city && <p className="text-red-600">{error.city}</p>}
      </div>
      <div className="mb-5">
        <label
          for="state"
          className="block mb-2 text-lg font-medium text-gray-900"
        >
          State
        </label>
        <select
          id="state"
          name="state"
          value={data.state}
          className="block w-48 p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          onChange={handelChange}
        >
          <option className="block w-48 p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50">Select State</option>
          {
            stateAll?.map((s)=>(
                <option className="block w-48 p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50">{s}</option>
            ))
          }
        </select>
        {error.state && <p className="text-red-600">{error.state}</p>}
      </div>

      <div className="mb-5">
        <label
          for="zip-code"
          className="block mb-2 text-lg font-medium text-gray-900"
        >
          Zip Code
        </label>
        <input
          type="text"
          id="zip-code"
          name="zipCode"
          value={data.zipCode}
          className="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          onChange={handelChange}
        />
        {error.zipCode && <p className="text-red-600">{error.zipCode}</p>}
      </div>
    </>
  );
};

export default AddressInfo;
