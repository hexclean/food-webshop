import React from "react";

import "./Css/CartIcon.css";

const CartIcon = () => {
  return (
    <div className="col-lg-6 col-md-6 text-right pt-3">
      <div className="grp-btn">
        <div className="btn-group btn-group-toggle">
          <label className="btn btn-light">
            <i className="fas fa-shopping-bag cart-icon"></i>
            <span className="badge badge-warning" id="lblCartCount">
              5
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
