import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section>
      <div className="contacts">
        <div className="contacts__header">
          <h2>Contact Us</h2>
        </div>

        <motion.div className="container-div">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="contacts__content grid"
          >
            <div className="contacts__content__box">
              <div className="contacts__content__box__img">
                <IoCallOutline />
              </div>
              <h4>Phone</h4>
              <p>010-00001222</p>
              <p>002-00003333</p>
            </div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="contacts__content__box"
            >
              <div className="contacts__content__box__img">
                <AiOutlineMail />
              </div>
              <h4>Email</h4>
              <p>icam@gamil.com</p>
              <p>support@gmail.com</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="contacts__content__box"
            >
              <div className="contacts__content__box__img">
                <FiSend />
              </div>
              <h4>Address</h4>
              <p>No: 58 A, East Madison Street,</p>
              <p>Baltimore, MD, USA 4508</p>
            </motion.div>
          </motion.div>

          <motion.div className="contacts__form">
            <h2>Contact Form</h2>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="contacts__form__content"
            >
              <div className="contacts__form__content__inputs grid">
                <div>
                  <input
                    className="contact__form__div-input"
                    type="name"
                    name="name"
                    placeholder="Your name*"
                  />
                </div>
                <div>
                  <input
                    className="contact__form__div-input"
                    type="email"
                    name="email"
                    placeholder="Your email*"
                  />
                </div>
                <div>
                  <input
                    className="contact__form__div-input"
                    type="number"
                    name="phone"
                    placeholder="Your phone*"
                  />
                </div>
              </div>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="contacts__form__content__message"
              >
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your message*"
                ></textarea>
              </motion.div>
              <div className="contacts__form__button">
                <button className="button">Send</button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
