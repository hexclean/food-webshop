import React from "react";

// Components
import ProductItem from "./ProductItem";
import Card from "../Shared/Card";

const Products = () => {
  const renderProducts = () => {
    return (
      <>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </>
    );
  };

  return <Card>{renderProducts()}</Card>;
};

export default Products;
