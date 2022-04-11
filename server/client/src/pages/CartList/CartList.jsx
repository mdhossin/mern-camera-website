import React from "react";

import { AiOutlineClose } from "react-icons/ai";

const CartList = ({
  cartItems,
  decreaseQuantity,
  increaseQuantity,
  deleteCartItems,
}) => {
  console.log(cartItems);
  return (
    <div className="cart__header__body__list">
      {cartItems?.map((item, index) => (
        <div key={index} className="cart__header__body__list__item">
          <img
            src={item.imageUrl}
            className="cart__header__body__list__item-img"
            alt=""
          />
          <div className="cart__header__body__list__item__details">
            <div className="cart__header__body__list__item__details__name">
              {" "}
              <a
                href="#home"
                className="cart__header__body__list__item__details__name-title"
              >
                {item.name}
              </a>
              <a href="#home">
                <AiOutlineClose
                  className="cart__header__body__list__item__details__name-delete"
                  onClick={() => deleteCartItems(item.product)}
                />
              </a>
            </div>

            <div className="cart__header__body__list__item__details__price">
              <div className="cart__header__body__list__item__details__price__wrapper">
                <select
                  value={item.qty}
                  // onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                  className="cartItem__select"
                >
                  {[...Array(item?.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <div className="cart__header__body__list__item__details__price__wrapper-price">
                  ${item.price * item.quantity}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
