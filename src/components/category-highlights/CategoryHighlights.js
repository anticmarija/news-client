import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import arrowIcon from "../../assets/arrow.svg";
import {
  CategoryWrapperStyle,
  CategoryTitleWrapper,
  CategoryLinkStyle,
  ArrowIconStyle,
  CategoryArticlesStyle,
} from "./CategoryHighlights.style";
import Thumbnail from "../thumbnail/Thumbnail";
import config from "../../config";

const CategoryHighlights = ({ category, categoryArticles, activeCountry }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <CategoryWrapperStyle key={category}>
      <CategoryTitleWrapper>
        <CategoryLinkStyle
          to={`/country/${activeCountry}/categories/${category.toLowerCase()}`}
        >
          {category}
        </CategoryLinkStyle>
        <ArrowIconStyle
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
          src={arrowIcon}
          alt="arrow"
        />
      </CategoryTitleWrapper>

      <CategoryArticlesStyle isExpanded={isExpanded}>
        <Slider {...config.getSliderSettings()}>
          {categoryArticles.map((article) => (
            <Thumbnail
              article={article}
              key={`${article.titlge}_${article.publishedAt}`}
            />
          ))}
        </Slider>
      </CategoryArticlesStyle>
    </CategoryWrapperStyle>
  );
};

CategoryHighlights.propTypes = {
  category: PropTypes.string,
  activeCountry: PropTypes.string,
  categoryArticles: PropTypes.array,
};

export default CategoryHighlights;
