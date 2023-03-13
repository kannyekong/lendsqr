import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import calendar from "../images/calendar.png";

const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="flex flex-col bg-white space-y-4 w-[270px]  py-4 px-4 absolute left-[350px] top-[500px] rounded-md shadow-md border">
        <div className="flex flex-col space-y-1">
          <p>Organization</p>
          <select class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg block h-[40px] ">
            <option value="DE">Select</option>
          </select>
        </div>
        <div className="flex flex-col space-y-1">
          <p>Username</p>
          <input
            placeholder="User"
            type="text"
            className="shadow appearance-none border rounded w-full h-[40px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <p>Email</p>
          <input
            placeholder="Email"
            type="email"
            className="shadow appearance-none border rounded w-full h-[40px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <p>Date</p>
          <div className="flex flex-row justify-center items-center border px-2 rounded-md shadow-sm">
            <DatePicker
              className="py-2 focus:outline-none"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <img src={calendar} alt="calendar" />
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <p>Phone Number</p>
          <input
            placeholder="Phone Number"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <p>Status</p>
          <select class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 ">
            <option value="DE">Select</option>
          </select>
        </div>
        <div className="flex flex-row space-x-2 w-full">
          <button className="border w-full p-2 text-black rounded">
            Reset
          </button>
          <button className="rounded w-full p-2 bg-teal-500 text-white">
            Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
