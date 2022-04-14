import { motion } from "framer-motion";
import { compnayData } from "../../fakeData";

const CompanyArea = () => (
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

export default CompanyArea;
