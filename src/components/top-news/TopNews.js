import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../store/actions/top-news.actions";
import Thumbnail from "../thumbnail/Thumbnail";
import Loader from "../loader/Loader";
import { findActiveCountryName } from "../../utils/helpers";

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
      <h1>Top news from {countryName}</h1>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {articles?.map((article) => (
            <Thumbnail
              key={`${article.title}_${article.publishedAt}`}
              article={article}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default withRouter(TopNews);
