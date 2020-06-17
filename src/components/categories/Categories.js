import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTop5ArticlesPerCategory } from "../../store/actions/categories.actions";
import CategoriesThumbnail from "../categories-thumbnail/CategoriesThumbnail";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import { CategoriesWrapperStyle } from "./Categories.style";
import { MainHeaderStyle } from "../../style/Shared.style";

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
    // eslint-disable-next-line
  }, [activeCountry, supportedCategories]);

  return loadingCategories ? (
    <Loader />
  ) : (
    <CategoriesWrapperStyle>
      <MainHeaderStyle>Categories</MainHeaderStyle>
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
    </CategoriesWrapperStyle>
  );
};

export default Categories;
