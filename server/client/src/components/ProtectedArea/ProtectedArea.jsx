import React from "react";

const ProtectedArea = () => (
  <div className="protected-section">
    <div className="protected">
      <div className="protected__overlay"></div>

      <div className="protected__content container-div">
        <p>Protect it now</p>
        <h2>Is your business protected?</h2>
        <h5>Access Gibson to stay protected</h5>
        <button className="button">Shop Now</button>
      </div>
    </div>
  </div>
);

export default ProtectedArea;
