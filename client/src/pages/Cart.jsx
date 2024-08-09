import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount}</h3>
          <Link to="/checkout">
            <button>Proceed to Payment</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
