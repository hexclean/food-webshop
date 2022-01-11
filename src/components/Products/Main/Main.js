import React from "react";

// Components
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import Trends from "../Trends/Trends";
import ProductList from "../ProductList/ProductList";

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <Categories />
      <ProductList />
      <Trends />
    </React.Fragment>
  );
};

export default Main;
