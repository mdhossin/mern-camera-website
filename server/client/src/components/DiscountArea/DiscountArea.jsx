import React from "react";
import { Link } from "react-router-dom";

const DiscountArea = () => (
  <div className="discount-section">
    <div className="discount">
      <div className="discount__overlay"></div>

      <div className="discount__content container-div">
        <p>WE'RE AT 71% OF OUR GOAL!</p>
        <h2>Discount For All Orders Over $100</h2>
        <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h5>
        <Link to="/shop">
          <button className="button">Shop Now</button>
        </Link>
      </div>
    </div>
  </div>
);

export default DiscountArea;
