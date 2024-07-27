import React from "react";
import { navBarData } from "../data/NavbarData";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-2/3">
        <div className="mt-10">
          <h3 className="text-2xl font-bold border-b-4 border-black text-center">
            Jeevanandham S
          </h3>
        </div>
        <div className="mt-10">
          {navBarData.map((menu, index) => (
            <Link to={menu}>
              <h3
                key={index}
                className="font-semibold shadow-md rounded border-2 border-gray-800 mb-3 p-2 text-center hover:bg-blue-400 hover:text-white hover:translate-x-2 duration-300"
              >
                {menu}
              </h3>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-1/3">
        <p className="border-b-4 border-gray-800 mb-10 mt-10 w-[250px]"></p>
        <div className=" flex justify-evenly text-xl">
          <span title="" className="cursor-pointer border-2 rounded border-gray-800 hover:bg-blue-400 hover:text-white hover:-translate-y-2 duration-300 shadow-md p-3">
            <FaTwitter />
          </span>
          <span className="cursor-pointer border-2 rounded border-gray-800 hover:bg-blue-400 hover:text-white hover:-translate-y-2 duration-300 shadow-md p-3">
            <FaLinkedinIn />
          </span>
          <span className="cursor-pointer border-2 rounded border-gray-800 hover:bg-blue-400 hover:text-white hover:-translate-y-2 duration-300 shadow-md p-3">
            <TbBrandGithubFilled />
          </span>
        </div>
        <div className="mt-4 text-center">
          <span className="text-gray-700">&copy;2024 Jeevanandham S</span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
