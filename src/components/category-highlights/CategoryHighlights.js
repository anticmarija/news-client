import React, { useState } from "react";
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
        {categoryArticles.map((article) => (
          <Thumbnail
            key={`${article.title}_${article.publishedAt}`}
            article={article}
          />
        ))}
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
