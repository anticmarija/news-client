import React from "react";
import "./App.css";

import { Route, Switch, withRouter } from "react-router-dom";

import Menu from "./components/menu/Menu";
import TopNews from "./components/top-news/TopNews";
import Categories from "./components/categories/Categories";
import Search from "./components/search/Search";
import Article from "./components/article/Article";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/categories" render={Categories} />
        <Route path="/search" render={Search} />
        <Route path="/article/:articleId" render={Article} />
        <Route path="/" render={TopNews} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
