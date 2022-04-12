import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Spinner } from "react-bootstrap";
import { isEmail } from "../../utils/validation";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
    error: "",
    success: "",
  });

  const { email, error, success } = data;
  const [loading, setLoading] = useState(false);

  const { addToast } = useToasts();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, error: "", success: "" });
  };

  const forgotPassword = async () => {
    if (!isEmail(email))
      return setData({ ...data, error: "Invalid emails.", success: "" });

    try {
      setLoading(true);
      const res = await axios.post("/api/user/forgot_password", { email });
      setLoading(false);
      setData({ ...data, error: "", success: res.data.message });
    } catch (error) {
      setLoading(false);
      error.response.data.message &&
        setData({
          ...data,
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
          success: "",
        });
    }
  };

  useEffect(() => {
    if (error) {
      addToast(error, { appearance: "error", autoDismiss: true });
      setData({
        email: "",
        error: "",
        success: "",
      });
    } else if (success) {
      addToast(success, {
        appearance: "success",
        autoDismiss: true,
      });
      setData({
        email: "",
        error: "",
        success: "",
      });
    }
  }, [error, success, addToast]);
  return (
    <section className="section">
      <div className="contact">
        <div className="contact__container">
          <h3 className="contact__title">Forgot your password?</h3>
          <p className="contact__desc">
            We will send you an email to reset your password.
          </p>

          <form action="" className="contact__form">
            <div className="contact__form__div">
              <label htmlFor="email" className="contact__form__div-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="contact__form__div-input"
                value={email}
                onChange={handleChangeInput}
              />
            </div>

            <div className="contact__form__reset">
              <button
                className="button contact__form__reset-submit"
                type="button"
                onClick={forgotPassword}
              >
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Verify your email"
                )}
              </button>

              <Link to="/signin" className="contact__form__reset-cancel">
                <button className="button-secondary" type="button">
                  Cancel
                </button>
              </Link>
            </div>
            <Link to="/register" className="contact__form__reset-cancel">
              <button className="button-secondary" type="button">
                Register
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
