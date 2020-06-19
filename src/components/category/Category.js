import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArticlesPerCategory } from "../../store/actions/categories.actions";
import Thumbnail from "../thumbnail/Thumbnail";
import Loader from "../loader/Loader";
import { MainHeaderStyle, NewsWrapperStyle } from "../../style/Shared.style";
import { capitalize } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

const Category = () => {
  const { t } = useTranslation();

  let { activeCountry } = useSelector((state) => state.countries);

  let { categoryName } = useParams();
  let { loadingAllCategoryArticles, allCategoryArticles } = useSelector(
    (state) => state.categories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllArticlesPerCategory(activeCountry, categoryName));
    // eslint-disable-next-line
  }, [activeCountry, categoryName]);

  return (
    <div>
      {loadingAllCategoryArticles ? (
        <Loader />
      ) : (
        <>
          <MainHeaderStyle>
            {t("category")}&nbsp;
            {capitalize(categoryName)}
          </MainHeaderStyle>
          <NewsWrapperStyle>
            {allCategoryArticles.map((article) => (
              <Thumbnail
                key={`${article.title}_${article.publishedAt}`}
                article={article}
              />
            ))}
          </NewsWrapperStyle>
        </>
      )}
    </div>
  );
};

export default Category;
