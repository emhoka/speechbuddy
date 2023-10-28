import React from "react";
import { Link } from "react-router-dom";
import redLogo from "../../assets/images/red-logo.png";
import Button from "../widget/Button";
import Schedule from "../svg/Schedule";
import Settings from "../svg/Settings";
import Reports from "../svg/Reports";
import UserSvg from "../svg/UserSvg";
import Logout from "../svg/Logout";
import userProfileImage from "../../assets/images/girl-doing-homework-or-online-education.png";
const Sidebar = () => {
  const boxShadow = {
    boxShadow: "0 45px 80px -15px rgba(255, 228, 225, 1)",
  };
  return (
    <div
      className="p-2 bg-white w-full md:w-60 flex flex-col md:flex rounded-r-3xl fixed top-0 left-0 overflow-y-auto mb-40"
      style={boxShadow}
      id="sideNav"
    >
      <div className="flex items-center pt-12 pb-20">
        <div className="flex items-center">
          <img src={redLogo} alt="Logo" className="px-8 mt-16" />
        </div>
      </div>
      <nav  className="flex-col justify-start items-start gap-4 flex px-6 mb-20 w-full" >
          <Link to="/therapist/dashboard" className="w-full flex items-center text-base font-semibold break-words py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r bg-meroon text-white hover:from-meroon hover:to-meroon hover:text-white">
            <UserSvg />
            <span className="ml-2 text-base font-bold">Students</span>
          </Link>
          <Link to="/therapist/emptyplaceholder" className="w-full flex items-center text-base font-semibold break-words text-gray-800 py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-meroon hover:to-meroon hover:text-white">
            <Schedule />
            <span className="ml-2 text-base font-bold">Schedule</span>
          </Link>
          <Link to="/therapist/emptyplaceholder" className="w-full flex items-center text-base font-semibold break-words text-gray-800 py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-meroon hover:to-meroon hover:text-white">
            <Reports />
            <span className="ml-2">Report</span>
          </Link>
          <Link to="/therapist/emptyplaceholder" className="w-full flex items-center text-base font-semibold break-words text-gray-800 py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-meroon hover:to-meroon hover:text-white">
            <Settings />
            <span className="ml-2">Settings</span>
          </Link>
      </nav>

      <div className="py-1 bg-red-100 bg-opacity-25 rounded-xl border border-red-100 flex-col justify-start items-center flex">
        <div className="w-40 pl-4 pr-5 pt-2 pb-3 justify-start items-center gap-3 inline-flex">
          <div className="w-7 h-7 relative">
            <img
              className="w-7 h-7 left-0 top-0 absolute bg-zinc-300 rounded-full"
              src={userProfileImage}
            />
          </div>
          <div className="flex-col justify-center items-start inline-flex">
            <div className="text-center text-black text-base font-bold ">
              Michelle
            </div>
            <div className="text-center text-meroon text-xs font-bold ">
              Therapist
            </div>
          </div>
        </div>
        <div className="w-32 h-px border border-red-100"></div>
        <Button
          buttonText="Logout"
          icon={<Logout />}
          className="bg-transparent hover:bg-transparent text-black text-base font-semibold"
        />
      </div>
    </div>
  );
};
export default Sidebar;
