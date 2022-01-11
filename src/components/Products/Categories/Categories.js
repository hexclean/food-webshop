import React from "react";
import { useSelector } from "react-redux";
// Components
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const categories = useSelector(state => state.categories.categoryList);
  const renderCategories = () => {
    return (
      <ul className="u-list">
        {categories.map(item => (
          <CategoryItem key={item.id} id={item.id} name={item.name} />
        ))}
      </ul>
    );
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-12">{renderCategories()}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
