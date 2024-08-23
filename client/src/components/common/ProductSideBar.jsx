import React from "react";

const ProductSidebar = () => {
  return (
    <div className="w-64 bg-white p-4 border-r border-gray-200">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Popular Shopping Ideas</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:underline cursor-pointer">Wireless</li>
          <li className="hover:underline cursor-pointer">Mechanical</li>
          <li className="hover:underline cursor-pointer">Console</li>
          <li className="hover:underline cursor-pointer">Ergonomic</li>
          <li className="hover:underline cursor-pointer text-indigo-600">
            See more
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">More-sustainable Products</h3>
        <div className="flex items-center">
          <input type="checkbox" id="sustainable" className="mr-2" />
          <label htmlFor="sustainable" className="text-sm">
            Climate Pledge Friendly
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Department</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:underline cursor-pointer">
            PC Gaming Keyboards
          </li>
          <li className="hover:underline cursor-pointer">
            Mac Games & Accessories
          </li>
          <li className="hover:underline cursor-pointer ml-4">
            Mac Gaming Keyboards
          </li>
          <li className="hover:underline cursor-pointer">
            Xbox Games, Consoles & Accessories
          </li>
          <li className="hover:underline cursor-pointer ml-4">
            Xbox Accessories
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Customer Review</h3>
        <div className="flex items-center">
          <span className="text-yellow-500">
            &#9733;&#9733;&#9733;&#9733;&#9734;
          </span>
          <span className="ml-2 text-sm">& Up</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Brands</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center">
            <input type="checkbox" id="brand1" className="mr-2" />
            <label htmlFor="brand1">Logitech G</label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="brand2" className="mr-2" />
            <label htmlFor="brand2">Razer</label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="brand3" className="mr-2" />
            <label htmlFor="brand3">SteelSeries</label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="brand4" className="mr-2" />
            <label htmlFor="brand4">Corsair</label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="brand5" className="mr-2" />
            <label htmlFor="brand5">Redragon</label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="brand6" className="mr-2" />
            <label htmlFor="brand6">ASUS</label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="brand7" className="mr-2" />
            <label htmlFor="brand7">MageGee</label>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Price</h3>
        <p className="text-sm">$1 – $990+</p>
      </div>
    </div>
  );
};

export default ProductSidebar;
