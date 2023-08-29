import React, { useState } from "react";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isOpen, setIsOpen] = useState(false);
  const togleShow = () => setIsOpen(!isOpen);
  const inputMotion = {
    hide: { width: 0, padding: 0, opacity: 0, transition: { duration: 0.2 } },
    show: {
      width: "150px",
      padding: "2px 2px",
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };
  const togleMotion = {
    hide: { width: 0, opacity: 0, transition: { duration: 0.2 } },
    show: {
      width: "auto",

      opacity: 1,
      transition: { duration: 0.2 },
    },
  };
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
    <div className="flex main-container">
      <motion.div
        animate={{ width: isOpen ? "200px" : "46px" }}
        className="h-screen text-white sidebar bg-gradient-to-br from-blue-900 to-black"
      >
        <div className="flex justify-between h-12 gap-3 p-3 text-lg transition ease-linear duration-250 hover:animate-pulse item-center hover:border-white tansition hover:text-lg hover:shadow-md hover:shadow-white hover:bg-slate-800">
          {isOpen && (
            <AnimatePresence>
              <motion.h1
                initial="hide"
                animate="show"
                exit="hide"
                variants={togleMotion}
                className=""
              >
                youcoderbd
              </motion.h1>
            </AnimatePresence>
          )}

          <div className="mt-1 transition-all ease-linear hover:animate-spin hover:border-white hover:scale-125">
            <FaBars onClick={togleShow} />
          </div>
        </div>
        <div className="flex justify-between h-12 gap-3 p-2 text-lg transition ease-linear duration-250 item-center hover:border-white tansition hover:text-lg hover:shadow-md hover:shadow-white hover:bg-slate-800">
          <div className="items-center mt-2 text-lg transition-all ease-linear hover:scale-150 ">
            {<BiSearch />}
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hide"
                animate="show"
                exit="hide"
                variants={inputMotion}
                placeholder="Search...."
                className="w-40 p-2 rounded-md bg-slate-50 focus:outline-none"
              />
            )}
          </AnimatePresence>
        </div>

        <section className="allroute ">
          {allroute.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className="flex h-12 gap-3 p-2 text-lg transition-all ease-linear hover:animate-pulse duration-250 item-center hover:border-r-8 hover:bg-slate-800 hover:border-white tansition hover:shadow-md hover:shadow-white"
            >
              <div className="p-1 ase-linear ptransition hover:scale-125">
                {item.icon}
              </div>

              <AnimatePresence>
                <motion.div
                  initial="hide"
                  animate="show"
                  exit="hide"
                  variants={togleMotion}
                  className=""
                >
                  {item.name}
                </motion.div>
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>

      <main className="text-black ">{children}</main>
    </div>
  );
};

export default Sidebar;
