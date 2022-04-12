import React from "react";
import { compnayData } from "../../fakeData";

const CompanyArea = () => {
  return (
    <section className="company">
      <div className="company__container container-div grid">
        {compnayData.map((company, i) => (
          <div key={i}>
            <img src={company.img} alt="company" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyArea;
