import React, { useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../store/actions/top-news.actions";
import Thumbnail from "../thumbnail/Thumbnail";
import { setActiveCountry } from "../../store/actions/countries.actions";

const TopNews = () => {
  let { countryId } = useParams();

  const { articles, loading } = useSelector((state) => state.topNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles(countryId));
    dispatch(setActiveCountry(countryId));

    // eslint-disable-next-line
  }, [countryId]);

  return (
    <div>
      top news {countryId}
      {loading ? (
        "Loading...."
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
