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
import loanp from "../../assets/images/loanp.png";
import services from "../../assets/images/services.png";
import serviceaccount from "../../assets/images/serviceaccount.png";
import settlement from "../../assets/images/settlement.png";
import report from "../../assets/images/reports.png";
import preference from "../../assets/images/preferences.png";
import feesnprices from "../../assets/images/feesnprices.png";
import smessages from "../../assets/images/smessages.png";
import auditlog from "../../assets/images/alog.png";
import logout from "../../assets/images/logout.png";

import { NavLink, Router } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col w-[300px] bg-white">
        {/*  */}
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2">
            <img src={briefcase} alt="icon" />
            <p>Switch Organization</p>
            <img src={arrowDown} alt="icon" />
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-8">
          <div className="flex flex-row p-2 items-center justify-start pl-8 space-x-2">
            <img src={home} alt="icon" />
            <p>Dashboard</p>
          </div>
        </div>
        <div className="flex items-center justify-start ml-8 py-3">
          <p className="font-bold text-[12px]">CUSTOMERS</p>
        </div>

        {/* ONLY ACTIVE CLASS WITH CSS DESIGN */}
        <div to="/admin/home" activeClassName="active" className="">
          <div className="flex flex-row items-center border-l-4 p-2 bg-green-50 border-l-teal-500 justify-start pl-8 space-x-2">
            <img src={users} alt="icon" />
            <p className="text-[16px]">Users</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={guarantors} alt="icon" />
            <p>Guarantors</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={sack} alt="icon" />
            <p>Loans</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center  p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={hand} alt="icon" />
            <p>Decision Models</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={piggy} alt="icon" />
            <p>Savings</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex p-2 flex-row items-center justify-start pl-8 space-x-2 sideBarHover">
            <img src={loanp} alt="icon" />
            <p>Loan Requests</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex p-2 flex-row items-center justify-start pl-8 space-x-2 sideBarHover">
            <img src={whitelist} alt="icon" />
            <p>Whitelist</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex p-2 flex-row items-center justify-start pl-8 space-x-2 sideBarHover">
            <img src={usertimes} alt="icon" />
            <p>Karma</p>
          </div>
        </div>

        <div className="flex items-center justify-start ml-8 pt-6 pb-3">
          <p className="font-bold text-[12px]">BUSINESSES</p>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={briefcase} alt="icon" />
            <p>Organization</p>
          </div>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={loanp} alt="icon" />
            <p>Loan Products</p>
          </div>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={bank} alt="icon" />
            <p>Saving Products</p>
          </div>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={coins} alt="icon" />
            <p>Fees and Charges</p>
          </div>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={coins} alt="icon" />
            <p>Transactions</p>
          </div>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={services} alt="icon" />
            <p>Services</p>
          </div>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={serviceaccount} alt="icon" />
            <p>Service Account</p>
          </div>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={settlement} alt="icon" />
            <p>Settlements</p>
          </div>
        </div>
        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={report} alt="icon" />
            <p>Reports</p>
          </div>
        </div>

        <div className="flex items-center justify-start text-[12px] ml-8 pt-6 pb-3">
          <p className="font-bold">SETTINGS</p>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={preference} alt="icon" />
            <p>Preferences</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={feesnprices} alt="icon" />
            <p>Fees and Pricing</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={auditlog} alt="icon" />
            <p>Audit Logs</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center p-2 justify-start pl-8 space-x-2 sideBarHover">
            <img src={smessages} alt="icon" />
            <p>System Messages</p>
          </div>
        </div>

        <div to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-row items-center justify-start pl-8 space-x-2 hover:cursor-pointer">
            <img src={logout} alt="icon" />
            <p>Logout</p>
          </div>
        </div>

        <div className="flex items-center justify-start ml-8 pt-6 pb-3">
          <p className="font-bold">v1.2.0</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
