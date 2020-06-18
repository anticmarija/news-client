import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

//TODO - handle refresh article
const Article = () => {
  const { activeArticle } = useSelector((state) => state.article);
  const { title, urlToImage, description } = activeArticle;

  return (
    <div>
      <h1>{title}</h1>
      <img alt={title} src={urlToImage} />
      <p>{description}</p>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
  }),
};

export default Article;
