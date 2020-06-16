import React, { useEffect } from "react";
import "./App.css";

import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import Menu from "./components/menu/Menu";
import TopNews from "./components/top-news/TopNews";
import Categories from "./components/categories/Categories";
import Search from "./components/search/Search";
import Article from "./components/article/Article";
import config from "./config";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountries,
  setActiveCountry,
} from "./store/actions/countries.actions";
import { setCategories } from "./store/actions/categories.actions";
import Category from "./components/category/Category";
import { findCountryIdInPathname } from "./utils/helpers";

function App() {
  const dispatch = useDispatch();
  const { activeCountry } = useSelector((state) => state.countries);

  const { pathname } = useLocation();

  useEffect(() => {
    const countries = config.getCountries();
    const categories = config.getCategories();

    dispatch(setCountries(countries));
    dispatch(setCategories(categories));

    const countryInRoute = findCountryIdInPathname(pathname);

    if (countryInRoute === -1) {
      //handle landing on page - set first country as default
      dispatch(setActiveCountry(countries[0].countryId));
    } else {
      //handle refresh with country in route
      dispatch(setActiveCountry(countryInRoute));
    }
    // eslint-disable-next-line
  }, []);

  return (
    activeCountry && (
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/">
            <Redirect to={`/country/${activeCountry}`} />
          </Route>
          <Route path={`/country/:countryId/categories/:categoryName`}>
            <Category />
          </Route>
          <Route path={`/country/:countryId/categories`}>
            <Categories />
          </Route>
          <Route path={`/country/:countryId/search`}>
            <Search />
          </Route>
          <Route path={`/country/:countryId/articles/:articleId`}>
            <Article />
          </Route>
          <Route path="/country/:countryId">
            <TopNews />
          </Route>
        </Switch>
      </div>
    )
  );
}

export default App;
