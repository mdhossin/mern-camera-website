import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProtectedArea = () => (
  <motion.div className="protected-section">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="protected"
    >
      <div className="protected__overlay"></div>

      <div className="protected__content container-div">
        <p>Protect it now</p>
        <h2>Is your business protected?</h2>
        <h5>Access Gibson to stay protected</h5>
        <Link to="/shop">
          <button className="button">Shop Now</button>
        </Link>
      </div>
    </motion.div>
  </motion.div>
);

export default ProtectedArea;
