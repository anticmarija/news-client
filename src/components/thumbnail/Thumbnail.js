import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Thumbnail = ({ article }) => {
  const { activeCountry } = useSelector((state) => state.countries);
  const { title, description, urlToImage } = article;

  return (
    <div>
      <h1>{title}</h1>
      <img alt={title} src={urlToImage} />
      <p>{description}</p>
      <Link to={`/country/${activeCountry}/articles/:articleId`}>
        More &gt;
      </Link>
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
