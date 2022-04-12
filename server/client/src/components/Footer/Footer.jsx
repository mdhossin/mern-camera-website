import React from "react";

import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { IoCallOutline, IoTimeOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";

const Footer = () => (
  <footer className="footer section">
    <div className="footer__container container-div grid">
      <div className="footer__content">
        <h3 className="footer__title">Help</h3>
        <ul className="footer__links">
          <li>
            <a href="#home" className="footer__link">
              Search
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Help
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Information
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Shipping Details
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__content">
        <h3 className="footer__title">Support</h3>
        <ul className="footer__links">
          <li>
            <a href="#home" className="footer__link">
              Contact Us
            </a>
          </li>

          <li>
            <a href="#home" className="footer__link">
              About Us
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Careers
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Refund & Return
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Deliveries
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__content">
        <h3 className="footer__title">Information</h3>
        <ul className="footer__links">
          <li>
            <a href="#home" className="footer__link">
              Search Terms
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Advanced Search
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Help & Faq's
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Store Location
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
              Order & Return
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__content">
        <h3 className="footer__title">Contact us</h3>
        <ul className="footer__links footer__location">
          <li>
            <GoLocation />
            No: 58 A, East Madison Street, Baltimore, MD, USA 4508
          </li>
          <li>
            <IoCallOutline />
            0000 - 123456789
          </li>
          <li>
            <IoTimeOutline />
            9.30AM - 7.30PM
          </li>
          <li>
            <AiOutlineMail />
            yummi@example.com
          </li>
        </ul>
      </div>
      <div className="footer__content">
        <h3 className="footer__title">Connect with us</h3>
        <ul className="footer__social">
          <li>
            <BsFacebook />
          </li>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <BsPinterest />
          </li>
        </ul>
      </div>
    </div>
    <p className="footer__copyright">&copy; YUMMY. All Right Reserved 2022</p>
  </footer>
);

export default Footer;
