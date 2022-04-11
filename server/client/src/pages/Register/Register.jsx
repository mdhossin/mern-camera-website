import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Spinner } from "react-bootstrap";
import { validRegister } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { register } from "../../redux/actions/userActions";
import { USER_REGISTER_RESET } from "../../redux/constants/userConstants";
const Register = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
    cf_password: "",
  });

  const { name, email, password, cf_password } = newUser;

  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  const handleChangeInput = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const userReg = useSelector((state) => state.userRegister);

  const { loading, error, userInfo: userRegInfo } = userReg;

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validRegister(newUser);

    if (result?.errLength) {
      return addToast(result?.errMsg[0], {
        appearance: "error",
        autoDismiss: true,
      });
    }

    dispatch(register(name, email, password));

    setNewUser({
      email: "",
      password: "",
      name: "",
      cf_password: "",
    });
  };

  useEffect(() => {
    if (error) {
      dispatch({ type: USER_REGISTER_RESET });
      addToast(error, { appearance: "error", autoDismiss: true });
    } else if (userRegInfo) {
      dispatch({ type: USER_REGISTER_RESET });
      addToast(userRegInfo?.message, {
        appearance: "success",
        autoDismiss: true,
      });
    }
  }, [userRegInfo, error, addToast, dispatch]);

  return (
    <section className="section">
      <div className="contact">
        <div className="contact__container">
          <h3 className="contact__title">Register</h3>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form__div">
              <label htmlFor="name" className="contact__form__div-tag">
                Your Name
              </label>
              <input
                type="name"
                name="name"
                value={name}
                onChange={handleChangeInput}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="contact__form__div">
              <label htmlFor="email" className="contact__form__div-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="contact__form__div pass">
              <label htmlFor="password" className="contact__form__div-tag">
                Password
              </label>
              <input
                type={typePass ? "text" : "password"}
                name="password"
                value={password}
                id="password"
                onChange={handleChangeInput}
                placeholder="Your Password"
                required
              />
              <small onClick={() => setTypePass(!typePass)}>
                {typePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </small>
            </div>
            <div className="contact__form__div pass">
              <label htmlFor="cf_password" className="contact__form__div-tag">
                Confirm Password
              </label>
              <input
                type={typeCfPass ? "text" : "password"}
                name="cf_password"
                value={cf_password}
                id="cf_password"
                onChange={handleChangeInput}
                placeholder="Confrim Password"
                required
              />
              <small onClick={() => setTypeCfPass(!typeCfPass)}>
                {typeCfPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </small>
            </div>

            <button
              className="button"
              type="submit"
              // disabled={email && password ? false : true}
            >
              {loading ? <Spinner animation="border" size="sm" /> : "Register"}
            </button>
            <div className="contact__form__forgot">
              <Link to="/login"> Already have an account ? Login</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
