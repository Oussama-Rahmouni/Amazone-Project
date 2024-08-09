import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice.js";
import { useMutation } from "react-query";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const mutation = useMutation(async (paymentData) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 2000);
    });
  });

  const onSubmit = async (data) => {
    await mutation.mutateAsync({
      ...data,
      totalAmount,
    });
    dispatch(clearCart());
    alert("Payment Successful!");
  };

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100 min-h-screen">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Secure Checkout</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">Name is required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Card Number
            </label>
            <input
              type="text"
              {...register("cardNumber", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            {errors.cardNumber && (
              <p className="text-red-600 text-sm mt-1">
                Card Number is required
              </p>
            )}
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">
                Expiration Date
              </label>
              <input
                type="text"
                {...register("expiryDate", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              {errors.expiryDate && (
                <p className="text-red-600 text-sm mt-1">
                  Expiration Date is required
                </p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">CVV</label>
              <input
                type="text"
                {...register("cvv", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              {errors.cvv && (
                <p className="text-red-600 text-sm mt-1">CVV is required</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={mutation.isLoading}
            className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md shadow-lg transition-all duration-200"
          >
            {mutation.isLoading ? "Processing..." : `Pay Now $${totalAmount}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
