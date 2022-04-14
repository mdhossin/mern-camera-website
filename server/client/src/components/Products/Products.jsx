import React, { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../redux/actions/productActions";
import Loader from "../Loader/Loader";
import SingleProduct from "./SingleProduct/SingleProduct";

const Products = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.allProducts);
  const { products, loading, error } = productsData;

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <section className="products container-div">
      <SectionTitle title="Featured Products" desc="24/7 Security System" />

      <div className="products__container grid">
        {loading ? (
          <Loader backdrop />
        ) : error ? (
          <h3 style={{ color: "#333", fontWeight: "500", textAlign: "center" }}>
            {error}
          </h3>
        ) : (
          <>
            {products?.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))}
          </>
        )}
      </div>
      {products?.length === 0 && (
        <h3 style={{ color: "#333", fontWeight: "500", textAlign: "center" }}>
          No product found.
        </h3>
      )}
    </section>
  );
};

export default Products;
