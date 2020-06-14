import React from "react";
import { useSelector } from "react-redux";

const Categories = () => {
  const { supportedCategories } = useSelector((state) => state.categories);

  return (
    <div>
      categories
      {supportedCategories.map((category) => (
        <h1 key={category}>{category}</h1>
      ))}
    </div>
  );
};

export default Categories;
