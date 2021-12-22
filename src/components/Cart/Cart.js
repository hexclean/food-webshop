import React from "react";

// Components
import Card from "../Orders/Shared/Card";
import CartItem from "./CartItem";
import Checkout from "../Orders/Checkout/Checkout";

import "./Css/Cart.css";

const Cart = () => {
  const renderCartItems = () => {
    return <CartItem />;
  };

  return (
    <Card>
      <div className="col-lg-8">
        <div className="cart-details">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product-list">
                <p className="product-name-cart">Product name</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <p className="quantity-text">Quantity</p>
            </div>
            <div className="col-lg-3 col-md-3">
              <p className="price-text">Unit Price</p>
            </div>
          </div>
        </div>
        {renderCartItems()}
      </div>
      <Checkout />
    </Card>
  );
};
export default Cart;
