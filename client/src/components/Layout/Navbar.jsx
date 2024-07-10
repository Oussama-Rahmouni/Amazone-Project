// src/components/layout/Navbar.js
import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          {/* Assuming logo is saved in public/assets */}
          <img src="/assets/amazon-logo.png" alt="Amazon Logo" />
        </a>
        <div className="navbar-delivery">
          <span>Deliver to</span>
          <strong>Tunisia</strong>
        </div>
        <div className="navbar-search">
          <select className="search-category">
            <option value="all">All</option>
            {/* Add more categories as needed */}
          </select>
          <input type="text" placeholder="Search Amazon" />
          <button type="submit">🔍</button>
        </div>
        <div className="navbar-links">
          <div className="navbar-link">
            <span>Hello, Sign in</span>
            <strong>Account & Lists</strong>
          </div>
          <div className="navbar-link">
            <strong>Returns</strong>
            <span>& Orders</span>
          </div>
          <div className="navbar-cart">
            <span>🛒</span>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
