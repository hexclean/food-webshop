import React from "react";
import { useSelector } from "react-redux";
// Components
import ProductItem from "./ProductItem";
import Card from "../Shared/Card";
import toast from "../../util/toast";

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
            toast={toast}
          />
        ))}
      </>
    );
  };

  return <Card>{renderProducts()}</Card>;
};

export default Products;
