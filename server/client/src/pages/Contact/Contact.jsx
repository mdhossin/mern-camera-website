import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <section>
      <div className="contacts">
        <div className="contacts__header">
          <h2>Contact Us</h2>
        </div>

        <div className="container-div">
          <div className="contacts__content grid">
            <div className="contacts__content__box">
              <div className="contacts__content__box__img">
                <IoCallOutline />
              </div>
              <h4>Phone</h4>
              <p>010-00001222</p>
              <p>002-00003333</p>
            </div>

            <div className="contacts__content__box">
              <div className="contacts__content__box__img">
                <AiOutlineMail />
              </div>
              <h4>Email</h4>
              <p>icam@gamil.com</p>
              <p>support@gmail.com</p>
            </div>

            <div className="contacts__content__box">
              <div className="contacts__content__box__img">
                <FiSend />
              </div>
              <h4>Address</h4>
              <p>No: 58 A, East Madison Street,</p>
              <p>Baltimore, MD, USA 4508</p>
            </div>
          </div>

          <div className="contacts__form">
            <h2>Contact Form</h2>
            <div className="contacts__form__content">
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
              <div className="contacts__form__content__message">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your message*"
                ></textarea>
              </div>
              <div className="contacts__form__button">
                <button className="button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
