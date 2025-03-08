import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import mainbg from "../src/assets/mainbg2.jpg"

const Layout = () => {
  return (
    <div className="w-screen bg-black min-h-screen overflow-hidden bg-cover " style={{ backgroundImage: `url(${mainbg})` }}>
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
