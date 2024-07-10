import React from "react";

import useAuth from "../hooks/useAuth.js";

const Cart = () => {
  const isUserConnecteed = useAuth();

  return <div>this is cart page</div>;
};

export default Cart;
