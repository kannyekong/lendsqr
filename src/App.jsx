import { useState } from "react";
import "./App.css";
import logo from "./assets/images/logo.png";
import hero from "./assets/images/img.png";
import DashboardHeader from "./assets/Components/DashboardHeader";

function App() {
  return (
    <>
      <DashboardHeader />
    </>
    // <div className="flex flex-row items-center justify-center space-x-48">
    //   {/* 1 */}
    //   <div className="flex flex-col justify-center space-y-36">
    //     {/* LOGO */}
    //     <div className="">
    //       <img src={logo} alt="logo" className="w-36 h-8 ml-6" />
    //     </div>

    //     {/* HERO IMAGE */}
    //     <div>
    //       <img src={hero} alt="logo" className="w-full h-full" />
    //     </div>
    //   </div>
    //   {/* 2 */}
    //   <div className="flex flex-col pt-48 pb-24 space-y-8">
    //     <div className="space-y-4">
    //       <h3 className="font-extrabold text-[40px] text-[#213f7D]">
    //         Welcome!
    //       </h3>
    //       <p className="font-[20px]">Enter details to login.</p>
    //     </div>
    //     <div className="space-y-4">
    //       <input
    //         class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         type="text"
    //         placeholder="Email"
    //       />
    //       <input
    //         class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         type="password"
    //         placeholder="Password"
    //       />
    //       <p className="uppercase font-bold">Forgot password?</p>
    //       <button className="w-full p-3 text-white rounded text-center bg-teal-400">
    //         LOG IN
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
