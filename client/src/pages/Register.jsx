import React from "react";
import "./styles/login.css";
import logo from "../assets/images/amazon-logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-upper">
        <img src={logo} alt="" style={{ width: "105px", height: "32px" }} />
      </div>
      <div className="register-form">
        <h3 style={{ margin: "13px" }}>Create account</h3>

        <div className="register-input">
          <label htmlFor="name" className="register-labels">
            Your name
          </label>
          <input
            type="name"
            placeholder="name"
            name="name"
            className="register-input-field"
          />
        </div>

        <div className="register-input">
          <label htmlFor="email" className="register-labels">
            Mobile number or email
          </label>
          <input
            type="email"
            placeholder="mobile or email"
            name="email"
            className="register-input-field"
          />
        </div>

        <div className="register-input">
          <label htmlFor="password" className="register-labels">
            Password
          </label>
          <br></br>
          <input
            type="password"
            placeholder="password "
            name="password"
            className="register-input-field"
          />
        </div>

        <div className="register-input">
          <label htmlFor="re-password" className="register-labels">
            Re-enter password
          </label>
          <br></br>
          <input
            type="password"
            placeholder="re-enter password"
            name="re-password"
            className="register-input-field"
          />
        </div>
        <div className="register-input">
          <button className="register-btn">Continue</button>
        </div>
        <div>
          <p style={{ fontSize: "14px", margin: "13px" }}>
            By creating an account, you agree to Amazon's Conditions of Use and
            Privacy Notice.
          </p>
        </div>
      </div>
      <div className="register-footer">
        <div className="register-footer-links">
          <Link className="register-link">Conditions of use</Link>
          <Link className="register-link">Privacy Notice</Link>
          <Link className="register-link">Help</Link>
        </div>
        <div style={{ fontSize: "13px" }}>
          © 1996-2024, Amazon.com, Inc. or its affiliates{" "}
        </div>
      </div>
    </div>
  );
};

export default Register;
