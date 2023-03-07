import React from "react";
import briefcase from "../../assets/images/briefcase 1.png";
import home from "../../assets/images/home 1.png";
import hand from "../../assets/images/hand.png";
import piggy from "../../assets/images/piggy.png";
import usertimes from "../../assets/images/usertimes.png";
import guarantors from "../../assets/images/guar.png";
import whitelist from "../../assets/images/whitelist.png";
import sack from "../../assets/images/sack 1.png";
import users from "../../assets/images/user-friends 1.png";
import arrowDown from "../../assets/images/v11.png";
import bank from "../../assets/images/bank.png";
import coins from "../../assets/images/coins.png";

import { NavLink, Router } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col w-[300px] h-screen bg-white">
        {/*  */}
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={briefcase} alt="icon" />
            <p>Switch Organization</p>
            <img src={arrowDown} alt="icon" />
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-8">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={home} alt="icon" />
            <p>Dashboard</p>
          </div>
        </div>
        <div className="flex items-center justify-start ml-8 py-3">
          <p className="font-bold">CUSTOMERS</p>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={users} alt="icon" />
            <p className="text-[16px]">Users</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={guarantors} alt="icon" />
            <p>Guarantors</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={sack} alt="icon" />
            <p>Loans</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={hand} alt="icon" />
            <p>Decision Models</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={piggy} alt="icon" />
            <p>Savings</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={briefcase} alt="icon" />
            <p>Loan Requests</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={whitelist} alt="icon" />
            <p>Whitelist</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={usertimes} alt="icon" />
            <p>Karma</p>
          </div>
        </div>

        <div className="flex items-center justify-start ml-8 pt-6 pb-3">
          <p className="font-bold">BUSINESSES</p>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={briefcase} alt="icon" />
            <p>Organization</p>
          </div>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={briefcase} alt="icon" />
            <p>Loan Products</p>
          </div>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={bank} alt="icon" />
            <p>Saving Products</p>
          </div>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={coins} alt="icon" />
            <p>Fees and Charges</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
