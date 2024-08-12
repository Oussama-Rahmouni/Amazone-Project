import React from "react";
import "../styles/layout.css";

const HeaderFilter = ({ sortOption, handleSortData }) => {
  console.log("ha ", sortOption);
  return (
    <div className="Filter-header">
      <p className="some-stuff">1-48 of 770 results for "drone"</p>
      <select
        name="Sort By"
        id=""
        className="select-filter"
        value={sortOption}
        onChange={handleSortData}
      >
        <option value="asc">Price : lower to hight</option>
        <option value="desc">Price : hight to low</option>
        <option value="avg">AVG: customer review</option>
        <option value="latest">Newst </option>
        <option value="top">Best Sellers </option>
      </select>
    </div>
  );
};

export default HeaderFilter;
