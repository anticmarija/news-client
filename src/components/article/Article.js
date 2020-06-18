import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { MainHeaderStyle } from "../../style/Shared.style";
import { ArticleImageStyle, ArticleWrapperStyle } from "./Article.style";
import { enableChangingCountries } from "../../store/actions/countries.actions";
import { useEffect } from "react";

//TODO - handle refresh article
const Article = () => {
  const { activeArticle } = useSelector((state) => state.article);
  const { title, urlToImage, description } = activeArticle;

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(enableChangingCountries());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <ArticleWrapperStyle>
      <MainHeaderStyle>{title}</MainHeaderStyle>
      <ArticleImageStyle alt={title} src={urlToImage} />
      <p>{description}</p>
    </ArticleWrapperStyle>
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
