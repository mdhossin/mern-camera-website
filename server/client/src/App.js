import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { ForgotPassword, Home, Login, Register } from "./pages";
import { refreshToken } from "./redux/actions/userActions";
import { useDispatch } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import "./styles/styles.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <ToastProvider placement="top-right">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      </Routes>
    </ToastProvider>
  );
}

export default App;
