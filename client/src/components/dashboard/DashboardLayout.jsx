import React from "react";
import DashboardSideBar from "./DashboardSideBar";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DasbhoardNavbar";
const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="sticky top-0">
        <DashboardSideBar />
      </div>
      <div className="flex-1 flex flex-col">
        <DashboardNavbar className="sticky top-0 z-10" />
        <div className="flex-grow m-1 p-2 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
