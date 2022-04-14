import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { createOrder } from "../../redux/actions/orderActions";

const CheckoutPayment = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userLogin?.userInfo);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal < 1000 ? 0 : 100;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const order = {
    // shippingInfo,
    orderItems: cartItems,

    shippingPrice: shippingCharges,
    totalPrice: totalPrice,
  };

  const tokenHandler = (token) => {
    order.shippingInfo = token.card;
    order.email = token.email;
    order.id = token.id;
    order.paymentInfo = {
      id: token.id,
      status: "succeeded",
    };
    if (token) {
      dispatch(createOrder(order));
    }
  };

  return (
    <div className="checkoutPayment">
      <div className="checkoutPayment__content">
        <h2>Payment Info</h2>
        <div>
          <p>Subtotal: </p>
          <span>${subtotal}</span>
        </div>
        <div>
          <p>Shipping Charges: </p>
          <span>${shippingCharges}</span>
        </div>
        <div>
          <p>Tax : </p>
          <span>${tax}</span>
        </div>
        <hr />
        <div>
          <p>Total Price : </p>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <StripeCheckout
          amount={totalPrice * 100}
          shippingAddress
          token={tokenHandler}
          stripeKey="pk_test_51JvwowKC3JWaPkrxsocY4mV0UOYb4E7w6GU4gxNZbHdabF0uCQ801GC6B0cqGfkBbm9Ve2PAVrczTC6MY1VyIweh00Fjcjsyhx"
          currency="USD"
          image="https://res.cloudinary.com/dsfcv3v5f/image/upload/v1649857030/camera-shop/f0u6020uuoollyqespam.png"
          email={user?.email}
          name={user?.name}
          billingAddress
        >
          <button style={{ padding: "0 2rem" }} className="button">
            Checkout Now
          </button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default CheckoutPayment;
