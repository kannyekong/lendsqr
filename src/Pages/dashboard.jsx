import React from "react";
import DashboardContent from "../assets/Components/DashboardContents";
import Filter from "../assets/Components/FilterDetails";
import DashboardHeader from "../assets/Components/DashboardHeader";
import SideBar from "../assets/Components/SideBar";

const Dashboard = () => {
  return (
    <div className="bg-[#f7fcfc]">
      <div>
        <DashboardHeader />
      </div>
      <div className="flex flex-row items-start justify-start">
        <SideBar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
