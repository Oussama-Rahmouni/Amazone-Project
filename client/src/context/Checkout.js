// src/components/Checkout.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { useMutation } from 'react-query';

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    const mutation = useMutation(async (paymentData) => {
        // Simulate a payment API call
        return new Promise((resolve) => {
            setTimeout(() => resolve({ success: true }), 2000);
        });
    });

    const onSubmit = async (data) => {
        await mutation.mutateAsync({
            ...data,
            totalAmount
        });
        dispatch(clearCart());
        alert('Payment Successful!');
    };

    return (
        <div className="checkout">
            <h2>Payment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input type="text" {...register('name', { required: true })} />
                    {errors.name && <p>Name is required</p>}
                </div>
                <div>
                    <label>Card Number</label>
                    <input type="text" {...register('cardNumber', { required: true })} />
                    {errors.cardNumber && <p>Card Number is required</p>}
                </div>
                <div>
                    <label>Expiration Date</label>
                    <input type="text" {...register('expiryDate', { required: true })} />
                    {errors.expiryDate && <p>Expiration Date is required</p>}
                </div>
                <div>
                    <label>CVV</label>
                    <input type="text" {...register('cvv', { required: true })} />
                    {errors.cvv && <p>CVV is required</p>}
                </div>
                <button type="submit" disabled={mutation.isLoading}>
                    {mutation.isLoading ? 'Processing...' : 'Pay Now'}
                </button>
            </form>
        </div>
    );
};

export default Checkout;
