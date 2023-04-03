import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../product";
import { CartItem } from "./cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const amount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cartName">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {amount > 0 ? (
        <div className="checkout">
          <p> SubTotal: $ {amount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};
