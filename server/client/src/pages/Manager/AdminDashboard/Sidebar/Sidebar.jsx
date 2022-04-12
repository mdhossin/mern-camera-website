import React, { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogOutCircle, BiCube, BiReceipt } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { FiGrid, FiUsers } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { logout } from "../../../../redux/actions/userActions";
import { USER_LOGOUT_RESET } from "../../../../redux/constants/userConstants";

export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const width = navbarState ? "60%" : "0%";
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const user = useSelector((state) => state.userLogin);
  const { userInfo } = user;

  const logoutUser = useSelector((state) => state.userLogout);
  const { userLogout, error } = logoutUser;

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
    <>
      <section className="sidebar">
        <div className="top">
          <div className="brand">
            <span>Admin</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <AiOutlineMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <Link to="/dashboard">
                  <FiGrid />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <Link to="/dashboard/products">
                  <BiCube />
                  <span> Products</span>
                </Link>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <Link to="/dashboard/addproduct">
                  <CgAddR />
                  <span> Add Product</span>
                </Link>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <Link to="/dashboard/users">
                  <FiUsers />
                  <span> Users</span>
                </Link>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <Link to="/dashboard/orders">
                  <BiReceipt />
                  <span> Orders</span>
                </Link>
              </li>

              <li className="userLogout" onClick={handleLogout}>
                <BiLogOutCircle />
                <span> Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div
        // state={navbarState}
        className={"responsive " + (navbarState && "show")}
        style={{ width: width }}
      >
        <div className="responsive__links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <Link to="/dashboard" onClick={() => setNavbarState(false)}>
                <FiGrid />
                <span> Dashboard</span>
              </Link>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <Link
                to="/dashboard/products"
                onClick={() => setNavbarState(false)}
              >
                <BiCube />
                <span> Products</span>
              </Link>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <Link
                to="/dashboard/addproduct"
                onClick={() => setNavbarState(false)}
              >
                <CgAddR />
                <span> Add Product</span>
              </Link>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <Link to="/dashboard/users" onClick={() => setNavbarState(false)}>
                <FiUsers />
                <span> Users</span>
              </Link>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <Link
                to="/dashboard/orders"
                onClick={() => setNavbarState(false)}
              >
                <BiReceipt />
                <span> Orders</span>
              </Link>
            </li>

            <li
              className="userLogout"
              onClick={(() => setNavbarState(false), handleLogout)}
            >
              <BiLogOutCircle />
              <span> Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
