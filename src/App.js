import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import Home from "./Home";

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/home" element={<Home />} />
  </Routes>
);

export default App;
