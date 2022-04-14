import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeBanner = () => (
  <section className="section homeBanner container-div">
    <motion.div className="homeBanner__container grid">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="homeBanner__container__left"
      >
        <div className="homeBanner__container__left__overlay"></div>
        <div>
          <h3>Smart Protection</h3>
          <h1>Monitor and control your home anytime, anywhere.</h1>
          <Link to="/shop">
            <button className="button">Shop Now</button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="homeBanner__container__left right"
      >
        <div className="homeBanner__container__left__overlay"></div>
        <div>
          <h3>Full Protection</h3>
          <h1>Featured Security Camera to stay protected</h1>
          <Link to="/shop">
            <button className="button">Shop Now</button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default HomeBanner;
