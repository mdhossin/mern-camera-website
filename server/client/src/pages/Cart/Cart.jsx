import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { CartSummary, CheckOut } from "../../components";
import CartList from "../CartList/CartList";

const Cart = ({ setCartOpen, isCartOpen }) => {
  const increaseQuantity = (id, quantity, stock) => {};

  const decreaseQuantity = (id, quantity) => {};

  const deleteCartItems = (id) => {};

  const cartItems = [
    {
      imageUrl:
        "https://res.cloudinary.com/dsfcv3v5f/image/upload/v1649307946/yummy-food-delivery/ma4yxqaeoxtyu4pyd8bj.png",
      name: "Headphone",
      totalPrice: 200,
      quantity: 4,
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dsfcv3v5f/image/upload/v1649307946/yummy-food-delivery/ma4yxqaeoxtyu4pyd8bj.png",
      name: "Watch",
      totalPrice: 300,
      quantity: 3,
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dsfcv3v5f/image/upload/v1649307946/yummy-food-delivery/ma4yxqaeoxtyu4pyd8bj.png",
      name: "Smart Watch",
      totalPrice: 500,
      quantity: 6,
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dsfcv3v5f/image/upload/v1649307946/yummy-food-delivery/ma4yxqaeoxtyu4pyd8bj.png",
      name: "Smart Watch",
      totalPrice: 500,
      quantity: 6,
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dsfcv3v5f/image/upload/v1649307946/yummy-food-delivery/ma4yxqaeoxtyu4pyd8bj.png",
      name: "Smart Watch",
      totalPrice: 500,
      quantity: 6,
    },
  ];

  // const checkoutHandler = () => {
  //   history.push("/login?redirect=shipping");
  // };

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="cart">
      <div className="cart__header">
        <h5 className="cart__header-title">
          Shopping Cart ({cartItems?.length})
        </h5>
        <AiOutlineClose
          className="cart__header-icon"
          onClick={() => setCartOpen(false)}
        />
      </div>
      {cartItems.length > 0 ? (
        <div className="cart__header__body">
          <CartList
            increaseQuantity={increaseQuantity}
            deleteCartItems={deleteCartItems}
            decreaseQuantity={decreaseQuantity}
            cartItems={cartItems}
            // handleRemoveFromCart={handleRemoveFromCart}
          />
        </div>
      ) : (
        <div className="cart__empty">
          <BiShoppingBag />
          <p>Your shopping cart is empty</p>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart__checkout">
          <CartSummary cartTotal={cartTotal} />
          <CheckOut setCartOpen={setCartOpen} />
        </div>
      )}
    </div>
  );
};

export default Cart;
