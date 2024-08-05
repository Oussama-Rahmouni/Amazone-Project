// src/components/layout/Navbar.js
import React, { useState } from "react";
import "../styles/navbar.css";
import amazonLogo from "../../assets/images/logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useSearchMutation } from "../../services/search";

const Navbar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();

  const onSuccess = (data) => {
    navigate("/all-products", { state: { results: data } });
  };

  const onError = (error) => {
    console.error("Search failed: ", error);
    alert("Search failed. Please try again.");
  };

  const { mutate, error, isError } = useSearchMutation(onSuccess, onError);

  const searchFunction = () => {
    console.log("search: ", searchTerm);
    mutate(searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="first-div">
        <img
          src={amazonLogo}
          alt=""
          className="nav-logo"
          style={{ width: "160px", height: "45px", color: "white" }}
        />
        <button
          className="nav-btn"
          style={{
            border: "none",
            textDecoration: "none",
            background: "transparent",
            color: "white",
          }}
        >
          Deliver to usa <LocationOnIcon />
        </button>
      </div>
      <div className="second-div">
        <select name="" id="">
          <option value="test1">test1</option>
          <option value="test1">test2</option>
          <option value="test1">test3</option>
        </select>
        <input
          type="search"
          placeholder="search amazon"
          className="search-nav"
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <div
          style={{
            backgroundColor: "#FEBD69",
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <SearchIcon
            onClick={searchFunction}
            style={{ marginTop: "10px", cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="third-div">
        <select value={"language"} className="inner-second-div">
          <option value="">first</option>
          <option value="">second</option>
          <option value="">third</option>
        </select>

        <p className="inner-second-div p">name and lastName</p>
        <p className="inner-second-div p">Returns & Orders</p>
        <ShoppingCartIcon className="inner-second-div p" />
      </div>
    </nav>
  );
};

export default Navbar;
