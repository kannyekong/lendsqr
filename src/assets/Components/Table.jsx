import React from "react";
import elipses from "../images/ellipses.png";
import sort from "../images/sort.png";
import prevButton from "../images/prev btn.png";
import nextButton from "../images/next btn.png";
import { useHistory } from "react-router-dom";

const Table = () => {
  const history = useHistory();
  const goToDetails = () =>
    history.push("/dashboard/users/user_details", { replace: true });
  return (
    <>
      <div className="relative overflow-y-auto shadow-md rounded">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-white">
            <tr>
              <th className="flex flex-row px-6 py-8 text-[14px] space-x-3 uppercase">
                <span>Organization</span>
                <button>
                  <img src={sort} alt="sort" />
                </button>
              </th>

              <th
                scope="col"
                className="space-x-3 text-[14px] px-6 py-8 uppercase"
              >
                <span>UserName</span>
                <button>
                  <img src={sort} alt="sort" />
                </button>
              </th>
              <th
                scope="col"
                className="space-x-3 text-[14px]  px-6 py-3 uppercase"
              >
                <span>Email</span>
                <button>
                  <img src={sort} alt="sort" className="" />
                </button>
              </th>
              <th className="px-6 text-[14px] space-x-2 py-3 uppercase">
                <span>Phone Number</span>
                <button>
                  <img src={sort} alt="sort" />
                </button>
              </th>
              <th
                scope="col"
                className="px-6 text-[14px] py-3 space-x-2 uppercase"
              >
                <span>Date Joined</span>
                <button>
                  <img src={sort} alt="sort" />
                </button>
              </th>
              <th
                scope="col"
                className="px-6 text-[16px] space-x-2 py-3 uppercase"
              >
                <span>Status</span>
                <button>
                  <img src={sort} alt="sort" />
                </button>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="bg-white border-b  hover:bg-[#fefefe]"
              onClick={goToDetails}
            >
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
                  <p className="font-semibold">active</p>
                </div>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <img src={elipses}></img>
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b  hover:bg-[#fefefe]">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                LendSQR
              </th>
              <td class="px-6 py-4">Adedeji</td>
              <td class="px-6 py-4">adedeji@gmail.com</td>
              <td class="px-6 py-4">09029394845</td>
              <td class="px-6 py-4">15th May, 2020 10:00 am</td>
              <td class="px-6 py-4">
                <div className="flex items-center justify-center p-2 rounded-full bg-red-50">
                  <p className="font-semibold">inactive</p>
                </div>
              </td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <img src={elipses}></img>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-row p-4 items-center justify-between space-x-2">
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
    </>
  );
};

export default Table;
