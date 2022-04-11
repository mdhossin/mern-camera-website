import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Login, Register } from "./pages";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
