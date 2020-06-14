import {
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL,
} from "../actions/top-news.actions";

export const initialState = {
  articles: [],
  loading: false,
  error: null,
};

/**
 * @desc Changes the state of articles according to dispatched action
 *
 * @param {any} state previous state
 * @param {any} action ation object with ation type and payload
 * @returns next (changed) state
 */
const topNewsReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case FETCH_ARTICLES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case FETCH_ARTICLES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default topNewsReducer;
