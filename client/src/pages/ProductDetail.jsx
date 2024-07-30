import "./styles/productDetails.css";
import React, { useState } from "react";
import VerticalCarousel from "../components/common/detailsPage/VerticalCarousel";
import data from "../pages/data.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ProductDetail = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="product-detail-container">
      <div className="left-container"></div>
      <div className="middle-container"></div>
      <div className="right-container">
        <h2>price</h2>
        <italic>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit
        </italic>
        <p>deliver to tunis</p>
        <strong>only 1 item left in stock</strong>

        <div className="three-btn">
          <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
            <InputLabel id="demo-select-small-label">Quantity</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <div className="detail-page-buttons">
            <button className="detail-btn first">add to cart</button>
            <button className="detail-btn second">buy now</button>
          </div>
        </div>
        <p>ships from</p>
        <p>ships to</p>
        <button className="detail-btn ">click here</button>
      </div>
    </div>
  );
};

export default ProductDetail;
