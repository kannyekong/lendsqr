import React, { useEffect, useState } from "react";
import elipses from "../images/ellipses.png";
import sort from "../images/sort.png";
import add from "../images/add.png";
import view from "../images/view.png";
import deleteIcon from "../images/delete.png";
import prevButton from "../images/prev btn.png";
import nextButton from "../images/next btn.png";
import { useHistory } from "react-router-dom";
import Filter from "./FilterDetails";
import { BaseUrl } from "../store/BaseUrl";

const Table = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [mousePos, setMousePos] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [showFlyout, setShowFlyout] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(20);
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("userid", id);
  }, [id]);

  // Go to previous page
  const goToDetails = () =>
    history.push("/dashboard/users/user_details", { replace: true });
  // Show filter
  const displayFilter = () => setShow(!show);
  // Show flyout
  const displayFlyout = () => setShowFlyout(!showFlyout);

  // TO determine the position of the mouse so I could position the flyout menu
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = [...data]
    ?.reverse()
    ?.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (i) => setCurrentPage(i);
  const pagination = pageNumbers.map((i) => (
    <button
      key={i}
      onClick={() => paginate(i)}
      className="text-sm font-medium text-black"
    >
      {i}
    </button>
  ));

  // USE EFFECT TO GET ALL DATA ON PAGE LOAD
  useEffect(() => {
    const getUsers = async () => {
      try {
        const requestOptions = {
          method: "GET",
        };
        const response = await fetch(BaseUrl + `api/v1/users`, requestOptions);
        const result = await response.json();
        if (!response.ok) {
          throw new error("Something Occured...");
        } else {
          let renderData = [];
          result.forEach((item) => {
            const newData = {
              id: item.id,
              orgName: item.orgName,
              userName: item.userName,
              email: item.email,
              phone: item.phoneNumber,
              createdDate:
                new Date(`${item.createdAt}`).toISOString().substring(0, 10) +
                " " +
                new Date(`${item.createdAt}`).toLocaleTimeString("en", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                }),

              // Time stamp comparison to determine user status
              status:
                Date.parse(item.lastActiveDate) > Date.parse(item.createdAt)
                  ? "Active"
                  : "inactive",
            };
            renderData.push(newData);
            setData(renderData);
          });
        }
      } catch (error) {
        setHasError(error);
      }
    };
    getUsers();
  }, []);

  // JSX
  return (
    <>
      <div className="relative shadow-md rounded">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto ">
          <thead className="w-full text-xs text-gray-700 uppercase bg-white">
            <tr className="w-full">
              <th className="flex flex-row px-6 py-8 text-[14px] space-x-3 uppercase">
                <span>Organization</span>
                <button onClick={displayFilter}>
                  <img src={sort} alt="sort" />
                </button>
              </th>

              <th className="space-x-3 text-[14px] px-6 py-8 uppercase">
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
            {currentItem.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="relative bg-white border-b hover:bg-[#fefefe]"
                >
                  <td scope="row" className="px-6 py-4 font-medium">
                    {item.orgName}
                  </td>
                  <td className="px-6 py-4">{item.userName}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.createdDate}</td>
                  <td className="px-6 py-4">
                    <div
                      className={`mx-auto text-center p-2 rounded-full font-bold ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-500"
                          : "bg-[#eee] text-[#545f7d]"
                      }`}
                    >
                      <p>{item.status}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        setId(item.id);
                        displayFlyout();
                      }}
                      className="flex w-full items-center justify-center rounded-full p-1 py-3 hover:bg-[#F0FDF4]"
                    >
                      <img src={elipses} alt="ellipses"></img>
                    </button>

                    {/*================ Flyout menu on table================ */}
                  </td>
                </tr>
              );
            })}
            {showFlyout && (
              <div
                className={`absolute flex flex-col top-[${mousePos.y}px] items-center justify-start bg-white space-y-1 rounded-md -right-6`}
              >
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
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-row p-4 items-center justify-between">
        <div className="flex flex-row items-center space-x-2 w-full">
          <p>Showing</p>{" "}
          <select
            onChange={(e) => setItemPerPage(e.target.value)}
            className="bg-gray-50 border w-1/16 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 "
          >
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
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
          <div className="flex flex-row items-center justify-center space-x-2 p-2">
            {pagination}
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
