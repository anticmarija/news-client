import { SET_CATEGORIES } from "../actions/categories.actions";

export const initialState = {
  supportedCategories: [],
};

/**
 * @desc Changes the state of articles according to dispatched action
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
    default:
      return state;
  }
};

export default categoriesReducer;
