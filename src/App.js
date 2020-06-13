import React, { useEffect } from "react";
import "./App.css";

import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Menu from "./components/menu/Menu";
import TopNews from "./components/top-news/TopNews";
import Categories from "./components/categories/Categories";
import Search from "./components/search/Search";
import Article from "./components/article/Article";
import config from "./config";
import { useDispatch } from "react-redux";
import { setCountries } from "./store/actions/countries.actions";

function App() {
  //TODO - select active country from state
  const dispatch = useDispatch();

  useEffect(() => {
    const countries = config.getCountries();
    dispatch(setCountries(countries));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" render={() => <Redirect to={"/country/gb"} />} />
        <Route path="/country/:countryId/categories" render={Categories} />
        <Route path="/country/:countryId/search" render={Search} />
        <Route path="/country/:countryId/article/:articleId" render={Article} />
        <Route path="/country/:countryId" render={TopNews} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
