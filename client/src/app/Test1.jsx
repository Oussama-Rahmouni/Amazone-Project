import React from "react";

const ShoppingCartItem = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-2">Shopping Cart</h1>
      <a href="#" className="text-sm text-blue-600 mb-4 inline-block">
        Deselect all items
      </a>

      {/* Item Row */}
      <div className="flex border-b pb-4">
        {/* Checkbox */}
        <input type="checkbox" className="mt-2 mr-4" />

        {/* Product Image */}
        <img
          src="https://via.placeholder.com/100"
          alt="Product"
          className="w-24 h-24 object-cover mr-4"
        />

        {/* Product Info */}
        <div className="flex-grow">
          <h2 className="text-lg font-semibold">
            DJI Mini 4K, Drone with 4K UHD Camera for Adults, Under 249 g,
            3-Axis Gimbal Stabilization, 10km Video Transmission, Auto Return,
            ...
          </h2>
          <span className="text-xs bg-orange-400 text-white px-2 py-1 rounded inline-block mt-2">
            #1 Best Seller
          </span>
          <p className="text-green-600 mt-1">In Stock</p>
          <div className="flex items-center mt-2">
            <input type="checkbox" id="gift" className="mr-2" />
            <label htmlFor="gift" className="text-sm">
              This is a gift{" "}
              <a href="#" className="text-blue-600">
                Learn more
              </a>
            </label>
          </div>
          <p className="text-sm mt-2">
            <span className="font-semibold">Style:</span> Mini 4K (31-min)
          </p>

          {/* Actions */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center">
              <label htmlFor="quantity" className="mr-2">
                Qty:
              </label>
              <select id="quantity" className="border px-2 py-1 rounded">
                <option>1</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <button className="text-blue-600">Delete</button>
            <button className="text-blue-600">Save for later</button>
            <button className="text-blue-600">
              Compare with similar items
            </button>
            <button className="text-blue-600">Share</button>
          </div>
        </div>

        {/* Price */}
        <div className="text-right w-24">
          <p className="text-xl font-semibold">$299.00</p>
        </div>
      </div>

      {/* Subtotal */}
      <div className="text-right mt-4">
        <p className="text-lg font-semibold">
          Subtotal (1 item): <span className="text-xl">$299.00</span>
        </p>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
