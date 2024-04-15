import React from "react";
import Counter from "./pages/Counter";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrudPage from "./pages/CrudPage";

const App = () => {
  const dispatch = useDispatch();
  const { is_dark_theme } = useSelector((store) => store.counterSlice);
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className={is_dark_theme ? "text-bg-light" : "text-bg-dark"}
    >
      <BrowserRouter>
        <Header is_dark_theme={is_dark_theme} />
        <Routes>
          <Route path="/" element={<CrudPage />} />
          <Route path="/sayaç" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
