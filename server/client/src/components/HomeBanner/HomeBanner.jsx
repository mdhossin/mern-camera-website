import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section className="section homeBanner container-div">
      <div className="homeBanner__container grid">
        <div className="homeBanner__container__left">
          <div className="homeBanner__container__left__overlay"></div>
          <div>
            <h3>Smart Protection</h3>
            <h1>Monitor and control your home anytime, anywhere.</h1>
            <Link to="/shop">
              <button className="button">Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="homeBanner__container__left right">
          <div className="homeBanner__container__left__overlay"></div>
          <div>
            <h3>Full Protection</h3>
            <h1>Featured Security Camera to stay protected</h1>
            <Link to="/shop">
              <button className="button">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
