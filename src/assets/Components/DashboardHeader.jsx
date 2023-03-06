import React from "react";
import logo from "../../assets/images/logo.png";
import bell from "../../assets/images/ppo.png";
import profile from "../../assets/images/ppp.png";
import s1 from "../../assets/images/s1.png";
import d1 from "../../assets/images/d1.png";
import SideBar from "./SideBar";

const DashboardHeader = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between p-8 bg-[#fefefe]">
        <div>
          <img src={logo} alt="logo" className="w-36 h-8 ml-6" />
        </div>
        <div className="relative text-gray-700">
          <form>
            <input
              className="w-[300px] md:w-[500px] pl-4 h-10 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline md:p-6"
              type="email"
              placeholder="Search for anything"
              required
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center px-4 font-semibold text-white bg-[#39cdcc] rounded-r-lg hover:bg-green-500 focus:bg-gray-700"
            >
              <img src={s1} alt="search" />
            </button>
          </form>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <p>Docs</p>
          <img src={bell} alt="bell" />
          <div className="flex flex-row items-center justify-center space-x-2">
            <img src={profile} alt="profile" className="rounded-full" />
            <p>Akaneno Ekong</p>
            <img src={d1} alt="dropdown" />
          </div>
        </div>
      </div>
      <SideBar />
    </>
  );
};

export default DashboardHeader;
