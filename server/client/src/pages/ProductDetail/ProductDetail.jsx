import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getProductById } from "../../redux/actions/productActions";
import { addItemsToCart } from "../../redux/actions/cartActions";
import { Footer, Loader, ProductRating } from "../../components";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.productById);

  const { cartItems } = useSelector((state) => state.cart);

  const addOrNot = cartItems?.find((item) => item.product === product._id);

  const { addToast } = useToasts();

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [productId, dispatch]);

  const [quantity, setQuantity] = useState(1);

  const addToCartHandler = () => {
    dispatch(addItemsToCart(productId, quantity, addToast));
  };

  return (
    <>
      <section className="container-div section product">
        {loading ? (
          <Loader />
        ) : (
          <div className="product__detail grid">
            <div className="product__detail__img">
              <img src={product?.images?.url} alt="" />
            </div>

            <div className="product__detail__info">
              <h2 className="product__detail__info-name">{product.name}</h2>

              <div className="product__detial__info__price">
                <span className="product__detail__info__price-count">
                  ${product.price}.00
                </span>
              </div>
              <div className="product__detail__info-rating">
                <ProductRating ratingValue={product.ratings} />(
                {product.ratings})
              </div>

              <div className="product__detail__info-stock">
                <p>Status: {product.Stock < 0 ? "Out Of Stock" : "In Stock"}</p>
              </div>

              <div className="product__detail__info__buttons">
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="product__detail__info__buttons__select"
                >
                  {[...Array(product?.Stock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <div>
                  {product?.Stock && product?.Stock > 0 ? (
                    <button
                      className="button add"
                      disabled={addOrNot?.quantity > 0}
                      onClick={addToCartHandler}
                    >
                      <FiShoppingCart style={{ marginRight: ".5rem" }} />
                      {addOrNot?.quantity > 0 ? "Added" : "Buy Now"}
                    </button>
                  ) : (
                    <button disabled className="button">
                      Out of Stock
                    </button>
                  )}
                </div>
              </div>

              <div className="product__detail__info-desc">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
