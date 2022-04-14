import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, login } from "../../redux/actions/userActions";
import { useToasts } from "react-toast-notifications";
import { USER_LOGIN_RESET } from "../../redux/constants/userConstants";
const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const { addToast } = useToasts();
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const redirect = location.state?.path || "/";

  const { email, password } = newUser;

  const [typePass, setTypePass] = useState(false);

  const userLogin = useSelector((state) => state?.userLogin);

  const { loading, error, userInfo } = userLogin;

  const handleChangeInput = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  const responseGoogle = async (response) => {
    try {
      dispatch(googleLogin(response.tokenId));
    } catch (error) {
      alert(error?.message);
    }
  };

  useEffect(() => {
    if (error) {
      dispatch({ type: USER_LOGIN_RESET });
      addToast(error, { appearance: "error", autoDismiss: true });
    } else if (userInfo) {
      if (userInfo.message !== undefined) {
        addToast(userInfo?.message, {
          appearance: "success",
          autoDismiss: true,
        });
      }
      navigate(redirect, { replace: true });
    }
  }, [userInfo, error, addToast, navigate, dispatch, redirect]);

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
                required
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
                required
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
              // disabled={email && password ? false : true}
            >
              {loading ? <Spinner animation="border" size="sm" /> : "login"}
            </button>

            <div className="social">
              <GoogleLogin
                clientId="371370040135-2f71d8rrmn8ami8mfc77ivcst7adc3cp.apps.googleusercontent.com"
                buttonText="Login with google"
                onSuccess={responseGoogle}
                cookiePolicy={"single_host_origin"}
                theme="dark"
              />
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
