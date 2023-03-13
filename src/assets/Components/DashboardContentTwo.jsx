import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../store/BaseUrl";
import backArrow from "../images/backArrow.png";
import ystar from "../images/ystar.png";
import wstar from "../images/wstar.png";

const DashboardContentTwo = () => {
  const [data, setData] = useState({});
  const [hasError, setHasError] = useState("");
  const history = useHistory();
  const backHandler = () => {
    history.goBack();
  };

  useEffect(() => {
    // Get user ID stored in local storage
    const id = localStorage.getItem("userid");

    const getUser = async () => {
      const requestOptions = {
        method: "GET",
      };
      try {
        const response = await fetch(
          BaseUrl + `api/v1/users/${id}`,
          requestOptions
        );
        const result = await response.json();
        if (!response.ok) {
          throw new error("A problem occured");
        } else {
          const newData = {
            id: result.id,
            orgName: result.orgName,
            userName: result.userName,
            email: result.email,
            phone: result.phoneNumber,
            firstname: result.profile.firstName,
            lastname: result.profile.lastName,
            phoneNumber: result.profile.phoneNumber,
            avatar: result.profile.avatar,
            gender: result.profile.gender,
            bvn: result.profile.bvn,
            address: result.profile.address,
            currency: result.profile.currency,
            gName: result.guarantor.firstName,
            glName: result.guarantor.lastName,
            gPhone: result.guarantor.phoneNumber,
            gGender: result.guarantor.gender,
            gAddress: result.guarantor.address,
            accBal: result.accountBalance,
            accNo: result.accountNumber,
            facebook: result.socials.facebook,
            instagram: result.socials.instagram,
            twitter: result.socials.twitter,
            educationLevel: result.education.level,
            empStatus: result.education.employmentStatus,
            sector: result.education.sector,
            duration: result.education.duration,
            officeMail: result.education.officeEmail,
            monthlyIncomeOne: result.education.monthlyIncome[0],
            monthlyIncomeTwo: result.education.monthlyIncome[1],
            loanRepayment: result.education.loanRepayment,
          };

          setData(newData);
        }
      } catch (error) {
        setHasError(error);
      }
    };
    getUser();
  }, []);

  // JSX
  return (
    <div className="p-8 md:p-16 w-full">
      <div className="space-y-8 min-w-full">
        <button
          onClick={backHandler}
          className="flex flex-row items-center justify-start space-x-3 transition duration-50 hover:-translate-x-2"
        >
          <img src={backArrow} alt="backArrow" />
          <p>Back to Users</p>
        </button>
        <div className="flex flex-row items-center justify-between">
          <p className="font-bold md:text-2xl">User Details</p>

          {/* Error todisplay if there is an HTTP error when fetching data */}
          {hasError && (
            <div className="flex flex-ro{w item-center justify-center p-2 bg-red-400 w-full md:w-1/2 md:mx-auto rounded-md text-white mb-4">
              <p>
                An error of <b>"{`${hasError}`}"</b> occured. Try again.
              </p>
            </div>
          )}
          {data.length === 0 && (
            <div className="flex flex-row item-center justify-center text-center p-2 bg-teal-400 w-full md:w-1/2 md:mx-auto rounded-md text-white mb-4">
              <p>Loading user profile. Please wait...</p>
            </div>
          )}
          <div className="flex flex-row items-center justify-between space-x-4">
            <button className="p-2 md:px-4 uppercase font-semibold work-sans border md:border-4 border-red-500 rounded-md text-red-500 transition duration-50 hover:-translate-y-2">
              BlackList User
            </button>
            <button className="p-2 md:px-4 font-semibold work-sans border uppercase md:border-4 border-teal-500 rounded-md text-teal-500 transition duration-50 hover:-translate-y-2 ">
              Activate User
            </button>
          </div>
        </div>

        {/* Card 1  */}
        <div className="flex flex-row items-center min-w-screen">
          <div className="flex flex-col items-center justify-center w-full rounded-lg bg-white  shadow-md">
            <div className="flex flex-col md:flex-row items-center space-x-4 p-8  w-full ">
              <div className="flex flex-row items-center justify-center space-x-4 h-[100px] md:border-r">
                <img
                  src={data.avatar}
                  alt="profile"
                  className="w-1/4 rounded-full"
                />
                <div className="flex flex-col items-start space-y-2">
                  <p className="text-2xl font-bold">
                    {data.firstname + " " + data.lastname}
                  </p>
                  <p>{data.accNo}</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center pr-4 space-y-2 h-[100px] md:border-r">
                <p className="text-xl font-semibold">User's Tier</p>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <img src={ystar} alt="yellow star" />
                  <img src={wstar} alt="white star" />
                  <img src={wstar} alt="white star" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center pr-4 space-y-2 h-[100px]">
                <p className="text-xl font-semibold">
                  {data.currency + " " + data.accBal}
                </p>
                <p>{data.bvn}/Providus Bank</p>
              </div>
            </div>
            <div className="hidden md:flex flex-row items-center justify-between w-full px-24">
              <div className="border-b-4 border-teal-500 px-6">
                <p>General Details</p>
              </div>
              <div className="userDetailHover px-6">
                <p>Documents</p>
              </div>
              <div className="userDetailHover px-6">
                <p>Bank Details</p>
              </div>
              <div className="userDetailHover px-6">
                <p>Loans</p>
              </div>
              <div className="userDetailHover px-6">
                <p>Savings</p>
              </div>
              <div className="userDetailHover px-6">
                <p>App and System</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center min-w-screen">
          <div className="flex flex-col justify-center w-full bg-white shadow-md rounded-lg px-8">
            {/*  */}
            <div className="w-full p-4 border-b space-y-3">
              <p className="pt-4 font-bold">Personal Information</p>
              <div className="grid grid-cols-1  md:w-full md:space-y-0 md:gap-y-12  gap-x-even md:gap-x-12 md:grid-cols-5">
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Full Name</p>
                  <p className="font-semibold">
                    {data.firstname + " " + data.lastname}
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Phone</p>
                  <p className="font-semibold">{data.phone}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Email</p>
                  <p className="font-semibold">{data.email}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">BVN</p>
                  <p className="font-semibold">{data.bvn}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Gender</p>
                  <p className="font-semibold">{data.gender}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Marital Status</p>
                  <p className="font-semibold">
                    {data.maritalStatus === undefined
                      ? "N/A"
                      : data.maritalStatus}
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Children</p>
                  <p className="font-semibold">
                    {data.children === undefined ? "N/A" : data.maritalStatus}
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Type of residence</p>
                  <p className="font-semibold">
                    {data.residence === undefined ? "N/A" : data.residence}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full p-4 border-b space-y-3">
              <p className="pt-4 font-bold">Education and Employment</p>
              <div className="grid grid-cols-1  md:w-full md:space-y-0 md:gap-y-12 gap-x-even md:gap-x-12 md:grid-cols-5">
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Level of Education</p>
                  <p className="font-semibold">{data.educationLevel}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Employment Status</p>
                  <p className="font-semibold">{data.empStatus}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Sector of employment</p>
                  <p className="font-semibold">{data.sector}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Duration of Employment</p>
                  <p className="font-semibold">{data.duration}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Office Email</p>
                  <p className="font-semibold">{data.officeMail}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Monthly income</p>
                  <p className="font-semibold">
                    {" "}
                    {data.income === undefined ? "N/A" : data.income}
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Loan repayment</p>
                  <p className="font-semibold">
                    {data.currency + "  " + data.loanRepayment}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-4 border-b space-y-3">
              <p className="pt-4 font-bold">Socials</p>
              <div className="grid grid-cols-1 md:w-full md:space-y-0 md:gap-y-12 gap-x-even md:gap-x-12 md:grid-cols-5">
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Twitter</p>
                  <p className="font-semibold">{data.twitter}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">FaceBook</p>
                  <p className="font-semibold">{data.facebook}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Instagram</p>
                  <p className="font-semibold">{data.instagram}</p>
                </div>
              </div>
            </div>
            {/* Guarantor */}
            <div className="w-full p-4  space-y-3 pb-12">
              <p className="pt-4 font-bold">Guarantor</p>
              <div className="grid grid-cols-1 md:w-full md:space-y-0 md:gap-y-12  gap-x-even md:gap-x-12 md:grid-cols-5">
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Fullname</p>
                  <p className="font-semibold">
                    {data.gName + "  " + data.glName}
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Phone</p>
                  <p className="font-semibold">{data.gPhone}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Address</p>
                  <p className="font-semibold">{data.address}</p>
                </div>
                <div className="flex flex-col items-start justify-start space-y-1">
                  <p className="uppercase">Relationship</p>
                  <p className="font-semibold">
                    {" "}
                    {data.relationship === undefined
                      ? "N/A"
                      : data.relationship}
                  </p>
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
