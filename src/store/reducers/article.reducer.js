import { SET_ACTIVE_ARTICLE } from "../actions/article.actions";

export const initialState = {
  activeArticle: {},
};

/**
 * @desc Changes the state of articles according to dispatched action
 *
 * @param {any} state previous state
 * @param {any} action ation object with ation type and payload
 * @returns next (changed) state
 */
const articleReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case SET_ACTIVE_ARTICLE:
      return {
        ...state,
        activeArticle: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
