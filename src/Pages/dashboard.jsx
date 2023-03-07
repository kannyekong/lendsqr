import React from "react";
import DashboardContent from "../assets/Components/DashboardContents";
import DashboardHeader from "../assets/Components/DashboardHeader";
import SideBar from "../assets/Components/SideBar";

const Dashboard = () => {
  return (
    <>
      <div>
        <DashboardHeader />
      </div>
      <div className="flex flex-row items-start justify-start">
        <SideBar />
        <DashboardContent />
      </div>
    </>
  );
};

export default Dashboard;
