import React from "react";
import { useSelector } from "react-redux";
// Components
import Card from "../Orders/Shared/Card";
import CartItem from "./CartItem";
import Checkout from "../Orders/Checkout/Checkout";
import toast from "../util/toast";

import "./Css/Cart.css";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const renderCartItems = () =>
    cartItems.map(item => (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        imageUrl={item.imageUrl}
        totalItemAmount={item.totalItemAmount}
        itemQuantity={item.quantity}
        toast={toast}
      />
    ));

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
      <Checkout toast={toast} />
    </Card>
  );
};
export default Cart;
