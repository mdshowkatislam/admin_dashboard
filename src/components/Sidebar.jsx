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
    <div className="main-container ">
      <div className="text-white ">{FaBars}</div>
      <motion.div animate={{ width: "200px" }} className="sidebar">
        <div className="flex justify-around">
          <h1 className="logo">youcoderbd</h1>
          <div className="">{AiOutlineBars}</div>
        </div>
        <div>
          <div>{<BiSearch />}</div>
          <input placeholder="Search...." />
        </div>
        <section className="allroute">
          {allroute.map((item) => (
            <NavLink to={allroute.path} key={allroute.name}>
              <div className="">{item.icon}</div>
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
 