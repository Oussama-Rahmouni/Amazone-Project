import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
        <div className="w-full bg-white px-4 col-span-4">
          <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
            <h2 className="text-3xl font-medium">Shopping Cart</h2>
            <h4 className="text-xl font-normal">Subtitle</h4>
          </div>
          <div>
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6"
              >
                <div className="w-1/5">
                  <img
                    className="w-full h-44 object-contain"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="pr-10 text-sm">{item.description}</p>
                  <p className="text-base">
                    Unit Price{" "}
                    <span className="font-semibold"> ${item.price}</span>
                  </p>
                  <div
                    className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24
                  py-1 text-center drop-shadow-lg rounded-md"
                  >
                    <p className="">Quantity</p>
                    <p
                      className="cursor-pointer bg-gray-200 px-1 rounded-md 
                    hover:bg-gray-400 duration-300"
                    >
                      -
                    </p>
                    <p className="">{item.quantity}</p>
                    <p
                      className="cursor-pointer bg-gray-200 px-1 rounded-md 
                    hover:bg-gray-400 duration-300"
                    >
                      +
                    </p>
                  </div>
                  <button className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300">
                    Delete Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full bg-white col-span-1"></div>
      </div>
    </div>
  );
};

export default Cart;
