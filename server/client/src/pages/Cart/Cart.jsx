import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { CartSummary } from "../../components";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../redux/actions/cartActions";
import CartList from "../CartList/CartList";
import CheckOut from "../Checkout/Checkout";

const Cart = ({ setCartOpen }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const qtyChangeHandler = (id, quantity) => {
    dispatch(addItemsToCart(id, quantity));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

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
            deleteCartItems={deleteCartItems}
            cartItems={cartItems}
            qtyChangeHandler={qtyChangeHandler}
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
          <CheckOut cartTotal={cartTotal} setCartOpen={setCartOpen} />
        </div>
      )}
    </div>
  );
};

export default Cart;
