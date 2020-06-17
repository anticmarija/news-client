import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../store/actions/top-news.actions";
import Thumbnail from "../thumbnail/Thumbnail";
import Loader from "../loader/Loader";
import { findActiveCountryName } from "../../utils/helpers";
import { MainHeaderStyle, NewsWrapperStyle } from "../../style/Shared.style";

const TopNews = () => {
  const { articles, loading } = useSelector((state) => state.topNews);
  const dispatch = useDispatch();

  const { activeCountry, supportedCountries } = useSelector(
    (state) => state.countries
  );

  useEffect(() => {
    dispatch(fetchArticles(activeCountry));
    // eslint-disable-next-line
  }, [activeCountry]);

  const countryName = findActiveCountryName(supportedCountries, activeCountry);

  return (
    <div>
      <MainHeaderStyle>Top news from {countryName}</MainHeaderStyle>
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
