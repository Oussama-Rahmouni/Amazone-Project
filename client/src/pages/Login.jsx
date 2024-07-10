// src/pages/SignIn.js
import React, { useState } from "react";
import "./styles/login.css";

const Login = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", input);
    // Add logic to handle sign in here
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <img
          src="/path/to/amazon-logo.png"
          alt="Amazon Logo"
          className="signin-logo"
        />
        <h1>Sign in</h1>
        <label htmlFor="email">Email or mobile phone number</label>
        <input
          type="text"
          id="email"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Continue</button>
        <p>
          By continuing, you agree to Amazon's{" "}
          <a href="/conditions">Conditions of Use</a> and{" "}
          <a href="/privacy">Privacy Notice</a>.
        </p>
        <a href="/need-help">Need help?</a>
      </form>
      <div className="signin-footer">
        <p>New to Amazon?</p>
        <button onClick={() => console.log("Navigate to registration")}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
