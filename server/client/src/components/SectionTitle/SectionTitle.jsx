import React from "react";

const SectionTitle = ({ title, desc }) => (
  <div className="section-title">
    <p>{desc}</p>
    <h2>{title}</h2>
  </div>
);

export default SectionTitle;
