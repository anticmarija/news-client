import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import config from "../../config";
import useDebounce from "../../hooks/use-debounce";
import Thumbnail from "../thumbnail/Thumbnail";
import { NewsWrapperStyle, MainHeaderStyle } from "../../style/Shared.style";
import {
  SearchWrapperStyle,
  SearchInputStyle,
  SearchingStatusStyle,
} from "./Search.style";
import { useTranslation } from "react-i18next";

const apiHandler = async (activeCountry, searchingTerm) => {
  const response = await fetch(
    `${config.getApiBaseUrl()}/top-headlines?country=${activeCountry}&q=${searchingTerm}&apiKey=${config.getApiKey()}`
  );
  const { articles } = await response.json();
  return articles;
};

const Search = () => {
  const { t } = useTranslation();

  let { activeCountry } = useSelector((state) => state.countries);
  const [searchingStatus, setSearchingStatus] = useState(false);
  const [searchingTerm, setSearchingTerm] = useState("");
  const [resultArticles, setResultArticles] = useState([]);

  const [isNthMatched, setIsNthMatched] = useState(false);

  const debouncedSearchTerm = useDebounce(searchingTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchingStatus(true);
      setIsNthMatched(false);
      const asyncApiCall = async () => {
        const articles = await apiHandler(activeCountry, debouncedSearchTerm);

        setSearchingStatus(false);
        setResultArticles(articles);

        setIsNthMatched(articles.length === 0);
      };

      asyncApiCall();
    } else {
      setResultArticles([]);
    }
  }, [debouncedSearchTerm, activeCountry]);

  return (
    <SearchWrapperStyle>
      <MainHeaderStyle>
        {t("search.header")} {t(`countries.${activeCountry}`)}{" "}
        {t("search.byTerm")}:
      </MainHeaderStyle>
      <SearchInputStyle
        data-testid="search-input"
        placeholder={t("search.placeholder")}
        onChange={(event) => setSearchingTerm(event.target.value)}
      ></SearchInputStyle>
      <SearchingStatusStyle show={searchingStatus || isNthMatched}>
        {searchingStatus
          ? t("search.searching")
          : isNthMatched && t("search.nthMatched")}
      </SearchingStatusStyle>
      <NewsWrapperStyle>
        {resultArticles.map((article) => (
          <Thumbnail
            key={`${article.title}_${article.publishedAt}`}
            article={article}
          />
        ))}
      </NewsWrapperStyle>
    </SearchWrapperStyle>
  );
};

export default Search;
