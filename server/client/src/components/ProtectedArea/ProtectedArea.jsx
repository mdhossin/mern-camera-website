import React from "react";
import { Link } from "react-router-dom";

const ProtectedArea = () => (
  <div className="protected-section">
    <div className="protected">
      <div className="protected__overlay"></div>

      <div className="protected__content container-div">
        <p>Protect it now</p>
        <h2>Is your business protected?</h2>
        <h5>Access Gibson to stay protected</h5>
        <Link to="/shop">
          <button className="button">Shop Now</button>
        </Link>
      </div>
    </div>
  </div>
);

export default ProtectedArea;
