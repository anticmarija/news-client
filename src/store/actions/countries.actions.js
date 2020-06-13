export const SET_COUNTRIES = "SET_COUNTRIES";

/**
 * Action creators
 */
export const setCountries = (countries) => {
  return { type: SET_COUNTRIES, payload: countries };
};
