import React from "react";
import { useSelector } from "react-redux";
// Components
import ProductItem from "./ProductItem";
import Card from "../Shared/Card";

const Products = () => {
  const products = useSelector(state => state.products.productList);
  console.log(products);
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
