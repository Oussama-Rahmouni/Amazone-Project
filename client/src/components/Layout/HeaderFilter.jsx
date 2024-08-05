import React from "react";
import "../styles/layout.css";

const HeaderFilter = () => {
  return (
    <div className="Filter-header">
      <p className="some-stuff">1-48 of 770 results for "drone"</p>
      <select name="Sort By" id="" className="select-filter">
        <option value="">Price : lowe to hight</option>
        <option value="">Price : hight to low</option>
        <option value="">AVG: customer review</option>
        <option value="">Newst </option>
        <option value="">Best Sellers </option>
      </select>
    </div>
  );
};

export default HeaderFilter;
