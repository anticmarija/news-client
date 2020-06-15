export const SET_COUNTRIES = "SET_COUNTRIES";
export const SET_ACTIVE_COUNTRY = "SET_ACTIVE_COUNTRY";
export const ENABLE_CHANGING_COUNTRIES = "ENABLE_CHANGING_COUNTRIES";
export const DISABLE_CHANGING_COUNTRIES = "DISABLE_CHANGING_COUNTRIES";

/**
 * Action creators
 */
export const setCountries = (countries) => {
  return { type: SET_COUNTRIES, payload: countries };
};

export const setActiveCountry = (country) => {
  return { type: SET_ACTIVE_COUNTRY, payload: country };
};

export const enableChangingCountries = () => {
  return { type: ENABLE_CHANGING_COUNTRIES };
};

export const disableChangingCountries = () => {
  return { type: DISABLE_CHANGING_COUNTRIES };
};
