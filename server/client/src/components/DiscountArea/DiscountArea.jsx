import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DiscountArea = () => (
  <motion.div className="discount-section">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="discount"
    >
      <div className="discount__overlay"></div>
      <div className="discount__content container-div">
        <p>WE'RE AT 71% OF OUR GOAL!</p>
        <h2>Discount For All Orders Over $100</h2>
        <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h5>
        <Link to="/shop">
          <button className="button">Shop Now</button>
        </Link>
      </div>
    </motion.div>
  </motion.div>
);

export default DiscountArea;
