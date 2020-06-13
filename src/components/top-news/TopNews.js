import React, { useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../store/actions/top-news.actions";
import Thumbnail from "../thumbnail/Thumbnail";

const TopNews = () => {
  let { countryId } = useParams();

  const articles = useSelector((state) => state.topNews.articles);
  const dispatch = useDispatch();

  console.log(articles);

  useEffect(() => {
    dispatch(fetchArticles(countryId));
    // eslint-disable-next-line
  }, [countryId]);

  return (
    <div>
      top news {countryId}
      <div>
        {articles?.map((article) => (
          <Thumbnail
            key={`${article.title}_${article.publishedAt}`}
            article={article}
          />
        ))}
      </div>
    </div>
  );
};

export default withRouter(TopNews);
