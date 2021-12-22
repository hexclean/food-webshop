import React from "react";

import "./Css/ProductItem.css";

const ProductItem = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-md-4">
      <div className="product">
        <div className="icon">
          <i className="fas fa-shopping-bag"></i>
        </div>
        <div className="product-img text-center">
          <img
            src="images/burgers/McChicken.webp"
            className="w-100"
            alt="McChicken™"
          />
        </div>
        <h2 className="product-name py-2">McChicken™</h2>
        <p className="product-price">$2.3</p>
      </div>
    </div>
  );
};

export default ProductItem;
