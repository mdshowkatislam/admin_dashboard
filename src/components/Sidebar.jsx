import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { FaHome, FaBars, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch, BiCog } from "react-icons/bi";

import {
  AiFillHeart,
  AiTwotoneFileExclamation,
  AiOutlineBars,
} from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  // all the sidebar items object file
  const allroute = [
    { path: "/", name: "Home", icon: <FaHome /> },

    { path: "/analytices", name: "Analytices", icon: <BiAnalyse /> },
    { path: "/users", name: "Users", icon: <FaUser /> },
    { path: "/messages", name: "Messages", icon: <MdMessage /> },
    {
      path: "/fileManager",
      name: "FileManager",
      icon: <AiTwotoneFileExclamation />,
    },
    { path: "/order", name: "Order", icon: <BsCartCheck /> },
    { path: "/saved", name: "Saved ", icon: <AiFillHeart /> },
    { path: "/settings", name: "Settings  ", icon: <BiCog /> },
  ];
  return (
    <div className=" main-container">
      <motion.div
        animate={{ width: "200px" }}
        className="h-screen text-white sidebar bg-gradient-to-br from-blue-900 to-black"
      >
        <div className="flex justify-between h-12 gap-3 p-2 text-lg transition ease-linear duration-250 item-center hover:border-white tansition hover:text-lg hover:shadow-md hover:shadow-white hover:bg-slate-800">
          <h1 className="">youcoderbd</h1>
          <div className="mt-1 transition-all ease-linear hover:border-white hover:scale-125">
            <FaBars />
          </div>
        </div>
        <div className="flex justify-between h-12 gap-3 p-2 text-lg transition ease-linear duration-250 item-center hover:border-white tansition hover:text-lg hover:shadow-md hover:shadow-white hover:bg-slate-800">
          <div className="items-center mt-2 text-lg transition-all ease-linear hover:scale-150 ">
            {<BiSearch />}
          </div>
          <input
            placeholder="Search...."
            className="w-40 p-2 rounded-md bg-slate-50 focus:outline-none"
          />
        </div>
        <section className="allroute ">
          {allroute.map((item) => (
            <NavLink
              to={allroute.path}
              key={allroute.name}
              className="flex h-12 gap-3 p-2 text-lg transition-all ease-linear duration-250 item-center hover:border-r-8 hover:bg-slate-800 hover:border-white tansition hover:shadow-md hover:shadow-white"
            >
              <div className="p-1 ase-linear ptransition hover:scale-125">
                {item.icon}
              </div>
              <div className="">{item.name}</div>
            </NavLink>
          ))}
        </section>
      </motion.div>

      <main className="text-black bg-red-600">{children}</main>
    </div>
  );
};

export default Sidebar;
 