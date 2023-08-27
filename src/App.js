import React from "react";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";

import Users from "./pages/Users";
import Messages from "./pages/Messages";
import Analytices from "./pages/Analytices";
import FileManager from "./pages/FileManager";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages " element={<Messages />} />
          <Route path="/analytices" element={<Analytices />} />
          <Route path="/fileManager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<>not Found</>} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default App;
