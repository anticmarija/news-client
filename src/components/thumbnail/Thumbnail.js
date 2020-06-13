import React from "react";
import PropTypes from "prop-types";

const Thumbnail = ({ article }) => {
  const { title, description, urlToImage } = article;
  return (
    <div>
      <h1>{title}</h1>
      <img alt={title} src={urlToImage} />
      <p>{description}</p>
    </div>
  );
};

Thumbnail.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
  }),
};

export default Thumbnail;
