import { motion } from "framer-motion";

const NewsLetter = () => (
  <motion.div className="newsletter">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="news"
    >
      <div className="news__content container-div">
        <h2>NewsLetter</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, autem.
        </p>
        <div>
          <input type="text" name="" id="" placeholder="Your Email" />
          <button className="button">Subscribe</button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default NewsLetter;
