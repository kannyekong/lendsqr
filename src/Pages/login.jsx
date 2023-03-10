import React from "react";
import logo from "../assets/images/logo.png";
import hero from "../assets/images/img.png";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const push = () => history.push("/dashboard/users", { replace: true });

  return (
    <>
      <div className="flex flex-row items-center justify-center min-h-screen space-x-48">
        {/* 1 */}
        <div className="flex flex-col justify-center space-y-36">
          {/* LOGO */}
          <div className="">
            <img src={logo} alt="logo" className="w-[10rem] h-8 ml-6" />
          </div>

          {/* HERO IMAGE */}
          <div>
            <img src={hero} alt="logo" className="w-full h-full" />
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col  space-y-8">
          <div className="space-y-4">
            <h3 className="font-bold avenir text-[40px] text-[#213f7D]">
              Welcome!
            </h3>
            <p className="font-[20px] avenir">Enter details to login.</p>
          </div>
          <div className="space-y-4">
            <input
              className="shadow avenir appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
            />
            <input
              className="shadow avenir appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
            />
            <div className="space-y-8 pt-3">
              <p className="uppercase avenir font-bold">Forgot password?</p>
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
