import React from "react";

import "./Css/Checkout.css";

const Checkout = () => {
  return (
    <div className="col-lg-4">
      <div className="total p-3 mt-5">
        <div className="input-group mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a coupon code"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-warning">Apply</button>
          </div>
        </div>

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
                  <b>-$1</b>
                </u>
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="name">
              <p>Items subtotal:</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="amount text-right">
              <p>$22</p>
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
              <p>$2</p>
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
                <b>$24</b>
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
