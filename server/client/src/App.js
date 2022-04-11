import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
