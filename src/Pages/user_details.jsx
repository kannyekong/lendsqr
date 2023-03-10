import React from "react";
import DashboardHeader from "../assets/Components/DashboardHeader";
import SideBar from "../assets/Components/SideBar";
import DashboardContentTwo from "../assets/Components/DashboardContentTwo";

const UserDetails = () => {
  return (
    <div className="bg-[#f7fcfc]">
      <div>
        <DashboardHeader />
      </div>
      <div className="flex flex-row items-start justify-start">
        <SideBar />
        <DashboardContentTwo />
      </div>
    </div>
  );
};

export default UserDetails;
