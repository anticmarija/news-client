import {
  SET_COUNTRIES,
  SET_ACTIVE_COUNTRY,
} from "../actions/countries.actions";

export const initialState = {
  supportedCountries: [],
  activeCountry: false,
};

/**
 * @desc Changes the state of articles according to dispatched action
 *
 * @param {any} state previous state
 * @param {any} action ation object with ation type and payload
 * @returns next (changed) state
 */
const countriesReducer = (state, action) => {
  if (!state) {
    return initialState;
  }
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        supportedCountries: action.payload,
        activeCountry: action.payload[0],
      };
    case SET_ACTIVE_COUNTRY:
      return {
        ...state,
        activeCountry: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
