import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = ({ setMobileOpen }) => {
  return (
    <>
      <div className="mobile__close">
        <AiOutlineClose
          className="mobile__close-icon"
          onClick={() => setMobileOpen(false)}
        />
      </div>

      <div className={"mobile__menu"}>
        <ul className="mobile__list mobile__menu__list">
          <li className="mobile__item">
            <Link
              to="/"
              className="mobile__link"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="mobile__item">
            <Link
              to="/courses"
              className="mobile__link"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
          </li>

          <li className="mobile__item">
            <Link
              to="/contact"
              className="mobile__link"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="mobile__close" id="mobile-close"></div>
      </div>
    </>
  );
};

export default MobileMenu;
