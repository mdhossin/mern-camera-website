import React from "react";

import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import { Link } from "react-router-dom";
import { logo } from "../../assets";

const Footer = () => (
  <footer className="footer section">
    <div className="footer__container container-div grid">
      <div className="footer__content logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <h3 className="footer__title">Contact Us</h3>
        <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
      </div>
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
        <h3 className="footer__title">Connect with us</h3>
        <p className="icam">icam@gmail.com</p>
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
    <p className="footer__copyright">&copy; ICAM. All Right Reserved 2022</p>
  </footer>
);

export default Footer;
