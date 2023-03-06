import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col w-[89px] h-screen bg-deepgray border-r border-gray-200 fixed pt-20">
        {/*  */}
        <NavLink to="/admin/home" activeClassName="active" className="py-3">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-md">
              <img
                src={HomeIcon}
                alt="Account"
                className="w-[1.3rem] h-[1.3rem] sidebar-icons"
              />
            </div>
            <p className="text-[0.76rem] pt-1 text-white">Home</p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default SideBar;
