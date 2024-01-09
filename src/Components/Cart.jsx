import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state)=> state.cart);
  const cartTotal = cartItems.reduce((acc,item)=> acc + item.price, 0);
  console.log(cartItems)
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {cartItems.length} (Price: $ {cartTotal})
      </h3>
    </div>
  );
};

export default Cart;