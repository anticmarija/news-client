import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { findActiveCountryName } from "../../utils/helpers";
import config from "../../config";
import useDebounce from "../../hooks/use-debounce";
import Thumbnail from "../thumbnail/Thumbnail";

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
      const asyncApiCall = async () => {
        const articles = await apiHandler(activeCountry, debouncedSearchTerm);

        setSearchingStatus(false);
        setResultArticles(articles);

        setIsNthMatched(articles.length === 0);
      };

      asyncApiCall();
    }
  }, [debouncedSearchTerm]);

  const countryName = findActiveCountryName(supportedCountries, activeCountry);

  return (
    <div>
      <h1>Search top news from {countryName} by term:</h1>
      <input
        placeholder="Search term..."
        onChange={(event) => setSearchingTerm(event.target.value)}
      ></input>
      {searchingStatus && <p>Searching...</p>}
      {isNthMatched && <p>No matches!</p>}
      {resultArticles.map((article) => (
        <Thumbnail
          key={`${article.title}_${article.publishedAt}`}
          article={article}
        />
      ))}
    </div>
  );
};

export default Search;
