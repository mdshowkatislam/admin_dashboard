import React from "react";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Categories from "./pages/Categories";

import ContactMessages from "./pages/ContactMessages";
import Coupon from "./pages/Coupon";
import HomeCategories from "./pages/HomeCategories";
import HomeBanner from "./pages/HomeBanner";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import SaleSetting from "./pages/SaleSetting";

import Attributes_1 from "./pages/Attributes_1";
import Attributes_2 from "./pages/Attributes_2";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/attributes_1" element={<Attributes_1 />} />
          <Route path="/attributes_2" element={<Attributes_2 />} />
          <Route path="/products" element={<Products />} />
          <Route path="/home_banner" element={<HomeBanner />} />
          <Route path="/home_categories" element={<HomeCategories />} />
          <Route path="/sale_setting" element={<SaleSetting />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contact_messages" element={<ContactMessages />} />

          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />

          <Route path="*" element={<>not Found</>} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default App;
