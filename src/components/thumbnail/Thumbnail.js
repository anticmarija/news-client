import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ThumbnailWrapperStyle,
  ThumbnailImgStyle,
  ThumbnailTitleStyle,
  ThumbnailLinkStyle,
  ThumbnailDescStyle,
} from "./Thumbnail.style";
import { setActiveArticle } from "../../store/actions/article.actions";
import { disableChangingCountries } from "../../store/actions/countries.actions";
import { useTranslation } from "react-i18next";

const Thumbnail = ({ article }) => {
  const { t } = useTranslation();

  const { activeCountry } = useSelector((state) => state.countries);
  const { title, description, urlToImage } = article;

  const dispatch = useDispatch();

  return (
    <ThumbnailWrapperStyle>
      <ThumbnailTitleStyle>{title}</ThumbnailTitleStyle>
      <ThumbnailImgStyle imageUrl={urlToImage} />
      <ThumbnailDescStyle>
        <div>{description}</div>
        <ThumbnailLinkStyle>
          <Link
            data-testid="more-link"
            onClick={() => {
              dispatch(setActiveArticle(article));
              dispatch(disableChangingCountries());
            }}
            to={`/country/${activeCountry}/articles/${encodeURIComponent(
              title.toLowerCase().split(" ").join("-")
            )}`}
          >
            {t("thumbnail.readMore")} &gt;
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
