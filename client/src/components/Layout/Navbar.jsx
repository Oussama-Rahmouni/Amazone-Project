// src/components/layout/Navbar.js
import React, { useState } from "react";
// import "../styles/navbar.css";
import logo from "../../assets/assets/logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useSearchMutation } from "../../services/search";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const Navbar = () => {
  const [showAll, setShowAll] = useState(false);
  console.log(showAll);
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
    <div>
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-start gap-4">
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="" />
        </div>
        <div className="headerHover">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col ">
            Deliver to{" "}
            <span className="text-sm font-semibold mt-1 text-white">USA</span>
          </p>
        </div>
        <div className="h-10 rounded-md flex flex-grow relative  ">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover: bh-gray-300 border-2 cursor
          duration-300 text-sm text-amazon_blue font-titleFont flex items-center 
          justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul
                className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll
              overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black
              p-2 flex-col gap-1 z-50"
              >
                <li>All Departments</li>
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span
            className="w-12 h-full flex items-center justify-center bg-amazon_yellow
          hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-auto rounded-tr-md
          rounded-br-md"
          >
            <SearchIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
