import React from "react";
import logo from "../assets/images/logo.png";
import notFound from "../assets/images/notFound.gif";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  const goToLogin = () => history.push("/", { replace: true });
  return (
    <>
      <div className="flex flex-row items-start justify-between p-8 bg-slate-50">
        <img src={logo} alt="logo" className="w-48" />
        <button
          onClick={goToLogin}
          className="p-2 px-6 bg-blue-50 text-blue-800 rounded-full border-blue-800 border"
        >
          Go To Login
        </button>
      </div>
      <div className="flex flex-col space-y-4 items-center justify-start min-h-screen mx-auto font-extrabold open-sans text-blue-800 text-5xl">
        <img src={notFound} alt="404" />
        <p>Oops! Page Not Found!</p>
      </div>
    </>
  );
};

export default NotFound;
