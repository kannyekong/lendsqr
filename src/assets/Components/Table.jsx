import React, { useState } from "react";
import elipses from "../images/ellipses.png";
import sort from "../images/sort.png";
import add from "../images/add.png";
import view from "../images/view.png";
import deleteIcon from "../images/delete.png";

import prevButton from "../images/prev btn.png";
import nextButton from "../images/next btn.png";
import { useHistory } from "react-router-dom";
import Filter from "./FilterDetails";

const Table = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const goToDetails = () =>
    history.push("/dashboard/users/user_details", { replace: true });

  const displayFilter = () => setShow(!show);

  // JSX
  return (
    <>
      <div className="relative shadow-md rounded">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-white">
            <tr>
              <th className="flex flex-row px-6 py-8 text-[14px] space-x-3 uppercase">
                <span>Organization</span>
                <button onClick={displayFilter}>
                  <img src={sort} alt="sort" />
                </button>
              </th>

              <th
                scope="col"
                className="space-x-3 text-[14px] px-6 py-8 uppercase"
              >
                <span>UserName</span>
                <button onClick={displayFilter}>
                  <img src={sort} alt="sort" />
                </button>
              </th>
              <th
                scope="col"
                className="space-x-3 text-[14px]  px-6 py-3 uppercase"
              >
                <span>Email</span>
                <button onClick={displayFilter}>
                  <img src={sort} alt="sort" className="" />
                </button>
              </th>
              <th className="px-6 text-[14px] space-x-2 py-3 uppercase">
                <span>Phone Number</span>
                <button onClick={displayFilter}>
                  <img src={sort} alt="sort" />
                </button>
              </th>
              <th
                scope="col"
                className="px-6 text-[14px] py-3 space-x-2 uppercase"
              >
                <span>Date Joined</span>
                <button onClick={displayFilter}>
                  <img src={sort} alt="sort" />
                </button>
              </th>
              <th
                scope="col"
                className="px-6 text-[16px] space-x-2 py-3 uppercase"
              >
                <span>Status</span>
                <button onClick={displayFilter}>
                  <img src={sort} alt="sort" />
                </button>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="relative bg-white border-b hover:bg-[#fefefe]">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap "
              >
                LendSQR
              </th>
              <td className="px-6 py-4">Adedeji</td>
              <td className="px-6 py-4">adedeji@gmail.com</td>
              <td className="px-6 py-4">09029394845</td>
              <td className="px-6 py-4">15th May, 2020 10:00 am</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center p-2 rounded-full bg-green-50">
                  <p className="font-semibold text-green-500">Active</p>
                </div>
              </td>
              <td class="px-6 py-4">
                <div className="flex items-center justify-center rounded-full p-1 py-3 hover:bg-[#F0FDF4]">
                  <img src={elipses}></img>
                </div>
                <div className="absolute flex flex-col items-center justify-start bg-white space-y-1 rounded-md -right-6 ">
                  <div className="hover:bg-[#F0FDF4] p-2 px-4">
                    <button
                      onClick={goToDetails}
                      className="flex flex-row items-center space-x-2 "
                    >
                      <img src={view} alt="view" />
                      <p className="font-semibold">View Details</p>
                    </button>
                  </div>
                  <div className="hover:bg-[#F0FDF4] p-2 px-4">
                    <button className="flex flex-row items-center space-x-2">
                      <img src={deleteIcon} alt="delete" />
                      <p className="font-semibold">Blacklist User</p>
                    </button>
                  </div>
                  <div className="hover:bg-[#F0FDF4] p-2 px-4">
                    <button className="flex flex-row items-center space-x-2">
                      <img src={add} alt="add" />
                      <p className="font-semibold">Activate User</p>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-row p-4 items-center justify-between">
        <div className="flex flex-row items-center space-x-2">
          <p>Showing</p>{" "}
          <select
            id="default"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2 "
          >
            <option selected>Pick a number</option>
            <option value="US">1</option>
            <option value="CA">2</option>
            <option value="FR">20</option>
            <option value="DE">200</option>
          </select>
          <p>out of 100</p>
        </div>

        {/* Pagination */}
        <div className="flex flex-row items-center justify-center">
          <div className="pt-2">
            <button>
              <img src={prevButton} alt="prevButton" />
            </button>
          </div>
          <div className="flex flex-row items-center justify-center space-x-6 p-2">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
          <div className="pt-2">
            <button>
              <img src={nextButton} alt="nextButton" />
            </button>
          </div>
        </div>
      </div>

      {/* Show and Hide Filter Component */}
      {show && <Filter />}
    </>
  );
};

export default Table;
