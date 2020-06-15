import {
  SET_CATEGORIES,
  FETCH_TOP_5_ARTICLES_PER_CATEGORY_DONE,
  FETCH_TOP_5_ARTICLES_PER_CATEGORY_FAIL,
  FETCH_TOP_5_ARTICLES_PER_CATEGORY_SUCCESS,
  FETCH_TOP_5_ARTICLES_PER_CATEGORY_START,
} from "../actions/categories.actions";

export const initialState = {
  supportedCategories: [],
  categoryArticles: {},
  loadingCategories: true,
};

/**
 * @desc Changes the state of categories and their articles according to dispatched action
 *
 * @param {any} state previous state
 * @param {any} action ation object with ation type and payload
 * @returns next (changed) state
 */
const categoriesReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        supportedCategories: action.payload,
      };
    case FETCH_TOP_5_ARTICLES_PER_CATEGORY_START:
      return {
        ...state,
        loadingCategories: true,
      };
    case FETCH_TOP_5_ARTICLES_PER_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryArticles: {
          ...state.categoryArticles,
          [action.payload.category]: action.payload.articles,
        },
      };
    case FETCH_TOP_5_ARTICLES_PER_CATEGORY_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingCategories: false,
      };
    case FETCH_TOP_5_ARTICLES_PER_CATEGORY_DONE:
      return {
        ...state,
        loadingCategories: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
