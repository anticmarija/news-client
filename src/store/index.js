import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import topNewsReducer from "./reducers/top-news.reducer";
import countriesReducer from "./reducers/countries.reducer";
import categoriesReducer from "./reducers/categories.reducer";
import articleReducer from "./reducers/article.reducer";

const store = createStore(
  combineReducers({
    topNews: topNewsReducer,
    countries: countriesReducer,
    categories: categoriesReducer,
    article: articleReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
