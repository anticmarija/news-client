import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../store/actions/top-news.actions";
import Thumbnail from "../thumbnail/Thumbnail";

const TopNews = () => {
  const { articles, loading } = useSelector((state) => state.topNews);
  const dispatch = useDispatch();

  const { activeCountry } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchArticles(activeCountry));
    // eslint-disable-next-line
  }, [activeCountry]);

  return (
    <div>
      top news {activeCountry}
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
