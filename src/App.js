import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Main/Main";
import Orders from "./components/Orders/Main/Main";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/checkout" element={<Orders />} />
    </Routes>
  );
}

export default App;
