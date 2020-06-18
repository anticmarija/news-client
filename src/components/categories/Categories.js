import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTop5ArticlesPerCategory } from "../../store/actions/categories.actions";
import Loader from "../loader/Loader";
import { CategoriesWrapperStyle } from "./Categories.style";
import { MainHeaderStyle } from "../../style/Shared.style";
import { findActiveCountryName } from "../../utils/helpers";
import CategoryHighlights from "../category-highlights/CategoryHighlights";

const Categories = () => {
  const {
    supportedCategories,
    categoryArticles,
    loadingCategories,
  } = useSelector((state) => state.categories);

  const { activeCountry, supportedCountries } = useSelector(
    (state) => state.countries
  );
  const dispatch = useDispatch();

  const countryName = findActiveCountryName(supportedCountries, activeCountry);

  useEffect(() => {
    dispatch(fetchTop5ArticlesPerCategory(activeCountry, supportedCategories));
    // eslint-disable-next-line
  }, [activeCountry, supportedCategories]);

  return loadingCategories ? (
    <Loader />
  ) : (
    <CategoriesWrapperStyle>
      <MainHeaderStyle>
        Top 5 news by categories from {countryName}
      </MainHeaderStyle>
      {Object.keys(categoryArticles).map((category) => {
        return (
          <CategoryHighlights
            key={category}
            category={category}
            categoryArticles={categoryArticles[category]}
            activeCountry={activeCountry}
          />
        );
      })}
    </CategoriesWrapperStyle>
  );
};

export default Categories;
