import React from "react";
import { Banner } from "../../components";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Products from "../../components/Products/Products";
import ProtectedArea from "../../components/ProtectedArea/ProtectedArea";

const Home = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <Banner />
      <HomeBanner />
      <ProtectedArea />
      <Products />
    </div>
  );
};

export default Home;
