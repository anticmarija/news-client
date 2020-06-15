import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoriesThumbnail = ({ article }) => {
  const { activeCountry } = useSelector((state) => state.countries);
  const { title, urlToImage } = article;

  return (
    <div>
      <Link to={`/country/${activeCountry}/articles/some-article-id`}>
        <h3>{title}</h3>
        <img alt={title} src={urlToImage} />
      </Link>
    </div>
  );
};

CategoriesThumbnail.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    urlToImage: PropTypes.string,
  }),
};

export default CategoriesThumbnail;
