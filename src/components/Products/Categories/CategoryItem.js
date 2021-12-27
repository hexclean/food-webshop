import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../../store/products-slice";
import { categoriesActions } from "../../../store/categories-slice";
import "./Css/CategoryItem.css";

const CategoryItem = ({ id, name }) => {
  const dispatch = useDispatch();

  const filterProducts = () => {
    dispatch(productsActions.filteringProducts(id));
    dispatch(categoriesActions.changeSelectedCategory(id));
  };

  const getSelectedCategoryId = useSelector(
    state => state.categories.selectedCategoryId
  );
  const activeClass = getSelectedCategoryId === id ? "selected-category" : "";
  return (
    <li onClick={filterProducts} className={`${activeClass} list category`}>
      {name}
    </li>
  );
};

export default CategoryItem;
