import React from "react";
import "./styles/dashboard.css"; // Importing the CSS file for styling
import { useForm } from "react-hook-form";
import api from "../services/apiConfig";

const ShippingView = () => {
  const { handleSubmit, register, formstate: erro } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await api.post("/cart/shipping", data);
    } catch (error) {
      console.log("issue in putting shipping adress", error);
    }
  };
  return (
    <div className="shipping-view-container">
      <div className="shipping-form">
        <h1>Enter a new shipping address</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label>Country/Region</label>
            <select {...register("country")}>
              <option value="usa">United States</option>
            </select>
          </div>
          <div className="form-group">
            <label>Full name (First and Last name)</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register("phoneNumber")}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Street address or P.O. Box" />
            <input
              type="text"
              placeholder="Apt, suite, unit, building, floor, etc."
              {...register("street")}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="City" {...register("city")} />
          </div>
          <div className="form-group half-width">
            <label>State</label>
            <select {...register("state")}>
              <option value={"state1"}>state 1</option>
              <option value={"state2"}>state 2</option>
            </select>
          </div>
          <div className="form-group half-width">
            <label>ZIP Code</label>
            <input type="text" placeholder="ZIP Code" {...register("zip")} />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="default-address"
              {...register("checkbox")}
            />
            <label htmlFor="default-address">
              Make this my default address
            </label>
          </div>
          <button type="submit">Use this address</button>
        </form>
      </div>
      <div className="order-summary">
        <h2>Checkout (1 item)</h2>
        <div className="summary-box">
          <div className="summary-row">
            <span>Items:</span>
            <span>--</span>
          </div>
          <div className="summary-row">
            <span>Shipping & handling:</span>
            <span>--</span>
          </div>
          <div className="summary-row">
            <span>Total before tax:</span>
            <span>--</span>
          </div>
          <div className="summary-row">
            <span>Estimated tax to be collected:</span>
            <span>--</span>
          </div>
          <div className="summary-row total">
            <strong>Order total:</strong>
            <strong>$159.99</strong>
          </div>
          <div className="summary-link">How are shipping costs calculated?</div>
        </div>
      </div>
    </div>
  );
};

export default ShippingView;
