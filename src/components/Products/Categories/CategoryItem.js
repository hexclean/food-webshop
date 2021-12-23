import React from "react";

import "./Css/CategoryItem.css";

const CategoryItem = ({ id, name }) => {
  return <li className="list category">{name}</li>;
};

export default CategoryItem;
