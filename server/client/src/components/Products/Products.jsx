import React from "react";
import { productData } from "../../fakeData";
import ProductRating from "../ProductRating/ProductRating";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FiShoppingCart } from "react-icons/fi";

const Products = () => {
  return (
    <section className="products container-div">
      <SectionTitle title="Featured Products" desc="24/7 Security System" />

      <div className="products__container grid">
        {productData.map((product, i) => (
          <div key={i} className="products__container__item">
            <img src={product.img} alt="" />
            <div>
              <h3>{product.name}</h3>
              <h5>${product.price}</h5>
              <ProductRating ratingValue={product.rating} />
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
