import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaBars } from "react-icons/fa";
import {
  MdMessage,
  MdEditAttributes,
  MdOutlineCategory,
  MdOutlineEditAttributes,
} from "react-icons/md";
import { TfiSettings } from "react-icons/tfi";


import {
  BsCcCircle,
  BsFillArrowDownSquareFill,
  BsChevronDoubleDown,
} from "react-icons/bs";
import { SiHomeassistant } from "react-icons/si";
import { RiProductHuntLine } from "react-icons/ri";
import { FcServices, FcFlowChart } from "react-icons/fc";
import { AiOutlineFlag } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";

import { GrUserAdmin } from "react-icons/gr";
import { PiUsersThreeLight } from "react-icons/pi";

import { SiAtandt } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import "../App.css";

import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [subMenu, setSubMenu] = useState(false);

  const togleSubMenu = () => setSubMenu(!subMenu);
  const togleShow = () => setIsOpen(!isOpen);
  //AnimatePresence object for sidebar input section
  const inputMotion = {
    hide: { width: 0, padding: 0, opacity: 0, transition: { duration: 0.2 } },
    show: {
      width: "150px",
      padding: "2px 2px",
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };
  //AnimatePresence object for sidebar navigation link items section
  const togleMotion = {
    hide: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
    show: {
      width: "auto",

      opacity: 1,
      transition: { duration: 0.2 },
    },
  };
  // all the sidebar items object file
  const allroute = [
    { path: "/", name: "dashboard", icon: <FaHome /> },

    { path: "/categories", name: "Categories", icon: <MdOutlineCategory /> },

    {
      name: "Attributes",

      icon: <FcFlowChart />,
      subManu: [
        {
          path: "/attributes_1",
          name: "Attributes_1",
          icon: <MdOutlineEditAttributes />,
        },
        {
          path: "/attributes_2",
          name: "Attributes_2",
          icon: <MdEditAttributes />,
        },
      ],
    },
    { path: "/products ", name: "Products ", icon: <RiProductHuntLine /> },
    {
      path: "/home_banner",
      name: "HomeBanner",
      icon: <AiOutlineFlag />,
    },

    {
      path: "/home_categories",
      name: "HomeCategories",
      icon: <SiHomeassistant />,
    },
    { path: "/sale_setting", name: "SaleSetting", icon: <FcServices /> },
    { path: "/coupon", name: "Coupon", icon: <BsCcCircle /> },
    { path: "/orders", name: "Orders", icon: <BsCart4 /> },
    { path: "/contact_messages", name: "ContactMessages", icon: <MdMessage /> },
    { path: "/settings", name: "Settings  ", icon: <TfiSettings /> },

    { path: "/users", name: "Users", icon: <PiUsersThreeLight /> },
  ];
  return (
    <section className="flex main-container">
      <motion.div
        animate={{ width: isOpen ? "200px" : "46px" }}
        className="h-screen text-white sidebar bg-gradient-to-br from-blue-900 to-black"
      >
        <section className="flex justify-between h-12 p-3 text-lg transition ease-linear duration-250 hover:animate-pulse item-center hover:border-white tansition hover:text-lg hover:shadow-md hover:shadow-white hover:bg-slate-800">
          {isOpen && (
            <AnimatePresence>
              <motion.div
                initial="hide"
                animate="show"
                exit="hide"
                variants={togleMotion}
                className="flex gap-2 "
              >
                <SiAtandt className="w-8 h-6 mt-1 " />
                <div className="">youcoderbd</div>
              </motion.div>
            </AnimatePresence>
          )}

          <div className="mt-1 transition-all ease-linear hover:animate-spin hover:border-white hover:scale-125">
            <FaBars onClick={togleShow} />
          </div>
        </section>
        {/* search input section  */}
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

        {/* --------------------------all the sidebar links---------------------- */}

        {allroute.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className=" flex h-12 gap-1 p-1 mt-2 ml-1 text-lg ease-linear trasition-all duration-250 item-center hover:border-r-8 hover:bg-slate-800 hover:border-white tansition hover:shadow-md hover:shadow-white"
          >
            <span className="flex flex-wrap p-1 transition ease-linear hover:scale-125 hover:animate-pulse ">
              {item.icon}
            </span>

            <AnimatePresence className="relative">
              <motion.div
                initial="hide"
                animate="show"
                exit="hide"
                variants={togleMotion}
              >
                <span className="p-2 transition ease-linear hover:scale-125 hover:animate-pulse ">
                  {item.name}
                </span>
                <span className="relative flex-col inline-block  ml-2 ">
                  {item.subManu && (
                    <BsChevronDoubleDown
                      className={`${subMenu && "rotate-180"}`}
                      onClick={() => setSubMenu(!subMenu)}
                    />
                  )}
                </span>

                {item.subManu && subMenu && open && (
                  <motion.div
                    className="mt-4 absolute h-[100px]"
                    initial="hide"
                    animate="show"
                    exit="hide"
                    variants={togleMotion}
                  >
                    {item.subManu.map((smenu, idx) => (
                      <NavLink
                        key={idx}
                        to={smenu.path}
                        v
                        className="flex gap-2 h-10 px-2 mt-1 text-center text-white transition ease-linear bg-gradient-to-br from-slate-900 to-black rounded-md cursor-pointer w-36 "
                      >
                        <span className=" transition ease-linear hover:scale-125 hover:animate-pulse  mt-2 text-2xl ">
                          {smenu.icon}
                        </span>
                        <span className=" mt-1 transition ease-linear hover:scale-90 opasity-10 ">
                          {smenu.name}
                        </span>
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </NavLink>
        ))}
      </motion.div>

      <main className="text-black ">{children}</main>
    </section>
  );
};

export default Sidebar;
