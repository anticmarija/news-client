import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { findActiveCountryName } from "../../utils/helpers";
import config from "../../config";
import useDebounce from "../../hooks/use-debounce";
import Thumbnail from "../thumbnail/Thumbnail";
import { NewsWrapperStyle, MainHeaderStyle } from "../../style/Shared.style";
import {
  SearchWrapperStyle,
  SearchInputStyle,
  SearchingStatusStyle,
} from "./Search.style";

const apiHandler = async (activeCountry, searchingTerm) => {
  const response = await fetch(
    `${config.getApiBaseUrl()}/top-headlines?country=${activeCountry}&q=${searchingTerm}&apiKey=${config.getApiKey()}`
  );
  const { articles } = await response.json();
  return articles;
};

const Search = () => {
  let { activeCountry, supportedCountries } = useSelector(
    (state) => state.countries
  );
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

  const countryName = findActiveCountryName(supportedCountries, activeCountry);

  return (
    <SearchWrapperStyle>
      <MainHeaderStyle>
        Search top news from {countryName} by term:
      </MainHeaderStyle>
      <SearchInputStyle
        placeholder="Search term..."
        onChange={(event) => setSearchingTerm(event.target.value)}
      ></SearchInputStyle>
      <SearchingStatusStyle show={searchingStatus || isNthMatched}>
        {searchingStatus ? "Searching..." : isNthMatched && "Nothing matches!"}
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
