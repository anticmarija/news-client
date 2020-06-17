import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ThumbnailWrapperStyle,
  ThumbnailImgStyle,
  ThumbnailTitleStyle,
  ThumbnailLinkStyle,
  ThumbnailDescStyle,
} from "./Thumbnail.style";

const Thumbnail = ({ article }) => {
  const { activeCountry } = useSelector((state) => state.countries);
  const { title, description, urlToImage } = article;

  return (
    <ThumbnailWrapperStyle>
      <ThumbnailTitleStyle>{title}</ThumbnailTitleStyle>
      <ThumbnailImgStyle imageUrl={urlToImage} />
      <ThumbnailDescStyle>
        <div>{description}</div>
        <ThumbnailLinkStyle>
          <Link to={`/country/${activeCountry}/articles/:articleId`}>
            More &gt;
          </Link>
        </ThumbnailLinkStyle>
      </ThumbnailDescStyle>
    </ThumbnailWrapperStyle>
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
