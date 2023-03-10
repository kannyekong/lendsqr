import React from "react";
import backArrow from "../images/backArrow.png";
import avatar2 from "../images/avatar2.png";
import ystar from "../images/ystar.png";
import wstar from "../images/wstar.png";
import { useHistory } from "react-router-dom";

const DashboardContentTwo = () => {
  const history = useHistory();
  const backHandler = () => {
    history.goBack();
  };

  // JSX
  return (
    <div className="p-16 w-full">
      <div className="space-y-8 min-w-full">
        <button
          onClick={backHandler}
          className="flex flex-row items-center justify-start space-x-3 transition duration-50 hover:-translate-x-2"
        >
          <img src={backArrow} alt="backArrow" />
          <p>Back to Users</p>
        </button>
        <div className="flex flex-row items-center justify-between">
          <p className="font-bold text-2xl">User Details</p>
          <div className="flex flex-row items-center justify-between space-x-4">
            <button className="p-2 px-4  border-4 border-red-500 rounded-md text-red-500 transition duration-50 hover:-translate-y-2">
              BlackList User
            </button>
            <button className="p-2 px-4 border-4 border-teal-500 rounded-md text-teal-500 transition duration-50 hover:-translate-y-2 ">
              Activate User
            </button>
          </div>
        </div>

        {/* Card 1  */}
        <div className="flex flex-row items-center min-w-screen">
          <div className="flex flex-col items-center justify-center w-full rounded-lg bg-white  shadow-md">
            <div className="flex flex-row items-center space-x-4 p-8  w-full ">
              <div className="flex flex-row items-center justify-center space-x-4 h-[100px] border-r">
                <img src={avatar2} alt="profile" className="w-1/4" />
                <div className="flex flex-col items-start space-y-2">
                  <p className="text-2xl font-bold">Grace Effiom</p>
                  <p>LSQF32412sW2</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center pr-4 space-y-2 h-[100px] border-r">
                <p className="text-xl font-semibold">User's Tier</p>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <img src={ystar} alt="yellow star" />
                  <img src={wstar} alt="white star" />
                  <img src={wstar} alt="white star" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center pr-4 space-y-2 h-[100px]">
                <p className="text-xl font-semibold">N200,000.00</p>
                <p>92131231231/Providus Bank</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full px-24">
              <div className="border-b-4 border-teal-500 px-6">
                <p>General Details</p>
              </div>
              <div>
                <p>Documents</p>
              </div>
              <div>
                <p>Bank Details</p>
              </div>
              <div>
                <p>Loans</p>
              </div>
              <div>
                <p>Savings</p>
              </div>
              <div>
                <p>App and System</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-row items-center min-w-screen">
          <div className="flex flex-col items-start justify-center w-full bg-white shadow-md rounded-lg px-8">
            {/*  */}
            <div className="w-full p-4 border-b space-y-3">
              <p className="pt-4 font-bold">Personal Information</p>
              <div className="grid grid-cols-1  md:w-full md:space-y-0 md:gap-y-12  gap-x-even md:gap-x-12 md:grid-cols-5">
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Full Name</p>
                  <p className="font-semibold">Grace Effiom</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Phone</p>
                  <p className="font-semibold">08133234234</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Email</p>
                  <p className="font-semibold">grace@gmail.com</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">BVN</p>
                  <p className="font-semibold">90382138123</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Gender</p>
                  <p className="font-semibold">Female</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Marital Status</p>
                  <p className="font-semibold">Single</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Children</p>
                  <p className="font-semibold">3</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Type of residence</p>
                  <p className="font-semibold">Personal Apartment</p>
                </div>
              </div>
            </div>

            <div className="w-full p-4 border-b space-y-3">
              <p className="pt-4 font-bold">Education and Employment</p>
              <div className="grid grid-cols-1  md:w-full md:space-y-0 md:gap-y-12 gap-x-even md:gap-x-12 md:grid-cols-5">
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Level of Education</p>
                  <p className="font-semibold">Bsc</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Employment Status</p>
                  <p className="font-semibold">08133234234</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Sector of employment</p>
                  <p className="font-semibold">Fintech</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Duration of Employment</p>
                  <p className="font-semibold">2 Years</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Office Email</p>
                  <p className="font-semibold">grace@gmail.com</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Monthly income</p>
                  <p className="font-semibold">N200,000 - 400,000</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Loan repayment</p>
                  <p className="font-semibold">40,000</p>
                </div>
              </div>
            </div>
            <div className="w-full p-4 border-b space-y-3">
              <p className="pt-4 font-bold">Socials</p>
              <div className="grid grid-cols-1 md:w-full md:space-y-0 md:gap-y-12 gap-x-even md:gap-x-12 md:grid-cols-5">
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Twitter</p>
                  <p className="font-semibold">Bsc</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">FaceBook</p>
                  <p className="font-semibold">08133234234</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Instagram</p>
                  <p className="font-semibold">Fintech</p>
                </div>
              </div>
            </div>
            {/* Guarantor */}
            <div className="w-full p-4  space-y-3 pb-12">
              <p className="pt-4 font-bold">Guarantor</p>
              <div className="grid grid-cols-1 md:w-full md:space-y-0 md:gap-y-12  gap-x-even md:gap-x-12 md:grid-cols-5">
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Fullname</p>
                  <p className="font-semibold">Olamide adedeji</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Phone</p>
                  <p className="font-semibold">08133234234</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Email Address</p>
                  <p className="font-semibold">olamide@gmail.com</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Relationship</p>
                  <p className="font-semibold">Brother</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContentTwo;
