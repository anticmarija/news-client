import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTop5ArticlesPerCategory } from "../../store/actions/categories.actions";
import Loader from "../loader/Loader";
import { CategoriesWrapperStyle } from "./Categories.style";
import { MainHeaderStyle } from "../../style/Shared.style";
import CategoryHighlights from "../category-highlights/CategoryHighlights";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation();

  const {
    supportedCategories,
    categoryArticles,
    loadingCategories,
  } = useSelector((state) => state.categories);

  const { activeCountry } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTop5ArticlesPerCategory(activeCountry, supportedCategories));
    // eslint-disable-next-line
  }, [activeCountry, supportedCategories]);

  return loadingCategories ? (
    <Loader />
  ) : (
    <CategoriesWrapperStyle>
      <MainHeaderStyle>
        {t("categories.header")} {t(`countries.${activeCountry}`)}
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
