import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTop5ArticlesPerCategory } from "../../store/actions/categories.actions";
import CategoriesThumbnail from "../categories-thumbnail/CategoriesThumbnail";
import { Link } from "react-router-dom";

const Categories = () => {
  const {
    supportedCategories,
    categoryArticles,
    loadingCategories,
  } = useSelector((state) => state.categories);

  let { activeCountry } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTop5ArticlesPerCategory(activeCountry, supportedCategories));
  }, [activeCountry, supportedCategories]);

  return loadingCategories ? (
    "loading...."
  ) : (
    <div>
      <h1>Categories</h1>
      {Object.keys(categoryArticles).map((category) => {
        return (
          <div key={category}>
            <Link
              to={`/country/${activeCountry}/categories/${category.toLowerCase()}`}
            >
              <h2 key={category}>{category}</h2>
            </Link>
            {categoryArticles[category].map((article) => (
              <CategoriesThumbnail
                key={`${article.title}_${article.publishedAt}`}
                article={article}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
