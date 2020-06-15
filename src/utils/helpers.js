export const findNewRoute = (pathname, selectedCountry) => {
  const routeArray = pathname.split("/");
  // Country ID is after 'country'
  const countryIdRouteIndex = routeArray.indexOf("country") + 1;
  routeArray[countryIdRouteIndex] = selectedCountry;

  return routeArray.join("/");
};
