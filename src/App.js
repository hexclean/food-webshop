import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Main/Main";
import Orders from "./components/Orders/Main/Main";

import "./App.css";

function App() {
  const cart = useSelector(state => state.cart);
  const localStorageData = {
    items: cart.items,
    totalQuantity: cart.totalQuantity,
    totalAmount: cart.totalAmount,
    couponValue: cart.coupon.activatedCoupon,
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(localStorageData));
  }, [cart]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/checkout" element={<Orders />} />
      </Routes>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
