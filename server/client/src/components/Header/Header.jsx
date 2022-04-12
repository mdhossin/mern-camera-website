import React, { useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
import { useToasts } from "react-toast-notifications";
import { BsHandbag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import MobileMenu from "../MobileMenu/MobileMenu";
import Cart from "../../pages/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";

import { USER_LOGOUT_RESET } from "../../redux/constants/userConstants";
import { logout } from "../../redux/actions/userActions";
import { logo } from "../../assets";

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);

  const user = useSelector((state) => state.userLogin);
  const { userInfo } = user;

  const logoutUser = useSelector((state) => state.userLogout);
  const { userLogout, error } = logoutUser;

  const toggleCart = () => {
    setCartOpen(false);
  };

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("scroll-header");
      } else {
        headerRef.current.classList.remove("scroll-header");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const toogleMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleLogout = () => {
    if (!userInfo?.access_token) return;
    dispatch(logout(userInfo?.access_token));
  };

  useEffect(() => {
    if (error) {
      dispatch({ type: USER_LOGOUT_RESET });
      addToast(error, { appearance: "error", autoDismiss: true });
    } else if (userLogout) {
      dispatch({ type: USER_LOGOUT_RESET });

      addToast(userLogout?.message, {
        appearance: "success",
        autoDismiss: true,
      });
      navigate("/");
    }
  }, [userLogout, error, addToast, dispatch, navigate]);

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav container-div">
        <Link to="/" className="nav__logo">
          <img width="100" src={logo} alt="Logo" />
        </Link>

        <div className="nav__menu">
          <ul className="nav__list nav__menu__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/shop" className="nav__link">
                Shop
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav__icons">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__wrapper nav__link"
                aria-expanded={isCartOpen ? "true" : "false"}
                onClick={() => {
                  setCartOpen((prev) => !prev);
                }}
              >
                <BsHandbag />
                <span className="nav__icons__cart">1</span>
              </a>
            </li>

            <NavDropdown
              title={
                userInfo?.user ? (
                  <>
                    <img
                      title={userInfo?.user?.name}
                      style={{ borderRadius: "50%" }}
                      width="22"
                      height="22"
                      src={userInfo?.user?.avatar}
                      alt=""
                    />
                  </>
                ) : (
                  <AiOutlineUser className="nav__dropdown-icon" />
                )
              }
              id="collasible-nav-dropdown"
            >
              {userInfo?.user ? (
                <>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    // onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={() => navigate("/login")}
                  >
                    login
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>

            <div className="nav__btns">
              <div
                className="nav__btns__toggle"
                aria-expanded={isMobileOpen ? "true" : "false"}
                onClick={() => {
                  setMobileOpen((prev) => !prev);
                }}
              >
                <CgMenuLeft />
              </div>
            </div>
          </ul>
        </div>
      </nav>

      {/* hidden cart drawer */}
      <div className={isCartOpen ? "mini-cart-open" : ""}>
        <div className="mini-cart">
          <Cart setCartOpen={setCartOpen} isCartOpen={isCartOpen} />
        </div>
        <div
          className={
            isCartOpen ? "drawer-backdrop dark-overflow" : "drawer-backdrop"
          }
          onClick={toggleCart}
        />
      </div>

      {/* hidden mobile menu drawer */}
      <div className={isMobileOpen ? "mini-cart-open" : ""}>
        <div className="mini-cart">
          <MobileMenu
            setMobileOpen={setMobileOpen}
            isMobileOpen={isMobileOpen}
          />
        </div>
        <div
          className={
            isMobileOpen ? "drawer-backdrop dark-overflow" : "drawer-backdrop"
          }
          onClick={toogleMobileMenu}
        />
      </div>
    </header>
  );
};

export default Header;
