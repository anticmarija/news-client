import {
  SET_COUNTRIES,
  SET_ACTIVE_COUNTRY,
  ENABLE_CHANGING_COUNTRIES,
  DISABLE_CHANGING_COUNTRIES,
} from "../actions/countries.actions";

export const initialState = {
  supportedCountries: [],
  activeCountry: false,
  isChangingCountriesEnabled: true,
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
      };
    case SET_ACTIVE_COUNTRY:
      return {
        ...state,
        activeCountry: action.payload,
      };
    case ENABLE_CHANGING_COUNTRIES:
      return {
        ...state,
        isChangingCountriesEnabled: true,
      };
    case DISABLE_CHANGING_COUNTRIES:
      return {
        ...state,
        isChangingCountriesEnabled: false,
      };
    default:
      return state;
  }
};

export default countriesReducer;
