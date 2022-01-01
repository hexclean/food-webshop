import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import "./Css/Checkout.css";

const shippingCost = 2;

const Checkout = ({ toast }) => {
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState("");

  const items = useSelector(state => state.cart.items);
  const itemsSubTotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const changeCouponCode = event => setCouponName(event.target.value);
  const coupon = useSelector(state => state.cart.coupon);

  const addCouponCode = () => {
    if (coupon.activatedCoupon === false && coupon.name === couponName) {
      dispatch(
        cartActions.addCouponCode({
          couponName,
        })
      );
      toast("success", "Coupon code is successfully activated");
    } else {
      toast("error", "Coupon is already used or coupon doesn't exist!");
    }
  };

  const totalAmount =
    useSelector(state => state.cart.totalAmount) + shippingCost;
  return (
    <div className="col-lg-4">
      <div className="total p-3 mt-5">
        <div className="input-group mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a coupon code"
            onChange={changeCouponCode}
            value={couponName}
          />
          <div className="input-group-append">
            <button onClick={addCouponCode} className="btn btn-outline-warning">
              Apply
            </button>
          </div>
        </div>

        {coupon.activatedCoupon && (
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="name coupon-width">
                <p className="coupon-name">
                  <u>
                    <b>Coupon is activated</b>
                  </u>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="amount text-right">
                <p className="coupon-name">
                  <u>
                    <b>-${coupon.value}</b>
                  </u>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="name">
              <p>Items subtotal:</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="amount text-right">
              <p>${itemsSubTotal}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="name">
              <p>Delivery fee:</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="amount text-right">
              <p>${shippingCost}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="name">
              <h5>
                <b>Total</b>
              </h5>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="amount text-right">
              <h4>
                <b>${totalAmount}</b>
              </h4>
            </div>
          </div>
        </div>
        <button className="btn btn-warning w-100 py-2 my-2">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
