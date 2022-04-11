import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { ForgotPassword, Home, Login, Register } from "./pages";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      </Routes>
    </>
  );
}

export default App;
