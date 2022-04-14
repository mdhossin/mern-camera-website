import React from "react";
import { compnayData } from "../../fakeData";
import { motion } from "framer-motion";

const CompanyArea = () => {
  return (
    <section className="company">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="company__container container-div grid"
      >
        {compnayData.map((company, i) => (
          <motion.div key={i}>
            <img src={company.img} alt="company" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CompanyArea;
