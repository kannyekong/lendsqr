import React from "react";
import logo from "../assets/images/logo.png";
import hero from "../assets/images/img.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [hide, setHide] = useState(false);
  const history = useHistory();
  const push = () => history.push("/dashboard/users", { replace: true });

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center md:min-h-screen md:mx-auto px-8 md:px-24">
        {/* 1 */}
        <div className="flex flex-col justify-center w-full space-y-36">
          {/* LOGO */}
          <div>
            <img
              src={logo}
              alt="logo"
              className="pt-8 md:pt-0 w-[10rem] mh-8 md:ml-6"
            />
          </div>

          {/* HERO IMAGE */}
          <div>
            <img
              src={hero}
              alt="logo"
              className=" hidden md:flex w-full h-full"
            />
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col w-full space-y-6 lg:px-0 xl:px-48 md:pt-24">
          <div className="space-y-4">
            <h3 className="font-bold avenirbold text-[40px] text-[#213f7D]">
              Welcome!
            </h3>
            <p className="font-[20px] avenir">Enter details to login.</p>
          </div>
          <div className="flex flex-col space-y-4 w-full">
            <input
              className="avenir appearance-none border rounded w-full py-3 px-3 text-gray-700 focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <div className="flex avenir flex-row items-center justify-between border-2 rounded-md px-2">
              <input
                className="block w-full px-3 py-3 focus:outline-none"
                type={hide === true ? "password" : "text"}
                placeholder="Password"
              />
              <div onClick={() => setHide(!hide)}>
                {hide ? (
                  <p className="uppercase text-teal-500 h-6 font-bold hover:cursor-pointer">
                    HIDE
                  </p>
                ) : (
                  <p className="uppercase text-teal-500 h-6 font-bold hover:cursor-pointer">
                    SHOW
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-8 pt-3">
              <p className="uppercase avenir font-bold text-teal-400">
                Forgot password?
              </p>
              <button
                onClick={push}
                className="w-full p-3 avenir text-white rounded-md text-center bg-teal-400"
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
