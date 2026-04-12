import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-[calc(100vh-116px)]">
        <div className="lg:container w-11/12 mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
