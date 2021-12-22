import React from "react";

import "./Css/CartItem.css";

const CartItem = () => {
  return (
    <div className="product-details py-2">
      <div className="row">
        <div className="col-lg-2 col-md-2">
          <div className="product-image">
            <img
              src="images/burgers/McChicken.webp"
              alt="McChicken™"
              className="w-100"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 pt-3 cart-item-bs">
          <div className="product-description">
            <h4>
              <b>McChicken™</b>
            </h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 pt-4">
          <div className="cart-box">
            <i className="fas fa-minus action-buttons minus-icon"></i>
            <p className="qty quantity-left">
              <b>1</b>
            </p>
            <i className="fa fa-plus action-buttons"></i>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 pt-4 cart-box-price">
          <p className="price">$12</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
