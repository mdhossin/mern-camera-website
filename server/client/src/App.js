import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import {
  ForgotPassword,
  Home,
  Login,
  Register,
  ActivationEmail,
  ResetPassword,
  NotFound,
  PrivateRoute,
  UserDashboard,
  Profile,
  Myorders,
} from "./pages";
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

        <Route path="/user/reset/:token" element={<ResetPassword />} />

        <Route path="/active/:activation_token" element={<ActivationEmail />} />

        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Profile />} />
          <Route path="myorders" element={<Myorders />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ToastProvider>
  );
}

export default App;
