import React from "react";
import StandChart from "../../components/common/StandChart";
import Chart from "../../components/common/LineChart";
import "../styles/dashboard.css";

const DashSales = () => {
  return (
    <div className="charts">
      {/* <div className="chart">
        <StandChart />
      </div> */}
      <div className="chart">
        <Chart />
      </div>{" "}
      <div className="chart">
        <Chart />
      </div>
    </div>
  );
};

export default DashSales;
