import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const [newUser, setNewUser] = useState({ email: "", password: "" });

  const redirect = location.state?.path || "/";

  const { email, password } = newUser;

  const [typePass, setTypePass] = useState(false);

  const handleChangeInput = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(login(email, password));
  };

  const responseGoogle = async (response) => {
    try {
      //   dispatch(googleLogin(response.tokenId));
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     if (error) {
  //       dispatch({ type: USER_LOGIN_RESET });
  //       addToast(error, { appearance: "error", autoDismiss: true });
  //     } else if (userInfo) {
  //       if (userInfo.message !== undefined) {
  //         addToast(userInfo?.message, {
  //           appearance: "success",
  //           autoDismiss: true,
  //         });
  //       }
  //       navigate(redirect, { replace: true });
  //     }
  //   }, [userInfo, error, addToast, navigate, dispatch, redirect]);

  return (
    <section className="section">
      <div className="contact">
        <div className="contact__container">
          <h3 className="contact__title">Login</h3>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form__div">
              <label htmlFor="email" className="contact__form__div-tag">
                Email
              </label>
              <input
                className="contact__form__div-input"
                type="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                placeholder="Your Email"
              />
            </div>
            <div className="contact__form__div pass">
              <label htmlFor="email" className="contact__form__div-tag">
                Password
              </label>
              <input
                className="contact__form__div-input"
                type={typePass ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChangeInput}
                placeholder="Your Password"
              />
              <small onClick={() => setTypePass(!typePass)}>
                {typePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </small>
            </div>

            <div className="contact__form__forgot">
              <Link to="/forgotpassword">Forgot your password?</Link>
            </div>

            <button
              className="button"
              type="submit"
              disabled={email && password ? false : true}
            >
              {false ? <Spinner animation="border" size="sm" /> : "login"}
            </button>

            <div className="social">
              {/* <GoogleLogin
                clientId="649886608461-2bepdbv7vetejfvem6pjh23406vdeip4.apps.googleusercontent.com"
                buttonText="Signin with google"
                onSuccess={responseGoogle}
                cookiePolicy={"single_host_origin"}
                theme="dark"
              /> */}
            </div>

            <div className="contact__form__forgot">
              <Link to="/register"> Don't have an account ? Register</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
