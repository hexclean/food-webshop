import React from "react";

const TrendItem = () => {
  return (
    <div className="col-lg-3 col-6 col-sm-12">
      <div className="product">
        <i className="fas fa-shopping-bag icon"></i>
        <div className="product-img text-center">
          <img
            src="images/trends/Cola-250-ml_1.webp"
            className="w-100"
            alt="Coca-Cola®"
          />
        </div>
        <h2 className="product-name py-2">Coca-Cola®</h2>
        <p className="product-price">$1</p>
      </div>
    </div>
  );
};
export default TrendItem;
