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
        {products.map(item => (
          <ProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </>
    );
  };

  return <Card>{renderProducts()}</Card>;
};

export default Products;
