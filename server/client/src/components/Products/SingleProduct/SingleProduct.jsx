import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemsToCart } from "../../../redux/actions/cartActions";
import ProductRating from "../../ProductRating/ProductRating";
import { useToasts } from "react-toast-notifications";

const SingleProduct = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const { addToast } = useToasts();

  const addOrNot = cartItems?.find((item) => item.product === product._id);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addItemsToCart(product?._id, 1, addToast));
  };
  return (
    <div className="products__container__item">
      <Link to={`/product/${product._id}`}>
        <img src={product?.images?.url} alt="" />
      </Link>
      <div>
        <Link to={`/product/${product._id}`}>
          <h3>{product.name}</h3>
        </Link>
        <h5>${product.price}</h5>
        <ProductRating ratingValue={product.ratings} />
        <div>
          {product?.Stock && product?.Stock > 0 ? (
            <button
              className="button"
              disabled={addOrNot?.quantity > 0}
              onClick={addToCartHandler}
            >
              <FiShoppingCart />
              {addOrNot?.quantity > 0 ? "Added" : "Buy Now"}
            </button>
          ) : (
            <button disabled className="button">
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
