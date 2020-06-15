import React, { useEffect } from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import Menu from "./components/menu/Menu";
import TopNews from "./components/top-news/TopNews";
import Categories from "./components/categories/Categories";
import Search from "./components/search/Search";
import Article from "./components/article/Article";
import config from "./config";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "./store/actions/countries.actions";
import { setCategories } from "./store/actions/categories.actions";
import Category from "./components/category/Category";

function App() {
  const dispatch = useDispatch();
  const { activeCountry } = useSelector((state) => state.countries);

  useEffect(() => {
    const countries = config.getCountries();
    const categories = config.getCategories();

    dispatch(setCountries(countries));
    dispatch(setCategories(categories));

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
          <Route path={`/country/${activeCountry}/categories/:categoryName`}>
            <Category />
          </Route>
          <Route path={`/country/${activeCountry}/categories`}>
            <Categories />
          </Route>
          <Route path={`/country/${activeCountry}/search`}>
            <Search />
          </Route>
          <Route path={`/country/${activeCountry}/articles/:articleId`}>
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
