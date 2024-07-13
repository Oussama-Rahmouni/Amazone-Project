import React from "react";
import DasdhboardSideBar from "./DashboardSideBar";
import { Outlet } from "react-router-dom";
import "../styles/dashboardLayout.css";
import DasbhoardNavbar from "./DasbhoardNavbar";

const DashboardLayout = () => {
  return (
    <div className="dashboardLayout">
      <div className="sidb">
        <DasdhboardSideBar />
      </div>
      <div className="maaain">
        <DasbhoardNavbar className="nav" />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
