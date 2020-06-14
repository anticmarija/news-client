export const SET_COUNTRIES = "SET_COUNTRIES";
export const SET_ACTIVE_COUNTRY = "SET_ACTIVE_COUNTRY";
/**
 * Action creators
 */
export const setCountries = (countries) => {
  return { type: SET_COUNTRIES, payload: countries };
};

export const setActiveCountry = (country) => {
  return { type: SET_ACTIVE_COUNTRY, payload: country };
};
