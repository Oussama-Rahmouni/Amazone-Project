import React from "react";
import "../styles/admindashboard.css";
const DashboardAdmin = () => {
  return (
    <form className="admindash" action="">
      <div className="inputs">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <div className="dashbutton">
        <button>clickOnMe</button>
      </div>
    </form> 
  );
};

export default DashboardAdmin;
