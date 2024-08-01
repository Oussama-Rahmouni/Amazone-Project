import "./styles/productDetails.css";
import React, { useState } from "react";
import VerticalCarousel from "../components/common/detailsPage/VerticalCarousel";
import data from "../pages/data.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import imag from "../assets/images/326adee0c0ab562d6d5b3ce0d4503ea8.jpg";

const ProductDetail = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="product-detail-container">
      <div className="left-container">
        <div className="vertical-images">here</div>
        <img src={imag} alt="it should be an image" className="left-image" />
      </div>
      <div className="middle-container">
        <div className="upper-div">
          <p className="details-title">
            Corsair K70 RGB PRO Wired Mechanical Gaming Keyboard (Cherry MX RGB
            Red Switches: Linear and Fast, 8,000Hz Hyper-Polling, PBT
            Double-Shot PRO Keycaps, Soft-Touch Palm Rest) QWERTY, NA - Black
          </p>
          <p>
            Visit the Corsair Store <br />
            4.6 4.6 out of 5 stars 6,093 ratings | Search this page
            <br />
            1K+ bought in past month
          </p>
        </div>
        <div className="under-upper-div">
          <p>
            <strong style={{ fontSize: "22px" }}>price 229$</strong>
          </p>
          <p>description</p>
          <div className="list">
            <span>some suf</span>
            <span>another stuf</span>
            <span>another other stuff</span>
          </div>
        </div>
        <div className="after-lower-div">
          <p>dra chniya</p>
          <div className="span-div">
            <span className="hedhi-span">first </span>
            <span className="hedhi-span">Second </span>
            <span className="hedhi-span">Third </span>
          </div>
          <p>This should be another data here in this form </p>
          <p>
            here it would be better if i add the design for the resting features
            that mimic amazon{" "}
          </p>
          <p className="first-zones">zones </p>
          <p className="first-zones">zones </p>
          <p className="">different zones </p>
        </div>
        <div className="lower-div"></div>
      </div>
      <div className="right-container">
        <h2>price</h2>
        <italic>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit
        </italic>
        <p>deliver to tunis</p>
        <strong>only 1 item left in stock</strong>

        <div className="three-btn">
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
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
