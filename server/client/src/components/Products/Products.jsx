import React, { useEffect } from "react";
import { productData } from "../../fakeData";
import ProductRating from "../ProductRating/ProductRating";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../redux/actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.allProducts?.products);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <section className="products container-div">
      <SectionTitle title="Featured Products" desc="24/7 Security System" />

      <div className="products__container grid">
        {productsData.map((product) => (
          <div key={product?._id} className="products__container__item">
            <Link to="/">
              <img src={product?.images?.url} alt="" />
            </Link>
            <div>
              <h3>{product.name}</h3>
              <h5>${product.price}</h5>
              <ProductRating ratingValue={product.ratings} />
              <div>
                <button className="button">
                  <FiShoppingCart /> Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
