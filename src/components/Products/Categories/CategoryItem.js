import React from "react";
import { useDispatch } from "react-redux";
import { productsActions } from "../../../store/products-slice";
import "./Css/CategoryItem.css";

const CategoryItem = ({ id, name }) => {
  const dispatch = useDispatch();
  const filterProducts = () => dispatch(productsActions.filteringProducts(id));
  return (
    <li onClick={filterProducts} className="list category">
      {name}
    </li>
  );
};

export default CategoryItem;
