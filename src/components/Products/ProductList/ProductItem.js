import React from "react";

import "./Css/ProductItem.css";

const ProductItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-md-4">
      <div className="product">
        <div className="icon">
          <i className="fas fa-shopping-bag"></i>
        </div>
        <div className="product-img text-center">
          <img src={imageUrl} className="w-100" alt="McChicken™" />
        </div>
        <h2 className="product-name py-2">{name}</h2>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
