import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { ProductRating } from "../../../components";
import { addItemsToCart } from "../../../redux/actions/cartActions";

const SingleItem = ({ product }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const addOrNot = cartItems?.find((item) => item.product === product._id);

  const addToCartHandler = () => {
    dispatch(addItemsToCart(product?._id, 1, addToast));
  };

  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="products__container__item"
    >
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
    </motion.div>
  );
};

export default SingleItem;
