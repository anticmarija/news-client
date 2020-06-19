import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../store/actions/top-news.actions";
import Thumbnail from "../thumbnail/Thumbnail";
import Loader from "../loader/Loader";
import { MainHeaderStyle, NewsWrapperStyle } from "../../style/Shared.style";
import { useTranslation } from "react-i18next";

const TopNews = () => {
  const { t } = useTranslation();

  const { articles, loading } = useSelector((state) => state.topNews);
  const dispatch = useDispatch();

  const { activeCountry } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchArticles(activeCountry));
    // eslint-disable-next-line
  }, [activeCountry]);

  return (
    <div>
      <MainHeaderStyle>
        {t("topNews.header")} {t(`countries.${activeCountry}`)}
      </MainHeaderStyle>
      {loading ? (
        <Loader />
      ) : (
        <NewsWrapperStyle>
          {articles?.map((article) => (
            <Thumbnail
              key={`${article.title}_${article.publishedAt}`}
              article={article}
            />
          ))}
        </NewsWrapperStyle>
      )}
    </div>
  );
};

export default withRouter(TopNews);
