import React from "react";

// Components
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const renderCategories = () => {
    return (
      <ul className="u-list">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </ul>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-12">{renderCategories()}</div>
        </div>
      </div>
    </>
  );
};

export default Categories;
